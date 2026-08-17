'use client';

import { experience, education } from '@/lib/data';

interface RowItemProps {
  period: string;
  primary: string;
  secondary: string;
}

function HistoryRow({ period, primary, secondary }: RowItemProps) {
  return (
    <div
      data-cursor-label="DETAILS"
      className={[
        'group relative flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6',
        'py-6 px-3 -mx-3 rounded-xl border border-transparent',
        'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'hover:-translate-y-0.5 hover:border-[rgba(232,80,58,0.18)] hover:bg-[rgba(232,80,58,0.04)]',
      ].join(' ')}
    >
      {/* Terracotta left-edge accent line — grows on hover */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-accent rounded-full transition-all duration-400 group-hover:h-1/2 opacity-0 group-hover:opacity-100"
      />

      <span className="font-mono text-[10px] uppercase tracking-widest text-muted min-w-[140px] pl-2">
        {period}
      </span>
      <div className="pl-2">
        <span className="font-display font-bold text-lg uppercase text-cream group-hover:text-accent transition-colors duration-300 block">
          {primary}
        </span>
        <span className="text-muted font-mono text-xs">{secondary}</span>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="label mb-12">History</p>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Work Experience */}
          <div>
            <h3 className="font-display font-bold text-xl uppercase tracking-widest text-cream mb-8">
              Work Experience
            </h3>
            <div className="space-y-0 border-t border-white/5">
              {experience.map((item, i) => (
                <HistoryRow
                  key={i}
                  period={item.period}
                  primary={item.role}
                  secondary={item.org}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-display font-bold text-xl uppercase tracking-widest text-cream mb-8">
              Education &amp; Training
            </h3>
            <div className="space-y-0 border-t border-white/5">
              {education.map((item, i) => (
                <HistoryRow
                  key={i}
                  period={item.period}
                  primary={item.degree}
                  secondary={item.school}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}