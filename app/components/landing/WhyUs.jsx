import { useReveal } from "../../hooks/useReveal"
import { Target, BarChart3, Zap, Handshake } from "lucide-react"

const icons = [<Target className="w-8 h-8" />, <BarChart3 className="w-8 h-8" />, <Zap className="w-8 h-8" />, <Handshake className="w-8 h-8" />]

const items = [
  {
    title: "Strategy First",
    text: "Every decision is backed by deep research and clear strategic thinking.",
  },
  {
    title: "Performance Driven",
    text: "Results you can measure — from impressions to conversions to revenue.",
  },
  {
    title: "Fast Execution",
    text: "Speed is a competitive advantage. We move fast without breaking quality.",
  },
  {
    title: "Long-Term Partner",
    text: "We invest in your success as if it's our own — built for the long game.",
  },
]

export function WhyUs() {
  const { ref, visible } = useReveal()

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-gs-teal to-gs-dark text-white"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-gradient-to-br from-gs-teal/20 to-gs-dark/20 opacity-10 mix-blend-overlay" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`reveal max-w-2xl md:ml-8 ${visible ? "visible" : ""}`}
        >
          <span className="text-base font-bold uppercase tracking-[0.3em] text-gs-mint">
            Why Us
          </span>
          <h1 className="font-display mt-3 text-5xl font-bold md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Why Brand
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
              Choose Growth Station
            </span>
          </h1>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-5xl text-gray-400">
            Most agencies deliver work.
            <br/>
            <span className="text-gs-gold mt-[20px] inline-block">We deliver growth.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
         
          {items.map((item, idx) => (
            <div
              key={item.title}
              className={`reveal rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-3 hover:bg-white/10 hover:shadow-xl ${visible ? "visible" : ""}`}
              style={{ transition: "0.5s" }}
            >
              <div className="text-gs-gold">{icons[idx]}</div>
              <h3 className="font-display mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gs-mint/90">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
