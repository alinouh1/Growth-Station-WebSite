import { useLanguage } from "../../context/LanguageContext";
import { useReveal } from "../../hooks/useReveal";

const icons = ["🎯", "📊", "⚡", "🤝"];

export function WhyUs() {
  const { dict, isRtl } = useLanguage();
  const { ref, visible } = useReveal<HTMLElement>();
  const w = dict.whyUs;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-gs-teal to-gs-dark text-white"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`reveal max-w-2xl ${visible ? "visible" : ""} ${isRtl ? "mr-auto text-right font-arabic" : ""}`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gs-mint">
            {w.eyebrow}
          </span>
          <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">
            {w.line1}
            <br />
            <span className="text-gs-gold">{w.line2}</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {w.items.map((item, idx) => (
            <div
              key={item.title}
              className={`reveal rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 ${visible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <span className="text-3xl">{icons[idx]}</span>
              <h3 className="font-display mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gs-mint/90">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
