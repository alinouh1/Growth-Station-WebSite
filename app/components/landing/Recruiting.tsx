import { useLanguage } from "../../context/LanguageContext";
import { useReveal } from "../../hooks/useReveal";

export function Recruiting() {
  const { dict, isRtl } = useLanguage();
  const { ref, visible } = useReveal<HTMLElement>();
  const r = dict.recruiting;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32 bg-gs-dark"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
          alt=""
          className="h-full w-full object-cover opacity-15"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gs-dark via-gs-dark/95 to-gs-teal/80" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className={`reveal ${visible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}>
          <span className="inline-block rounded-full border border-gs-gold/50 bg-gs-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-gs-gold">
            {r.badge}
          </span>
          <h2 className="font-display mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {r.title1}
            <br />
            <span className="text-gs-mint">{r.title2}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gs-mint/90">
            {r.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gs-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gs-gold/30 transition-all hover:-translate-y-0.5 hover:bg-gs-mint hover:text-gs-dark"
            >
              {r.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-gs-mint hover:text-gs-mint"
            >
              {r.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
