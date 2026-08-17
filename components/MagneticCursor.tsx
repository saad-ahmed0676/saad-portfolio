'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// ─── Spring config ────────────────────────────────────────────────────────────
const LERP_BASE = 0.12;   // Default spring: smooth tracking
const LERP_ACTIVE = 0.18; // Slightly snappier when showing a label

// ─── Magnetic Cursor ─────────────────────────────────────────────────────────
export default function MagneticCursor() {
  const dotRef       = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number | null>(null);
  const rawPos       = useRef({ x: -200, y: -200 });
  const springPos    = useRef({ x: -200, y: -200 });
  const labelRef     = useRef<string | null>(null); // mutable ref for rAF closure

  const [label, setLabel]   = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  // ── Find the nearest ancestor with data-cursor-label ─────────────────────
  const getLabelFromTarget = useCallback((target: EventTarget | null): string | null => {
    if (!(target instanceof Element)) return null;
    const el = target.closest('[data-cursor-label]');
    return el ? (el as HTMLElement).dataset.cursorLabel ?? null : null;
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // ── mousemove: update raw position and label ──────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      rawPos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      const hit = getLabelFromTarget(e.target);
      if (hit !== labelRef.current) {
        labelRef.current = hit;
        setLabel(hit);
      }
    };

    // ── mouseleave: hide when pointer exits viewport ──────────────────────
    const onMouseLeave = () => {
      setVisible(false);
      labelRef.current = null;
      setLabel(null);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    // ── rAF spring loop — runs for the entire component lifetime ──────────
    const tick = () => {
      const lerp = labelRef.current ? LERP_ACTIVE : LERP_BASE;
      springPos.current.x += (rawPos.current.x - springPos.current.x) * lerp;
      springPos.current.y += (rawPos.current.y - springPos.current.y) * lerp;

      if (dot) {
        dot.style.transform = `translate(${springPos.current.x.toFixed(2)}px, ${springPos.current.y.toFixed(2)}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [getLabelFromTarget]);

  // ── Derived state for badge expansion ────────────────────────────────────
  const badgeActive = label !== null && visible;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      data-cursor
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99999,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    >
      {/* Dot — always present, scales up slightly when label is active */}
      <div
        style={{
          width: badgeActive ? '10px' : '8px',
          height: badgeActive ? '10px' : '8px',
          borderRadius: '50%',
          background: 'var(--accent)',
          opacity: visible ? 0.9 : 0,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease, width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1)',
        }}
      />

      {/* Label badge — springs in when hovering a labelled element */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${badgeActive ? 1 : 0.65}) translateY(${badgeActive ? '-26px' : '-18px'})`,
          opacity: badgeActive ? 1 : 0,
          transition: 'opacity 0.2s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
          whiteSpace: 'nowrap',
          background: 'var(--accent)',
          color: '#fff',
          fontFamily: 'monospace',
          fontSize: '9px',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          padding: '5px 11px',
          borderRadius: '9999px',
          pointerEvents: 'none',
        }}
      >
        {label}
      </div>
    </div>
  );
}
