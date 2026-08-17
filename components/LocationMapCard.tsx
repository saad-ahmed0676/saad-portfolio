'use client';

import React from 'react';
import InteractiveDepthCard from './InteractiveDepthCard';

export default function LocationMapCard() {
  return (
    <InteractiveDepthCard className="p-2 overflow-hidden rounded-2xl">
      <div className="relative w-full overflow-hidden rounded-xl bg-[#0a0a0a]">
        {/* Location Badge Overlay (Top Left) */}
        <div className="absolute top-4 left-4 z-20 flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-[#0d0d0d]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent relative -ml-4.5" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-cream">
              📍 DHA Phase 1, Islamabad, Pakistan
            </span>
          </div>
          <span className="hidden sm:inline text-muted font-mono text-xs">|</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-green-400">
            Available for Local &amp; Remote
          </span>
        </div>

        {/* Coordinates badge (Bottom Right) */}
        <div className="absolute bottom-4 right-4 z-20 font-mono text-[10px] text-muted bg-[#0d0d0d]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
          33.5471° N, 73.1363° E
        </div>

        {/* Embedded Dark Filtered Map */}
        <div className="w-full h-72 sm:h-80 md:h-96 relative">
          <iframe
            title="Location Map - DHA Phase 1, Islamabad"
            src="https://maps.google.com/maps?q=DHA%20Phase%201,%20Islamabad,%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter grayscale invert contrast-125 hue-rotate-180 opacity-85 hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-auto"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </InteractiveDepthCard>
  );
}
