import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="label mb-12">What They Said</p>

        <h2 className="headline text-3xl sm:text-5xl text-cream mb-14">
          CLIENT <span className="text-accent">FEEDBACK</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-8 flex flex-col gap-5">
              <span className="font-display text-5xl text-accent leading-none select-none">&ldquo;</span>
              <p className="text-cream text-lg font-display uppercase leading-snug tracking-wide">
                {t.quote}
              </p>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="block text-cream font-mono text-xs font-bold">{t.name}</span>
                  <span className="block text-muted font-mono text-[10px]">{t.role}</span>
                </div>
                <span className="text-accent text-xs">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}