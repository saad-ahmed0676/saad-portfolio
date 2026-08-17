'use client';

import { useState } from 'react';
import { profile, socials } from '@/lib/data';
import KineticHeading from './KineticHeading';
import LocationMapCard from './LocationMapCard';

const socialAliases: Record<string, string> = {
  LinkedIn:  'Serious me 👔',
  Instagram: 'Not TikTok 📸',
  GitHub:    'Late nights 💻',
  Email:     '100% reply rate 📩',
};

export default function Footer() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <footer id="contact" className="border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="label mb-10">Let&apos;s Connect</p>

        {/* Big CTA kinetic heading */}
        <div className="mb-16">
          <KineticHeading
            as="h2"
            className="headline text-4xl sm:text-6xl md:text-7xl kinetic-heading flex-col items-start"
            gap="0"
            tokens={[
              { text: 'GET IN' },
              { text: 'TOUCH', accent: true },
            ]}
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            {sent ? (
              <div className="card p-10 text-center">
                <h3 className="font-display text-2xl font-bold uppercase text-cream mb-2">Message Sent ✓</h3>
                <p className="text-muted text-sm mb-6">I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="btn-outline text-xs"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-2">Name</label>
                    <input
                      type="text" required
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="form-input"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-2">Email</label>
                    <input
                      type="email" required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="form-input"
                      suppressHydrationWarning
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-2">Message</label>
                  <textarea
                    required rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="form-input"
                    suppressHydrationWarning
                  />
                </div>
                <button type="submit" className="btn-solid self-start">
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Social Links + Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Social list with Minh Pham alias text on hover */}
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted mb-6">Find Me Online</h4>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="OPEN"
                  className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-accent/20 transition-colors"
                >
                  <span className="font-display font-bold text-xl uppercase text-cream group-hover:text-accent transition-colors">
                    {s.label}
                  </span>
                  <span className="font-mono text-[10px] text-muted group-hover:text-accent transition-colors">
                    {socialAliases[s.label] ?? '→'}
                  </span>
                </a>
              ))}
            </div>

            {/* Email + CV */}
            <div className="card p-6 flex items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-1">Direct Email</span>
                <a href={`mailto:${profile.email}`} className="text-cream font-mono text-xs hover:text-accent transition-colors">
                  {profile.email}
                </a>
              </div>
              {/* PLACEHOLDER: Drop your CV PDF as 'resume.pdf' in the public/ folder */}
              <a href={profile.resumeUrl} download className="btn-outline text-[10px]">
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Location Map Section — Located at the end above the move to top button */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center justify-between px-1">
            <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Location Base
            </span>
            <span className="font-mono text-[10px] text-muted">DHA Phase 1, Islamabad</span>
          </div>
          <LocationMapCard />
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-end pt-8 border-t border-white/5">
          <a href="#home" className="font-mono text-[10px] uppercase tracking-widest text-muted hover:text-cream transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}