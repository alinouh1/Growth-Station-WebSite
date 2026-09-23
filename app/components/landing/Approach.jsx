import { useReveal } from "../../hooks/useReveal"
import { Search, Target, Settings, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

const stepIcons = [
  <Search className="w-8 h-8" />,
  <Target className="w-8 h-8" />,
  <Settings className="w-8 h-8" />,
  <TrendingUp className="w-8 h-8" />,
]

const steps = [
  {
    label: "OUR FRAMEWORK",
    title: "DISCOVER",
    text: "We do not move until we know your business, market, and audience with complete clarity. Assumptions are not part of our process.",
  },
  {
    label: "OUR FRAMEWORK",
    title: "POSITION",
    text: "We define where your brand stands and why it wins. Without sharp positioning, everything else is wasted effort.",
  },
  {
    label: "OUR FRAMEWORK",
    title: "BUILD",
    text: "Every system, campaign, and piece of content is built with one standard: does it move the business forward? If not, it does not exist.",
  },
  {
    label: "OUR FRAMEWORK",
    title: "SCALE",
    text: "Launch is not the finish line. We optimize relentlessly, expand deliberately, and push your brand into markets it was always capable of reaching.",
  },
]

export function Approach() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="framework"
      ref={ref}
      className="relative py-24 md:py-32 bg-white/82 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end ${visible ? "visible" : ""}`}
        >
          <div>
            <span className="text-xs md:text-base font-bold uppercase tracking-[0.3em] text-gs-gold">
              Our Approach
            </span>
            <h2 className="font-display mt-3 text-3xl md:text-4xl font-bold text-gs-dark md:text-5xl">
              Our Framework
            </h2>
          </div>
          <Link
            to="/framework"
            className="shrink-0 rounded-full border-2 border-gs-teal px-6 py-2.5 text-sm font-semibold text-gs-teal transition-all hover:bg-gs-teal hover:text-white"
            onClick={() => window.scrollTo(0, 0)}
          >
            Explore Framework →
          </Link>
        </div>

        <div
          className="mt-16 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            isolation: "isolate",
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`reveal group relative rounded-2xl border border-gs-dark/8 bg-gs-cream ${visible ? "visible" : ""}`}
              style={{
                transitionDelay: `${idx * 0.1}s`,
                transition: "0.5s",
                position: "relative",
                zIndex: 1,
                padding: "1rem",
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget
                card.style.zIndex = "10"
                card.style.boxShadow = "0 20px 40px -12px rgba(0,0,0,0.15)"
                card.style.borderColor = "var(--gs-mint, #4ECDC4)"
                card.style.background = "var(--gs-mint-soft, #f0fafa)"
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget
                card.style.zIndex = "1"
                card.style.boxShadow = ""
                card.style.borderColor = ""
                card.style.background = ""
              }}
            >
              {/* Icon */}
              <div className="text-gs-gold">{stepIcons[idx]}</div>

              {/* Label */}
              <p
                className="mt-4 text-[17px] md:text-[21px] font-bold uppercase tracking-widest text-gs-gold"
              >
                {step.label}
              </p>

              {/* Title */}
              <h3
                className="font-display mt-2 text-[27px] md:text-[31px] font-bold text-gs-dark"
              >
                {step.title}
              </h3>

              {/* Text */}
              <p
                className="mt-3 text-[17px] md:text-[21px] leading-relaxed text-gs-teal"
              >
                {step.text}
              </p>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gs-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        <div className={`reveal mt-16 overflow-hidden rounded-3xl ${visible ? "visible" : ""}`}>
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=60"
            alt="Strategic planning session"
            loading="lazy"
            className="h-64 w-full object-cover md:h-80"
          />
        </div>
      </div>
    </section>
  )
}