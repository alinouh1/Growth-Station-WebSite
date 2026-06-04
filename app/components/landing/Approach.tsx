import { useLanguage } from "../../context/LanguageContext";
import { useReveal } from "../../hooks/useReveal";

const stepIcons = ["🔍", "🎯", "⚙️", "🚀"];

export function Approach() {
  const { dict, isRtl } = useLanguage();
  const { ref, visible } = useReveal<HTMLElement>();
  const a = dict.approach;

  return (
    <section
      id="framework"
      ref={ref}
      className="relative py-24 md:py-32 bg-white/82 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end ${visible ? "visible" : ""} ${isRtl ? "md:flex-row-reverse font-arabic" : ""}`}
        >
          <div className={isRtl ? "text-right" : ""}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gs-gold">
              {a.eyebrow}
            </span>
            <h2 className="font-display mt-3 text-4xl font-bold text-gs-dark md:text-5xl">
              {a.title}
            </h2>
          </div>
          <a
            href="#process"
            className="shrink-0 rounded-full border-2 border-gs-teal px-6 py-2.5 text-sm font-semibold text-gs-teal transition-all hover:bg-gs-teal hover:text-white"
          >
            {a.cta}
          </a>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {a.steps.map((step, idx) => (
            <div
              key={step.title}
              className={`reveal group relative rounded-2xl border border-gs-dark/8 bg-gs-cream p-6 transition-all duration-500 hover:border-gs-mint hover:bg-gs-mint-soft hover:shadow-lg ${visible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <span className="text-3xl">{stepIcons[idx]}</span>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gs-gold">
                {step.label}
              </p>
              <h3 className="font-display mt-2 text-xl font-bold text-gs-dark">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gs-teal">{step.text}</p>
              <div
                className={`absolute bottom-0 h-1 w-0 rounded-full bg-gs-gold transition-all duration-500 group-hover:w-full ${isRtl ? "right-0" : "left-0"}`}
              />
            </div>
          ))}
        </div>

        <div
          className={`reveal mt-16 overflow-hidden rounded-3xl ${visible ? "visible" : ""}`}
        >
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
            alt={a.imageAlt}
            className="h-64 w-full object-cover md:h-80"
          />
        </div>
      </div>
    </section>
  );
}
