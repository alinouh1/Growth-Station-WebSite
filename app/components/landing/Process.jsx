import { useState, useRef, useEffect } from "react"
import "../../styles/process-portfolio.css"

const processData = {
  eyebrow: "How We Work",
  titleEm: "Our Process",
  titleOutline: "& Framework",
  description: "Real work. Real results. A curated look at brands we've built, products we've launched, and businesses we've grown.",
  filterAll: "All",
  cardCta: "Watch The Project",
  bottomText: "Want to see more of our work?",
  bottomBtn: "View All Projects",
  categories: [
    "Brand Development",
    "Digital Products",
    "Marketing & Growth",
    "Content Creation",
    "Strategy & Planning",
    "Brand & Creative",
  ],
  items: [
    {
      num: "01",
      client: "Kromo Dev.",
      location: "Greece",
      service: "Brand Development",
      tags: ["Brand Architecture", "Logo Design", "CI"],
      color: "#C08D51",
      bg: "linear-gradient(135deg, #2a1a0a 0%, #3d2409 50%, #1a0d04 100%)",
      shape: "circle",
    },
    {
      num: "02",
      client: "Naguib Selim",
      location: "Egypt",
      service: "Digital Products",
      tags: ["Web Development", "UI/UX", "React"],
      color: "#96CDB0",
      bg: "linear-gradient(135deg, #0a1f18 0%, #0d2a20 50%, #061410 100%)",
      shape: "triangle",
    },
    {
      num: "03",
      client: "Gulf Brand Co.",
      location: "UAE",
      service: "Marketing & Growth",
      tags: ["Ads", "Social Media", "Strategy"],
      color: "#b7f5d3",
      bg: "linear-gradient(135deg, #081a14 0%, #0f2b20 50%, #041008 100%)",
      shape: "diamond",
    },
    {
      num: "04",
      client: "Luxe Cairo",
      location: "Egypt",
      service: "Content Creation",
      tags: ["Media Production", "Content", "Photography"],
      color: "#C08D51",
      bg: "linear-gradient(135deg, #1a1208 0%, #2a1e0a 50%, #100b04 100%)",
      shape: "hexagon",
    },
    {
      num: "05",
      client: "TechFlow",
      location: "Saudi Arabia",
      service: "Strategy & Planning",
      tags: ["Growth Strategy", "KPIs", "Planning"],
      color: "#96CDB0",
      bg: "linear-gradient(135deg, #0c1f1a 0%, #122b24 50%, #061410 100%)",
      shape: "circle",
    },
    {
      num: "06",
      client: "Orbit Studio",
      location: "Egypt",
      service: "Brand & Creative",
      tags: ["Branding", "Identity", "Visual Design"],
      color: "#fff",
      bg: "linear-gradient(135deg, #101a16 0%, #1a2820 50%, #080f0c 100%)",
      shape: "triangle",
    },
  ],
}


function AbstractShape({
  shape,
  color,
}) {
  const c = color
  if (shape === "circle")
    return (
      <svg viewBox="0 0 200 200" className="pf-shape" aria-hidden>
        <circle cx="100" cy="100" r="70" fill="none" stroke={c} strokeWidth="1.5" opacity="0.25" />
        <circle cx="100" cy="100" r="45" fill="none" stroke={c} strokeWidth="1" opacity="0.18" />
        <circle cx="100" cy="100" r="20" fill={c} opacity="0.12" />
        <circle cx="140" cy="60" r="8" fill={c} opacity="0.35" />
        <line x1="30" y1="100" x2="170" y2="100" stroke={c} strokeWidth="0.8" opacity="0.15" />
        <line x1="100" y1="30" x2="100" y2="170" stroke={c} strokeWidth="0.8" opacity="0.15" />
      </svg>
    )
  if (shape === "triangle")
    return (
      <svg viewBox="0 0 200 200" className="pf-shape" aria-hidden>
        <polygon points="100,20 180,160 20,160" fill="none" stroke={c} strokeWidth="1.5" opacity="0.25" />
        <polygon points="100,50 155,145 45,145" fill="none" stroke={c} strokeWidth="1" opacity="0.18" />
        <polygon points="100,80 130,130 70,130" fill={c} opacity="0.1" />
        <circle cx="100" cy="20" r="5" fill={c} opacity="0.4" />
        <circle cx="180" cy="160" r="5" fill={c} opacity="0.4" />
        <circle cx="20" cy="160" r="5" fill={c} opacity="0.4" />
      </svg>
    )
  if (shape === "diamond")
    return (
      <svg viewBox="0 0 200 200" className="pf-shape" aria-hidden>
        <polygon points="100,15 185,100 100,185 15,100" fill="none" stroke={c} strokeWidth="1.5" opacity="0.25" />
        <polygon points="100,45 155,100 100,155 45,100" fill="none" stroke={c} strokeWidth="1" opacity="0.18" />
        <polygon points="100,75 125,100 100,125 75,100" fill={c} opacity="0.12" />
        <line x1="15" y1="100" x2="185" y2="100" stroke={c} strokeWidth="0.8" opacity="0.15" />
        <line x1="100" y1="15" x2="100" y2="185" stroke={c} strokeWidth="0.8" opacity="0.15" />
      </svg>
    )
  if (shape === "hexagon")
    return (
      <svg viewBox="0 0 200 200" className="pf-shape" aria-hidden>
        <polygon points="100,18 172,59 172,141 100,182 28,141 28,59" fill="none" stroke={c} strokeWidth="1.5" opacity="0.25" />
        <polygon points="100,45 152,75 152,135 100,165 48,135 48,75" fill="none" stroke={c} strokeWidth="1" opacity="0.18" />
        <polygon points="100,72 128,88 128,120 100,136 72,120 72,88" fill={c} opacity="0.1" />
        <circle cx="100" cy="100" r="6" fill={c} opacity="0.35" />
      </svg>
    )
  return null
}

function ProcessCard({
  project,
  index,
  cardCta,
}) {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      className={`pf-card ${visible ? "visible" : ""} ${hovered ? "hovered" : ""}`}
      style={{
        background: project.bg,
        transitionDelay: `${(index % 3) * 0.1}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pf-card__glow"
        style={{ "--accent": project.color }}
      />

      <div className="pf-card__visual">
        <AbstractShape shape={project.shape} color={project.color} />
        <div
          className="pf-card__visual-bg"
          style={{
            background: `radial-gradient(circle, ${project.color}18, transparent 70%)`,
          }}
        />
      </div>

      <div className="pf-card__top">
        <span className="pf-card__num" style={{ color: project.color }}>
          {project.num}
        </span>
        <span className="pf-card__location">{project.location}</span>
      </div>

      <div className="pf-card__body">
        <div className="pf-card__service" style={{ color: project.color }}>
          {project.service}
        </div>
        <h3 className="pf-card__client">{project.client}</h3>
        <div className="pf-card__tags">
          {project.tags.map((t) => (
            <span key={t} className="pf-card__tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pf-card__cta">
        <span>{cardCta}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export function Process() {
  const [filter, setFilter] = useState(processData.filterAll)

  const filtered =
    filter === processData.filterAll
      ? processData.items
      : processData.items.filter((item) => item.service === filter)

  const categories = [processData.filterAll, ...processData.categories]

  return (
    <section
      id="process"
      className="pf relative bg-white/75 backdrop-blur-md"
    >
      <div className="pf-header">
        <div className="pf-header__eyebrow">
          <span className="pf-header__line" />
          <span>{processData.eyebrow}</span>
        </div>
        <h2 className="pf-header__title">
          <em>{processData.titleEm}</em>
          <span className="pf-header__outline">{processData.titleOutline}</span>
        </h2>
        <p className="pf-header__desc">{processData.description}</p>
      </div>

      <div className="pf-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`pf-filter ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="pf-grid">
        {filtered.map((project, i) => (
          <ProcessCard
            key={project.num}
            project={project}
            index={i}
            cardCta={processData.cardCta}
          />
        ))}
      </div>

      <div className="pf-bottom">
        <p className="pf-bottom__text">{processData.bottomText}</p>
        <a href="#contact" className="pf-bottom__btn">
          {processData.bottomBtn}
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path
              d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}