'use client';

import React, { useRef, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
type WordToken = {
  text: string;
  accent?: boolean; // render in terracotta + kinetic glow
};

interface KineticHeadingProps {
  tokens: WordToken[];          // Words / tokens to render
  className?: string;           // Outer container className (e.g. headline sizes)
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'span';
  gap?: string;                 // Gap between tokens, default '0.35em'
}

// ─── Per-word spring state stored in refs (no re-render on move) ──────────────
interface WordState {
  el: HTMLSpanElement | null;
  raf: number | null;
  // current spring position
  x: number;
  y: number;
  // target position
  tx: number;
  ty: number;
}

const LERP = 0.14;
const MAX_SHIFT = 4; // px — maximum kinetic displacement per word

export default function KineticHeading({
  tokens,
  className = '',
  as: Tag = 'h2',
  gap = '0.35em',
}: KineticHeadingProps) {
  // One state object per token, keyed by index
  const wordStates = useRef<WordState[]>(
    tokens.map(() => ({ el: null, raf: null, x: 0, y: 0, tx: 0, ty: 0 })),
  );

  // ── Spring animation per word ─────────────────────────────────────────────
  const animateWord = useCallback((idx: number) => {
    const state = wordStates.current[idx];
    if (!state || !state.el) return;

    state.x += (state.tx - state.x) * LERP;
    state.y += (state.ty - state.y) * LERP;

    // Stop ticking once close enough
    const done = Math.abs(state.tx - state.x) < 0.01 && Math.abs(state.ty - state.y) < 0.01;
    if (done) {
      state.x = state.tx;
      state.y = state.ty;
    }

    state.el.style.transform = `translate(${state.x.toFixed(2)}px, ${state.y.toFixed(2)}px)`;

    if (!done) {
      state.raf = requestAnimationFrame(() => animateWord(idx));
    } else {
      state.raf = null;
    }
  }, []);

  // ── Mouse enter: stagger each word's target offset ───────────────────────
  const handleEnter = useCallback((e: React.MouseEvent<HTMLElement>) => {
    // Compute mouse position relative to the heading container
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const normX = (cx / rect.width - 0.5) * 2;   // −1 → +1
    const normY = (cy / rect.height - 0.5) * 2;

    wordStates.current.forEach((state, idx) => {
      if (!state.el) return;
      // Stagger direction slightly per word for visual interest
      const phase = ((idx % 3) - 1) * 0.4; // −0.4, 0, 0.4
      state.tx = normX * MAX_SHIFT * (1 + phase);
      state.ty = normY * MAX_SHIFT * 0.6;

      if (state.raf === null) {
        state.raf = requestAnimationFrame(() => animateWord(idx));
      }
    });
  }, [animateWord]);

  // ── Mouse move: update targets live ──────────────────────────────────────
  const handleMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    wordStates.current.forEach((state, idx) => {
      if (!state.el) return;
      const phase = ((idx % 3) - 1) * 0.4;
      state.tx = normX * MAX_SHIFT * (1 + phase);
      state.ty = normY * MAX_SHIFT * 0.6;

      if (state.raf === null) {
        state.raf = requestAnimationFrame(() => animateWord(idx));
      }
    });
  }, [animateWord]);

  // ── Mouse leave: spring back to zero ─────────────────────────────────────
  const handleLeave = useCallback(() => {
    wordStates.current.forEach((state, idx) => {
      state.tx = 0;
      state.ty = 0;
      if (state.raf === null) {
        state.raf = requestAnimationFrame(() => animateWord(idx));
      }
    });
  }, [animateWord]);

  return (
    <Tag
      className={`inline-flex flex-wrap select-none ${className}`}
      style={{ gap, cursor: 'default' }}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {tokens.map((token, idx) => (
        <span
          key={idx}
          ref={(el) => { wordStates.current[idx].el = el; }}
          className={
            token.accent
              ? 'text-accent kinetic-accent'
              : 'text-cream'
          }
          style={{
            display: 'inline-block',
            willChange: 'transform',
            transition: 'letter-spacing 0.25s ease, color 0.25s ease',
          }}
        >
          {token.text}
        </span>
      ))}
    </Tag>
  );
}
