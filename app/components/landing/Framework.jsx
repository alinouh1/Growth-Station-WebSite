import { useLanguage } from "../../context/LanguageContext"
import { useReveal } from "../../hooks/useReveal"

export function Framework() {
  const { dict, isRtl } = useLanguage()
  const f = dict.framework
  const { ref: heroRef, visible: heroVisible } = useReveal()
  const { ref: stepsRef, visible: stepsVisible } = useReveal()
  const { ref: thinkingRef, visible: thinkingVisible } = useReveal()

  const steps = [
    { key: "discover", number: "01" },
    { key: "position", number: "02" },
    { key: "build", number: "03" },
    { key: "scale", number: "04" },
  ]

  const thinkingItems = [
    { key: "approach", number: "01" },
    { key: "strategy", number: "02" },
    { key: "failure", number: "03" },
    { key: "success", number: "04" },
  ]

  return (
    <div className="min-h-screen bg-gs-cream">
      {/* Hero Section */}
      <section
        id="framework-hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gs-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl hidden md:block animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl hidden md:block animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <div
            className={`reveal ${heroVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
          >
            <div className="mb-8">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-50" />
                <span className="relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-8 py-3 text-sm font-bold uppercase tracking-[0.3em] text-gs-gold shadow-2xl shadow-gs-gold/40">
                  {f.hero.eyebrow}
                </span>
              </div>
            </div>
            <h1
              className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-4 ${isRtl ? "font-arabic" : ""}`}
            >
              {f.hero.title}
            </h1>
            <h2
              className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gs-gold mb-6 ${isRtl ? "font-arabic" : ""}`}
            >
              {f.hero.subtitle}
            </h2>
            <p className="mt-8 text-xl text-gs-mint/90 max-w-3xl mx-auto">
              {f.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section
        id="framework-steps"
        ref={stepsRef}
        className="relative py-24 md:py-32 bg-gs-cream gs-mesh"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:gap-6 md:grid-cols-2">
            {steps.map((step, idx) => {
              const stepData = f.steps[step.key]
              return (
                <div
                  key={step.key}
                  className={`reveal group rounded-2xl border-2 border-gs-gold/30 bg-gradient-to-br from-white to-gs-cream p-6 md:p-8 lg:p-10 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-gs-gold/60 hover:scale-105 card-shine ${stepsVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
                  style={{ transition: `0.5s` }}
                >
                  <div className={`flex items-start gap-4 md:flex-row flex-col ${isRtl ? "md:flex-row-reverse" : ""}`}>
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gs-gold to-amber-600 flex items-center justify-center shadow-lg shadow-gs-gold/30 transition-all duration-500 hover:scale-110 flex-shrink-0`}>
                      <span className="text-xl md:text-2xl font-bold text-white transition-all duration-500">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-display text-[calc(1.25rem+5px)] md:text-[calc(1.5rem+5px)] font-bold text-gs-dark mb-3 md:mb-4 transition-all duration-500 hover:text-gs-gold ${isRtl ? "font-arabic" : ""}`}
                      >
                        {stepData.title}
                      </h3>
                      <p className="text-[calc(0.875rem+5px)] md:text-[calc(1rem+5px)] leading-relaxed text-gs-dark/80 transition-all duration-500 hover:text-gs-dark">
                        {stepData.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Thinking Section */}
      <section
        ref={thinkingRef}
        className="relative py-24 md:py-32 bg-white/90 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`reveal max-w-4xl mx-auto text-center mb-20 ${thinkingVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gs-gold">
              {f.thinking.title}
            </span>
            <h2
              className={`font-display mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gs-dark ${isRtl ? "font-arabic" : ""}`}
            >
              {f.thinking.subtitle}
            </h2>
          </div>
          <div className="grid gap-8 md:gap-6 md:grid-cols-2">
            {thinkingItems.map((item, idx) => {
              const itemData = f.thinking[item.key]
              return (
                <div
                  key={item.key}
                  className={`reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/70 card-shine ${thinkingVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
                  style={{ transition: `0.5s` }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-gs-gold to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-gs-gold/30 transition-all duration-500 hover:scale-110 ${isRtl ? "ml-auto" : ""}`}>
                    <span className="text-xl font-bold text-white transition-all duration-500">{item.number}</span>
                  </div>
                  <h3
                    className={`font-display mt-4 text-2xl font-bold text-white transition-all duration-500 hover:text-gs-gold ${isRtl ? "font-arabic" : ""}`}
                  >
                    {itemData.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gs-mint/90 transition-all duration-500 hover:text-gs-mint">
                    {itemData.content}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
