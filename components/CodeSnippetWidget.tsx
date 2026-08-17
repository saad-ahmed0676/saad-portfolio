'use client';

import React, { useState } from 'react';

type TabType = 'workflow.config' | 'expertise.ts' | 'stack.json';

export default function CodeSnippetWidget() {
  const [activeTab, setActiveTab] = useState<TabType>('workflow.config');

  const deliveryPillars = [
    { label: 'HIGH QUALITY', icon: '✨' },
    { label: 'ON-TIME DELIVERY', icon: '⏱️' },
    { label: 'CLEAN ARCHITECTURE', icon: '📐' },
    { label: 'CLIENT-FOCUSED', icon: '🤝' },
  ];

  const focusAreas = [
    'Web Development & Full-Stack Apps',
    'C++ Systems & 2D Game Design',
    'Creative Software Engineering',
    'Research & Technical Writing',
  ];

  // All languages & tools — uniform styling, turns orange ONLY on hover
  const techStack = [
    'C++',
    'Python',
    'Java',
    'TypeScript',
    'Next.js',
    'React',
    'SFML',
    'Assembly',
    'Node.js',
    'Git',
    'SQL',
    'Tailwind CSS',
  ];

  return (
    <div className="card border border-[#222222] bg-[#121212] rounded-2xl overflow-hidden shadow-2xl font-mono text-xs">
      {/* Header bar with window controls and tabs (Reverse Order: workflow.config -> expertise.ts -> stack.json) */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-white/5 overflow-x-auto">
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
        </div>

        {/* Tab buttons */}
        <div className="flex items-center gap-1.5 ml-4 overflow-x-auto no-scrollbar">
          {(['workflow.config', 'expertise.ts', 'stack.json'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              suppressHydrationWarning
              className={`px-3 py-1.5 rounded-md text-[11px] transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-accent/15 text-accent border border-accent/35 font-bold shadow-sm'
                  : 'text-muted hover:text-cream hover:bg-white/5 border border-transparent'
              }`}
            >
              <span className="text-[10px] opacity-80">
                {tab.endsWith('.config') ? '⚙️' : tab.endsWith('.ts') ? '🎯' : '⚡'}
              </span>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Visual UI Content Body */}
      <div className="p-6 overflow-x-auto text-creamDim leading-relaxed min-h-[250px] flex flex-col justify-center">
        {/* Tab 1: workflow.config (Delivery Pillars) */}
        {activeTab === 'workflow.config' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent flex items-center gap-1.5">
                <span>⚙️</span> Production Pillars
              </span>
              <span className="text-muted text-[10px] font-mono">workflow.config</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {deliveryPillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="p-3.5 rounded-xl border border-[#222222] bg-[#181818] text-xs font-mono font-bold uppercase tracking-wider text-[#E3DEC3] flex items-center gap-2.5 transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-white hover:shadow-lg hover:shadow-accent/5 group"
                >
                  <span className="text-sm group-hover:scale-110 transition-transform">{pillar.icon}</span>
                  <span className="text-[11px] leading-tight">{pillar.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: expertise.ts (Focus Areas) */}
        {activeTab === 'expertise.ts' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent flex items-center gap-1.5">
                <span>🎯</span> Focus Specializations
              </span>
              <span className="text-muted text-[10px] font-mono">expertise.ts</span>
            </div>

            <div className="space-y-2">
              {focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-2.5 px-3.5 rounded-xl border border-[#222222] bg-[#181818] flex items-center justify-between text-xs text-[#E3DEC3] font-mono transition-all duration-200 hover:border-accent/30 hover:bg-white/5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-[11px] font-medium">{area}</span>
                  </div>
                  <span className="text-[10px] text-muted font-mono">0{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: stack.json (Interactive Tech Stack — All dark by default, orange ONLY on hover) */}
        {activeTab === 'stack.json' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent flex items-center gap-1.5">
                <span>⚡</span> Tech Stack &amp; Languages
              </span>
              <span className="text-muted text-[10px] font-mono">stack.json</span>
            </div>

            {/* Uniform dark badges — turn orange ONLY on hover */}
            <div className="flex flex-wrap gap-2 pt-1">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg border border-[#262626] bg-[#1A1A1A] text-creamDim font-mono text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 hover:border-accent hover:bg-accent/20 hover:text-white hover:scale-105 hover:shadow-md hover:shadow-accent/10 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="px-4 py-2 bg-[#181818] border-t border-white/5 flex items-center justify-between text-[10px] text-muted">
        <span>UTF-8</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Interactive Terminal
        </span>
      </div>
    </div>
  );
}
