'use client';

import { useState, useEffect } from 'react';
import { profile } from '@/lib/data';

const navLinks = [
  { href: '#about',        label: 'About' },
  { href: '#services',     label: 'Services' },
  { href: '#experience',   label: 'Experience' },
  { href: '#work',         label: 'Work' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact',      label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-base/90 backdrop-blur-xl border-b border-white/5'
          : 'py-6'
      }`}
    >
      {/* Logo — image */}
      <a href="#home" className="group flex-shrink-0" suppressHydrationWarning>
        <div className="w-12 h-12 md:w-13 md:h-13 rounded-full overflow-hidden border border-white/15 select-none group-hover:scale-105 transition-transform shadow-md">
          <img
            src="/logo.jpg"
            alt="Saad Ahmed Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="nav-link">
            {l.label}
          </a>
        ))}
      </nav>

      {/* CV button — right side */}
      {/* PLACEHOLDER: Drop your CV PDF as 'resume.pdf' in the public/ folder */}
      <a
        href={profile.resumeUrl}
        download="Saad_Ahmed_CV.pdf"
        className="btn-outline hidden md:inline-flex"
      >
        Download CV
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14m-7-7l7 7 7-7"/>
        </svg>
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-cream-dim hover:text-cream transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          {open
            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          }
        </svg>
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden absolute top-full inset-x-0 bg-base/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link text-sm">
              {l.label}
            </a>
          ))}
          <a href={profile.resumeUrl} download className="btn-solid self-start text-xs mt-2">
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}