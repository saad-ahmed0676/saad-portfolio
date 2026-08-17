'use client';

import { projects, githubProfile } from '@/lib/data';
import TiltCard from './TiltCard';
import KineticHeading from './KineticHeading';

export default function Projects() {
  return (
    <section id="work" className="py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12">
          <p className="label">Selected <span className="text-accent">Work</span></p>
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-[10px] hidden sm:inline-flex"
          >
            All Repos →
          </a>
        </div>

        <KineticHeading
          as="h2"
          className="headline text-3xl sm:text-5xl mb-14 kinetic-heading"
          tokens={[
            { text: 'FEATURED' },
            { text: 'PROJECTS', accent: true },
          ]}
        />

        {/* Project list — Minh Pham-style row layout with 2.5D tilt */}
        <div className="space-y-0">
          {projects.map((p, i) => (
            <TiltCard
              key={i}
              maxTilt={3}
              glare={true}
              data-cursor-label="EXPLORE"
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-7 border-b border-white/5 hover:border-accent/20 transition-colors duration-300 rounded-lg px-2"
            >
              {/* Index */}
              <span className="font-mono text-[10px] text-muted min-w-[28px]">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase text-cream group-hover:text-accent transition-colors duration-300 flex-1">
                {p.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 flex-shrink-0">
                {p.tags.map((t, ti) => (
                  <span key={ti} className="tag">{t}</span>
                ))}
              </div>

              {/* Description — visible on hover */}
              <p className="text-muted text-xs leading-relaxed max-w-xs hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {p.description}
              </p>

              {/* Action links */}
              <div className="flex gap-3 flex-shrink-0">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-outline text-[10px] py-1 px-3">Demo</a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-[10px] py-1 px-3">GitHub</a>
                )}
                {p.report && (
                  <a href={p.report} target="_blank" rel="noopener noreferrer" className="btn-outline text-[10px] py-1 px-3">Report</a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 flex items-center gap-6">
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid"
          >
            View GitHub Profile →
          </a>
          <span className="text-muted font-mono text-xs">More repos available</span>
        </div>
      </div>
    </section>
  );
}