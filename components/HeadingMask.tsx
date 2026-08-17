'use client';

import React from 'react';

interface HeadingMaskProps {
  primary: React.ReactNode;
  reveal: React.ReactNode;
  className?: string;
  badge?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'span';
}

export default function HeadingMask({
  primary,
  reveal,
  className = '',
  badge,
  as: Component = 'div',
}: HeadingMaskProps) {
  return (
    <Component className={`relative group overflow-hidden select-none ${className}`}>
      {/* Base Layer — Minh Pham Dark Theme */}
      <span className="relative z-10 block py-0.5 transition-opacity duration-300">
        {badge && (
          <span className="inline-block text-[10px] font-mono tracking-widest text-accent uppercase mb-1 px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
            {badge}
          </span>
        )}
        <span className="block">{primary}</span>
      </span>

      {/* Mask Reveal Layer — Clipped by spotlight position */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-center bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-cream rounded-lg p-2 transition-all duration-75"
        style={{
          clipPath: `circle(100px at var(--mouse-x, -1000px) var(--mouse-y, -1000px))`,
          boxShadow: 'inset 0 0 30px rgba(229, 91, 60, 0.15)',
        }}
      >
        {badge && (
          <span className="inline-block text-[10px] font-mono tracking-widest text-subAccent uppercase mb-1 px-2 py-0.5 rounded bg-subAccent/10 border border-subAccent/30 w-fit">
            ✨ REVEALED
          </span>
        )}
        <span className="block text-cream font-bold drop-shadow-[0_0_12px_rgba(229,91,60,0.5)]">
          {reveal}
        </span>
      </span>
    </Component>
  );
}
