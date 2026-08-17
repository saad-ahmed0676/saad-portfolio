'use client';

import { useState, useEffect } from 'react';
import { profile } from '@/lib/data';
import KineticHeading from './KineticHeading';

const roles = profile.typedRoles;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-base">

      {/* ── PORTRAIT BACKGROUND (Right-aligned, seamless #0d0d0d blend) ── */}
      {/* PLACEHOLDER: Replace src with '/profile.jpg' in public/ directory */}
      <div className="portrait-wrap">
        <img
          src="/profile.jpg"
          alt="Saad Ahmed portrait"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-16">

        {/* Name tag above headline */}
        <div className="flex items-center gap-3 mb-6" suppressHydrationWarning>
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
          <span className="font-mono text-base sm:text-xl font-bold uppercase tracking-[0.22em] text-cream">
            {profile.name}
          </span>
        </div>

        {/* ── STACKED KINETIC HEADLINE ── */}
        <div className="mb-8 md:mb-12 max-w-3xl">
          <KineticHeading
            as="h1"
            className="headline headline-xl kinetic-heading flex-col items-start"
            gap="0"
            tokens={[
              { text: 'BUILDING' },
              { text: 'RELIABLE', accent: true },
              { text: 'SOFTWARE' },
            ]}
          />
        </div>

        {/* ── BOTTOM ROW: role chip + stats + CTAs ── */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 max-w-5xl">

          {/* Left: role + bio */}
          <div className="flex-1 max-w-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-muted font-mono text-xs uppercase tracking-widest">Role:</span>
              <span className="text-accent font-mono text-xs uppercase tracking-widest">{roles[roleIdx]}</span>
            </div>
            <p className="text-creamDim text-sm leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Right: minimal stats + CTAs */}
          <div className="flex flex-col items-start md:items-end gap-6">
            {/* Stats row */}
            <div className="flex gap-8">
              <div className="text-right">
                <span className="block font-display text-2xl font-bold text-cream">{profile.yearsExperience}+</span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Years</span>
              </div>
              <div className="text-right">
                <span className="block font-display text-2xl font-bold text-cream">{profile.contributions}</span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Contributions</span>
              </div>
              <div className="text-right">
                <span className="block font-display text-2xl font-bold text-cream">{profile.projectsCompleted}+</span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Projects</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              {/* PLACEHOLDER: Drop your CV PDF as 'resume.pdf' in the public/ folder */}
              <a
                href={profile.resumeUrl}
                download="Saad_Ahmed_CV.pdf"
                className="btn-solid text-xs"
              >
                Download CV
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14m-7-7l7 7 7-7"/>
                </svg>
              </a>
              <a href="#work" className="btn-outline text-xs">
                Explore Projects &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}