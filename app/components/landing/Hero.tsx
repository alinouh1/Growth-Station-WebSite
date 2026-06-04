import { useLanguage } from "../../context/LanguageContext";
import { useReveal } from "../../hooks/useReveal";
import { BrandLogo } from "./BrandLogo";

export function Hero() {
  const { dict, isRtl } = useLanguage();
  const { ref, visible } = useReveal<HTMLElement>();
  const h = dict.hero;

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gs-cream/40 via-gs-cream/55 to-gs-cream/75" />

      <div
        className={`relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${isRtl ? "direction-rtl" : ""}`}
      >
        <div className={`reveal ${visible ? "visible" : ""} ${isRtl ? "font-arabic text-right lg:order-2" : ""}`}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gs-teal/20 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gs-teal shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gs-green animate-pulse" />
            {h.badge}
          </p>
          <h1
            className={`font-display text-4xl font-bold leading-[1.15] tracking-tight text-gs-dark md:text-5xl lg:text-6xl ${isRtl ? "font-arabic" : ""}`}
          >
            {h.title}{" "}
            <span className="bg-gradient-to-r from-gs-teal to-gs-green bg-clip-text text-transparent">
              {h.titleHighlight}
            </span>{" "}
            {h.titleEnd}
          </h1>
          <div className={`mt-10 flex flex-wrap gap-4 ${isRtl ? "justify-end" : ""}`}>
            <a
              href="#contact"
              className={`rounded-full bg-gs-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gs-gold/30 transition-all hover:-translate-y-0.5 hover:bg-gs-teal hover:shadow-gs-teal/30 ${isRtl ? "font-arabic" : ""}`}
            >
              {h.ctaPrimary}
            </a>
            <a
              href="#services"
              className={`rounded-full border-2 border-gs-dark/15 bg-white/85 px-8 py-3.5 text-sm font-semibold text-gs-dark shadow-sm backdrop-blur-sm transition-all hover:border-gs-teal hover:text-gs-teal ${isRtl ? "font-arabic" : ""}`}
            >
              {h.ctaSecondary}
            </a>
          </div>
        </div>

        <div
          className={`reveal relative flex items-center justify-center ${visible ? "visible" : ""} ${isRtl ? "lg:order-1" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="relative w-full max-w-md animate-float">
            <div className="absolute -inset-8 rounded-full bg-gs-mint/25 blur-3xl" />
            <div className="relative rounded-3xl border border-white/60 bg-white/50 p-10 shadow-2xl shadow-gs-dark/10 backdrop-blur-md">
              <BrandLogo className="mx-auto h-24 w-auto max-w-[260px] sm:h-28 sm:max-w-[300px]" />
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/90 p-4 text-center shadow-sm">
                  <p className="font-display text-2xl font-bold text-gs-gold">+240%</p>
                  <p className={`text-xs text-gs-teal ${isRtl ? "font-arabic" : ""}`}>
                    {h.statGrowth}
                  </p>
                </div>
                <div className="rounded-2xl bg-gs-dark p-4 text-center text-white shadow-sm">
                  <p
                    className={`text-xs uppercase tracking-wider text-gs-mint ${isRtl ? "font-arabic normal-case" : ""}`}
                  >
                    {h.statMarkets}
                  </p>
                  <p className={`mt-1 text-sm font-semibold ${isRtl ? "font-arabic" : ""}`}>
                    {h.markets}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
