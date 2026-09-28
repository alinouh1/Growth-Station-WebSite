import { useReveal } from "../../hooks/useReveal"

export function Hero() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-start"
    >
      {/*
        ✅ المشكلة الأساسية هنا:
        1) الصورة كانت CSS background-image على div، والمتصفح مش بيكتشفها إلا بعد ما ينزّل ويحلل الـ CSS.
        2) loading="lazy" على div مالوهاش أي تأثير (بيشتغل على <img> بس).
        3) الصورة JPG تقيلة.

        الحل: <picture> + <img> حقيقية بـ WebP، و fetchPriority="high" عشان المتصفح يبدأ ينزّلها فورًا.
        نفس الشكل بالظبط (fixed + cover + center) فمفيش أي تغيير في التصميم.
        ملحوظة: لو نسخة React عندك أقدم من 18.3 وطلع warning على fetchPriority، اكتبها بحروف صغيرة fetchpriority.
      */}
      <picture>
        <source media="(min-width: 640px)" srcSet="/images/back.webp" type="image/webp" />
        <source srcSet="/images/background-mobile.webp" type="image/webp" />
        <img
          src="/images/background-mobile-compressed.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="pointer-events-none fixed inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      <div
        className="relative flex max-w-7xl flex-col items-start justify-start text-left px-7 pt-8 sm:pt-20 ml-0 mr-auto"
      >
        {/* Desktop content - hidden on mobile */}
        <div className={`hidden sm:block reveal ${visible ? "visible" : ""}`}>
          <p className="mb-3 mt-3 inline-flex items-center gap-2 rounded-2xl border border-gs-teal/20 bg-gs-dark/80 px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gs-green shadow-lg backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gs-green animate-pulse" />
            Egypt & GCC
          </p>
          <h1
            className="font-display text-xl sm:text-2xl font-bold leading-[1.2] tracking-wider text-white md:text-4xl lg:text-5xl mb-4 sm:mb-6"
          >
            <span className="inline bg-gradient-to-r from-gs-teal via-gs-green to-gs-gold bg-clip-text text-transparent animate-gradient bg-300%">
              We Build
            </span>
            <span className="inline bg-gradient-to-r from-gs-gold via-gs-teal to-gs-green bg-clip-text text-transparent animate-gradient bg-300%">
              Growth.
            </span>
          </h1>
          <h2
            className="font-display text-sm sm:text-base font-bold leading-[1.4] tracking-wider text-white/90 md:text-2xl lg:text-2xl"
          >
            We partner with{" "}
            <span className="bg-gradient-to-r from-gs-teal via-gs-green to-gs-gold bg-clip-text text-transparent font-bold text-lg sm:text-xl md:text-4xl lg:text-5xl">
              ambitious businesses
            </span>
            <br />
            across Egypt & the GCC to build powerful brands
            <br />
            and drive measurable growth.
          </h2>
          {/* تعديل بسيط: justify كانت كلاس غلط (مش موجود)، خليتها justify-start وهي نفس السلوك الفعلي */}
          <div className="mt-12 sm:mt-10 flex flex-nowrap items-center justify-start gap-3 sm:gap-4">
            <a
              href="/contact"
              className="rounded-full bg-gs-gold px-5 py-2 text-[10px] sm:text-xs sm:px-6 sm:py-2.5 sm:text-sm font-semibold text-white shadow-lg shadow-gs-gold/30 transition-all hover:-translate-y-0.5 hover:bg-gs-teal hover:shadow-gs-teal/30"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="rounded-full border-2 border-white/30 bg-white/20 px-5 py-2 text-[10px] sm:text-xs sm:px-6 sm:py-2.5 sm:text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all hover:border-gs-teal hover:text-gs-teal"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Mobile-only content */}
        <div className="block sm:hidden w-full text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gs-green mb-3">
            EGYPT & GCC
          </p>

          <h3 className="text-3xl font-extrabold leading-[1.2] tracking-wider text-white mb-5">
            <span className="text-white">Building</span>
            <span className="bg-gradient-to-r from-gs-teal via-gs-green to-gs-gold bg-clip-text text-transparent">
              {" "}Growth
            </span>
            <br />
            <span className="text-white">That</span>
            <span className="bg-gradient-to-r from-gs-gold via-gs-teal to-gs-green bg-clip-text text-transparent">
              {" "}Lasts.
            </span>
          </h3>

          <p className="text-sm font-light leading-[1.8] text-white mb-6 max-w-sm">
            We partner with ambitious businesses<br />
            across Egypt & the GCC to build<br />
            powerful brands and drive<br />
            measurable growth.
          </p>

          <div className="flex flex-col items-start gap-3 mb-6">
            <a
              href="/contact"
              className="rounded-full bg-gs-gold px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gs-gold/30 transition-all hover:-translate-y-0.5 hover:bg-gs-teal hover:shadow-gs-teal/30"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="rounded-full border-2 border-white/30 bg-white/20 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all hover:border-gs-teal hover:text-gs-teal"
            >
              Explore Services
            </a>
          </div>

          <div className="h-px w-24 bg-gradient-to-r from-gs-gold to-transparent mb-4" />

          <p className="text-sm font-light tracking-wide text-white italic">
            Built for ambitious brands.<br />
            Focused on measurable growth.
          </p>
        </div>
      </div>
    </section>
  )
}