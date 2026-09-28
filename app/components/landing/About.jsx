import { useLanguage } from "../../context/LanguageContext"
import { useReveal } from "../../hooks/useReveal"
import { useState, useEffect, useRef } from "react"

const storyImages = [
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=60",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=60",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=60",
]

// Mobile Slider Component
function MobileStorySlider({ items, isRtl }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeKey, setFadeKey] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [sliderInView, setSliderInView] = useState(false)
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const observer = new IntersectionObserver(
      ([entry]) => setSliderInView(entry.isIntersecting),
      { threshold: 0.1 },
    )
    observer.observe(slider)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!sliderInView || isDragging) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [items.length, isDragging, sliderInView])

  // Trigger fade animation when content changes
  useEffect(() => {
    setFadeKey(prev => prev + 1)
  }, [currentIndex])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Touch/drag handlers
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setTranslateX(0)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    const threshold = 50
    if (translateX > threshold) {
      // Swipe right - go to previous
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    } else if (translateX < -threshold) {
      // Swipe left - go to next
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }
    
    setTranslateX(0)
  }

  const currentItem = items[currentIndex]

  return (
    <div className="md:hidden relative min-h-[60vh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gs-dark" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Static Header */}
      <div className="relative pt-8 pb-4 px-6">
        <div className={`max-w-sm mx-auto ${isRtl ? "text-right" : ""}`}>
          <span className="inline-block relative group cursor-pointer">
            <span className="inline-block rounded-full border border-gs-gold/50 bg-gs-gold/10 px-6 py-2 text-[10px] font-semibold uppercase tracking-widest text-gs-gold transition-all duration-300 group-hover:bg-gs-gold group-hover:text-gs-dark">
              {items[0].label}
            </span>
            <span className="absolute bottom-0 left-0 h-0.5 bg-gs-gold w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
          </span>
        </div>
      </div>

      {/* Single Static Box */}
      <div 
        ref={sliderRef}
        className="relative h-full flex items-center justify-center px-6 pb-20"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div 
          className={`w-full max-w-sm h-[480px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col justify-center transition-transform duration-300 ${isRtl ? "text-right" : ""}`}
          style={{ 
            transform: `translateX(${translateX}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          <div key={fadeKey} className="animate-[fadeIn_0.5s_ease-in-out]">
            <h2 className={`font-display text-xl font-bold leading-tight tracking-tight text-white mb-4 ${isRtl ? "font-arabic" : ""}`}>
              {currentItem.title}
            </h2>
            <ul className="text-xs leading-relaxed text-white/90 mb-4 overflow-y-auto flex-1 space-y-2">
              {currentItem.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gs-gold mt-1">•</span>
                  <span className="text-[13px]">{point}</span>
                </li>
              ))}
            </ul>
            {currentItem.cta && (
              <p className="font-semibold text-gs-gold text-[13px]">
                {currentItem.cta}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-gs-gold w-8" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function About() {
  const { dict, isRtl } = useLanguage()
  const a = dict.about
  const { ref: heroRef, visible: heroVisible } = useReveal()
  const { ref: storyRef, visible: storyVisible } = useReveal()
  const { ref: whyRef, visible: whyVisible } = useReveal()
  const { ref: drivesRef, visible: drivesVisible } = useReveal()
  const { ref: workRef, visible: workVisible } = useReveal()
  const { ref: ctaRef, visible: ctaVisible } = useReveal()

  // Story items for mobile slider
  const storyItems = [
    {
      label: a.ourStory.title,
      title: a.ourStory.whyExist.title,
      points: a.ourStory.whyExist.points,
    },
    {
      title: a.ourStory.whatDifferent.title,
      points: a.ourStory.whatDifferent.points,
    },
    {
      title: a.ourStory.whoServe.title,
      points: a.ourStory.whoServe.points,
      cta: a.ourStory.whoServe.cta,
    },
  ]

  return (
    <div className="min-h-screen bg-gs-cream">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gs-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <div
            className={`reveal ${heroVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
          >
            <div className="mb-8">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-50" />
                <span className="relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-8 py-3 text-sm font-bold uppercase tracking-[0.3em] text-gs-gold shadow-2xl shadow-gs-gold/40">
                  {a.ourStory.title}
                </span>
              </div>
            </div>
            <h1
              className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 ${isRtl ? "font-arabic" : ""}`}
            >
              {a.ourStory.whyExist.title}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-gs-gold to-amber-600 mx-auto rounded-full shadow-lg shadow-gs-gold/50" />
          </div>
        </div>
      </section>

      {/* Mobile Story Slider */}
      <MobileStorySlider items={storyItems} isRtl={isRtl} />

      {/* Desktop Story Sections */}
      {/* Our Story - Story 1: Why Exist */}
      <section
        ref={storyRef}
        className="hidden md:block relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${storyImages[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative w-full h-full flex items-center">
          <div className="w-[50%] lg:w-[40%] ml-auto lg:ml-auto bg-gs-dark/80 p-12 lg:p-16 backdrop-blur-sm min-h-screen flex items-center transform transition-all duration-1000 hover:bg-gs-dark">
            <div
              className={`reveal ${storyVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
            >
              <span className="inline-block rounded-full border border-gs-gold/50 bg-gs-gold/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-gs-gold animate-pulse">
                {a.ourStory.title}
              </span>
              <h2
                className={`font-display mt-6 text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-white ${isRtl ? "font-arabic" : ""}`}
              >
                {a.ourStory.whyExist.title}
              </h2>
              <div className="mt-6">
                <ul className="space-y-3">
                  {a.ourStory.whyExist.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gs-gold mt-1">•</span>
                      <span className="text-[calc(1rem+3px)] leading-relaxed text-gs-mint/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Story 2: What Different */}
      <section
        dir="ltr"
        className="hidden md:block relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gs-dark" />
        <div className="relative w-full h-full flex items-center">
          {/* Left side - Text */}
          <div className="w-[50%] lg:w-[40%] bg-gs-teal/80 p-12 lg:p-16 backdrop-blur-sm min-h-screen flex items-center transform transition-all duration-1000 hover:bg-gs-teal">
            <div
              className={`reveal ${storyVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <h2
                className="font-display text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-white"
              >
                {a.ourStory.whatDifferent.title}
              </h2>
              <div className="mt-6">
                <ul className="space-y-3">
                  {a.ourStory.whatDifferent.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gs-gold mt-1">•</span>
                      <span className="text-[calc(1rem+3px)] leading-relaxed text-white/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Right side - Image */}
          <div className="w-[50%] lg:w-[60%] min-h-screen relative">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(/images/background2-compressed.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* Our Story - Story 3: Who Serve */}
      <section
        className="hidden md:block relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${storyImages[2]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative w-full h-full flex items-center">
          <div className="w-[50%] lg:w-[40%] ml-auto lg:ml-auto bg-gs-gold/80 p-12 lg:p-16 backdrop-blur-sm min-h-screen flex items-center transform transition-all duration-1000 hover:bg-gs-gold">
            <div
              className={`reveal ${storyVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <h2
                className={`font-display text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-white ${isRtl ? "font-arabic" : ""}`}
              >
                {a.ourStory.whoServe.title}
              </h2>
              <div className="mt-6">
                <ul className="space-y-3">
                  {a.ourStory.whoServe.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gs-gold mt-1">•</span>
                      <span className="text-[calc(1rem+3px)] leading-relaxed text-white/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`mt-6 ${isRtl ? "text-right" : ""}`}>
                <p className="font-semibold text-white text-[calc(1rem+3px)]">{a.ourStory.whoServe.cta}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Growth Station */}
    <section
  ref={whyRef}
  className="relative py-24 md:py-32 bg-gs-cream gs-mesh"
  style={{ overflow: "visible" }}
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div
      className={`reveal max-w-3xl ${whyVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
      style={{ transition: "all 0.8s" }}
    >
      <span className="text-[calc(1.25rem+5px)] md:text-[calc(1.75rem+5px)] font-bold uppercase tracking-[0.3em] text-gs-gold">
        {a.whyGrowthStation.title}
      </span>
      <h2
        className={`font-display mt-4 text-[calc(1.75rem+8px)] md:text-[calc(2.25rem+8px)] font-bold text-gs-dark md:text-[calc(3rem+5px)] ${isRtl ? "font-arabic" : ""}`}
      >
        {a.whyGrowthStation.subtitle}
      </h2>
    </div>

    {/* ✅ padding-bottom بيحجز مساحة للـ scale من تحت، وpadding جانبي للـ scale من الجنب */}
    <div
      className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4"
      style={{
        isolation: "isolate",
        padding: "8px 0px 40px",
      }}
    >
      {a.whyGrowthStation.items.map((item, idx) => (
        <div
          key={item.title}
          className={`reveal rounded-2xl border-1 border-gs-gold/30 bg-[#162727]/80 backdrop-blur-md p-5 md:p-10 shadow-lg card-shine group ${whyVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
          style={{
            transition: "transform 0.4s, box-shadow 0.4s, border-color 0.4s",
            transform: "scale(1)",
            transformOrigin: "center bottom",  /* ✅ يكبر لفوق مش لتحت */
            willChange: "transform",
            position: "relative",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)"
            e.currentTarget.style.zIndex = "10"
            e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0,0,0,0.5)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
            e.currentTarget.style.zIndex = "1"
            e.currentTarget.style.boxShadow = ""
          }}
        >
          <div
            className={`w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-gs-gold/50 flex items-center justify-center mb-3 md:mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:border-gs-gold ${isRtl ? "ml-auto" : ""}`}
          >
            <span className="text-xl md:text-2xl font-bold text-gs-gold">{idx + 1}</span>
          </div>
          <h3
            className={`font-display text-[calc(0.645rem+5px)] md:text-[calc(0.845rem+5px)] font-bold text-white transition-all duration-300 group-hover:text-gs-gold ${isRtl ? "font-arabic" : ""}`}
          >
            {item.title}
          </h3>
          <p className="mt-2 md:mt-4 text-[10px] md:text-xs leading-relaxed text-white/90 transition-all duration-300 group-hover:text-white">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* ✅ مساحة ثابتة تحت الـ section مش بتتأثر بالـ scale */}
  <div style={{ height: "96px" }} />
</section>

      {/* What Drives Us */}
      <section
        ref={drivesRef}
        className="relative py-24 md:py-32 bg-gs-dark"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-end mb-16">
            <div
              className={`reveal ${drivesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <span className="text-lg font-bold uppercase tracking-[0.3em] text-gs-mint">
                {a.whatDrivesUs.title}
              </span>
              <h2
                className={`font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gs-cream leading-tight ${isRtl ? "font-arabic" : ""}`}
              >
                Built to<br />
                <strong className="font-bold text-gs-mint">move</strong> your<br />
                business <em className="italic text-gs-gold">forward.</em>
              </h2>
            </div>
            <p
              className={`reveal text-gs-cream/60 leading-relaxed ${drivesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              {a.whatDrivesUs.subtitle}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div
              className={`reveal rounded-2xl border-2 border-gs-gold/30 bg-[#162727]/80 backdrop-blur-md p-8 shadow-lg transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-gs-gold card-shine group ${drivesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
              style={{ transition: "all 0.4s", }}
            >
              <div className="text-6xl font-bold text-gs-gold/20 mb-4">01</div>
              <p className="text-lg font-bold uppercase tracking-widest text-gs-mint mb-2">
                {a.whatDrivesUs.vision.label}
              </p>
              <h3
                className={`font-display text-2xl font-bold text-white mb-4 ${isRtl ? "font-arabic" : ""}`}
              >
                {a.whatDrivesUs.vision.title}
              </h3>
              <p className="text-[calc(0.875rem+3px)] leading-relaxed text-gs-cream/70">
                {a.whatDrivesUs.vision.content}
              </p>
            </div>
            <div
              className={`reveal rounded-2xl border-2 border-gs-gold/30 bg-[#162727]/80 backdrop-blur-md p-8 shadow-lg transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-gs-gold card-shine group ${drivesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
               style={{ transition: "all 0.4s", }}
            >
              <div className="text-6xl font-bold text-gs-gold/20 mb-4">02</div>
              <p className="text-lg font-bold uppercase tracking-widest text-gs-mint mb-2">
                {a.whatDrivesUs.mission.label}
              </p>
              <h3
                className={`font-display text-2xl font-bold text-white mb-4 ${isRtl ? "font-arabic" : ""}`}
              >
                {a.whatDrivesUs.mission.title}
              </h3>
              <p className="text-[calc(0.875rem+3px)] leading-relaxed text-gs-cream/70">
                {a.whatDrivesUs.mission.content}
              </p>
            </div>
            <div
              className={`reveal rounded-2xl border-2 border-gs-gold/30 bg-[#162727]/80 backdrop-blur-md p-8 shadow-lg transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-gs-gold card-shine group ${drivesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
               style={{ transition: "all 0.4s", }}
            >
              <div className="text-6xl font-bold text-gs-gold/20 mb-4">03</div>
              <p className="text-lg font-bold uppercase tracking-widest text-gs-mint mb-2">
                {a.whatDrivesUs.promise.label}
              </p>
              <h3
                className={`font-display text-2xl font-bold text-white mb-4 ${isRtl ? "font-arabic" : ""}`}
              >
                {a.whatDrivesUs.promise.title}
              </h3>
              <p className="text-[calc(0.875rem+3px)] leading-relaxed text-gs-cream/70">
                {a.whatDrivesUs.promise.content}
              </p>
            </div>
            <div
              className={`reveal rounded-2xl border-2 border-gs-gold/30 bg-[#162727]/80 backdrop-blur-md p-8 shadow-lg transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-gs-gold card-shine group ${drivesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
               style={{ transition: "all 0.4s", }}
            >
              <div className="text-6xl font-bold text-gs-gold/20 mb-4">04</div>
              <p className="text-lg font-bold uppercase tracking-widest text-gs-mint mb-2">
                {a.whatDrivesUs.standFor.label}
              </p>
              <h3
                className={`font-display text-2xl font-bold text-white mb-4 ${isRtl ? "font-arabic" : ""}`}
              >
                {a.whatDrivesUs.standFor.title}
              </h3>
              <p className="text-[calc(0.875rem+3px)] leading-relaxed text-gs-cream/70">
                {a.whatDrivesUs.standFor.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section
        ref={workRef}
        className="relative py-24 md:py-32 bg-gradient-to-br from-gs-teal to-gs-dark text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`reveal max-w-3xl ${workVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
          >
            <span className="text-lg font-bold uppercase tracking-[0.3em] text-gs-mint">
              {a.howWeWork.title}
            </span>
            <h2
              className={`font-display mt-4 text-4xl font-bold md:text-5xl ${isRtl ? "font-arabic" : ""}`}
            >
              {a.howWeWork.subtitle}
            </h2>
            <p className="mt-6 text-lg text-gs-mint/90">{a.howWeWork.intro}</p>
          </div>
          <div className={`mt-10 reveal rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-12 shadow-2xl shadow-black/20 ${workVisible ? "visible" : ""}`}>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {a.howWeWork.items.map((item, idx) => (
                <div
                  key={item.title}
                  className={`flex gap-4 ${isRtl ? "text-right font-arabic flex-row-reverse" : ""}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gs-gold/20 to-amber-600/20 border border-gs-gold/30 flex items-center justify-center backdrop-blur-sm">
                    {idx === 0 && (
                      <svg className="w-6 h-6 text-gs-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg className="w-6 h-6 text-gs-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg className="w-6 h-6 text-gs-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                    {idx === 3 && (
                      <svg className="w-6 h-6 text-gs-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-display text-[calc(1rem+5px)] md:text-[calc(1.125rem+3px)] font-bold text-white mb-2 md:mb-3 ${isRtl ? "font-arabic" : ""}`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[calc(0.875rem+4px)] md:text-[calc(0.875rem+3px)] leading-relaxed text-gs-mint/80">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative py-24 md:py-32 bg-gs-cream gs-mesh"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div
            className={`reveal ${ctaVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
          >
            <div className={`w-20 h-20 rounded-full bg-gs-gold/10 flex items-center justify-center mx-auto mb-8 animate-pulse-glow`}>
              <svg className="w-10 h-10 text-gs-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2
              className={`font-display text-4xl font-bold text-gs-dark md:text-5xl ${isRtl ? "font-arabic" : ""}`}
            >
              {a.cta.title}
            </h2>
            <p className="mt-8 text-xl text-gs-teal">{a.cta.subtitle}</p>
            <a
              href="/contact"
              className={`mt-10 inline-block rounded-full bg-gs-gold px-12 py-4 text-base font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-300 hover:-translate-y-1 hover:bg-gs-teal hover:shadow-gs-teal/40 hover:scale-105 ${isRtl ? "font-arabic" : ""}`}
            >
              Start your growth journey today →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
