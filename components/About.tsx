'use client';

import React from 'react';
import KineticHeading from './KineticHeading';
import CodeSnippetWidget from './CodeSnippetWidget';

export default function About() {
  return (
    <section id="about" className="py-28 max-w-7xl mx-auto px-6 md:px-12">
      <p className="label mb-6">About Me</p>

      {/* ── TOP SECTION: Kinetic Headline (Left) + Multi-Tab Code Snippet (Right) ── */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column — Massive Kinetic Headline */}
        <div className="lg:col-span-7">
          <KineticHeading
            as="h2"
            className="headline text-3xl sm:text-5xl lg:text-6xl leading-[1.05] kinetic-heading flex-col items-start"
            gap="0"
            tokens={[
              { text: 'ASPIRING SOFTWARE' },
              { text: 'DEVELOPER WITH A' },
              { text: 'PASSION FOR' },
              { text: 'CREATIVE DIGITAL', accent: true },
              { text: 'SOLUTIONS', accent: true },
            ]}
          />
        </div>

        {/* Right Column — Refactored IDE Container with Visual UI Tabs */}
        <div className="lg:col-span-5">
          <CodeSnippetWidget />
        </div>
      </div>
    </section>
  );
}