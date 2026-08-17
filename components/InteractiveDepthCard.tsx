'use client';

import React from 'react';
import TiltCard from './TiltCard';

interface InteractiveDepthCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export default function InteractiveDepthCard({
  children,
  className = '',
  maxTilt = 4,
  glare = true,
  ...rest
}: InteractiveDepthCardProps) {
  return (
    <TiltCard
      maxTilt={maxTilt}
      glare={glare}
      className={`card border border-[#222222] bg-[#121212] transition-colors duration-300 hover:border-accent/40 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...rest}
    >
      <div style={{ transformStyle: 'preserve-3d' }} className="h-full w-full">
        {children}
      </div>
    </TiltCard>
  );
}
