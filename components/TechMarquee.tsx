import { techMarquee } from "@/lib/data";

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="relative border-y border-white/5 py-6 overflow-hidden bg-surface">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-10 w-max marquee-track">
        {items.map((tech, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-display font-bold text-3xl md:text-5xl uppercase tracking-wider text-cream/15 hover:text-cream/40 transition-colors duration-300 select-none whitespace-nowrap">
              {tech}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}