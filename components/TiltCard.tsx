'use client';

import React, { useRef, useState, useCallback } from 'react';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default 5)
  glare?: boolean;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 5,
  glare = true,
  ...rest // forward data-* and other HTML attributes
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const clientX = e.clientX;
      const clientY = e.clientY;

      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width; // 0 → 1
        const y = (clientY - rect.top) / rect.height;  // 0 → 1

        const rotateY = (x - 0.5) * (maxTilt * 2);  // −maxTilt → +maxTilt
        const rotateX = (0.5 - y) * (maxTilt * 2);  // −maxTilt → +maxTilt

        setStyle({
          transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`,
          transition: 'transform 0.1s ease-out',
          willChange: 'transform',
        });

        if (glare) {
          setGlareStyle({
            background: `radial-gradient(circle 280px at ${(x * 100).toFixed(1)}% ${(y * 100).toFixed(1)}%, rgba(232, 80, 58, 0.14), transparent 72%)`,
            opacity: 1,
            transition: 'opacity 0.15s ease',
          });
        }

        rafRef.current = null;
      });
    },
    [maxTilt, glare],
  );

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    // Spring the card back flat; clear willChange to free GPU layer
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
      willChange: 'auto',
    });
    if (glare) {
      setGlareStyle({
        opacity: 0,
        transition: 'opacity 0.45s ease',
      });
    }
  }, [glare]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative overflow-hidden ${className}`}
      {...rest}
    >
      {/* 2.5D Mouse Glare Highlight Layer — screen blend for dark canvas */}
      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            ...glareStyle,
            mixBlendMode: 'screen',
          }}
        />
      )}

      {children}
    </div>
  );
}
