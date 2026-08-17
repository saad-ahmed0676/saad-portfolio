'use client';

import { certificates } from '@/lib/data';
import TiltCard from './TiltCard';
import KineticHeading from './KineticHeading';

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="label mb-12">Achievements</p>

        <KineticHeading
          as="h2"
          className="headline text-3xl sm:text-5xl mb-14 kinetic-heading"
          tokens={[
            { text: 'RECOGNITION' },
            { text: '&' },
            { text: 'CREDENTIALS', accent: true },
          ]}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <TiltCard
              key={i}
              maxTilt={4}
              glare={true}
              data-cursor-label="VERIFY"
              className="card p-7 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Verified</span>
                <span className="font-mono text-[10px] text-muted">0{i + 1}</span>
              </div>
              <h3 className="font-display font-bold text-base uppercase tracking-wide text-cream">
                {cert.title}
              </h3>
              <p className="text-muted text-xs leading-relaxed flex-1">
                {cert.description}
              </p>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted">Status</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-green-400">Completed</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
