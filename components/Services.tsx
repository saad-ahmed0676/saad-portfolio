'use client';

import { services } from '@/lib/data';
import TiltCard from './TiltCard';
import KineticHeading from './KineticHeading';

const icons: Record<string, string> = {
  code:      '{ }',
  gamepad:   '⌨',
  handshake: '↔',
  target:    '◎',
  pencil:    '✎',
  chart:     '▐',
};

export default function Services() {
  return (
    <section id="services" className="py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top category label: Services */}
        <p className="label mb-6">Services</p>

        {/* Main kinetic headline below Services: WHAT I DO */}
        <KineticHeading
          as="h2"
          className="headline text-3xl sm:text-5xl mb-14 kinetic-heading"
          tokens={[
            { text: 'WHAT' },
            { text: 'I' },
            { text: 'DO', accent: true },
          ]}
        />

        {/* Preserve the gap-px grid separator visual by keeping bg-white/5 on the wrapper */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <TiltCard
              key={i}
              maxTilt={4}
              glare={true}
              data-cursor-label="DETAILS"
              className="bg-base hover:bg-surface transition-colors duration-300 p-8 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl text-accent">{icons[s.icon] ?? '◆'}</span>
                <span className="font-mono text-[10px] text-muted">0{i + 1}</span>
              </div>
              <h3 className="font-display font-bold text-lg uppercase tracking-wide text-cream group-hover:text-accent transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{s.description}</p>
              <div className="mt-auto pt-4 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest text-muted group-hover:text-accent transition-colors">
                Learn more →
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
