import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import type { ProcessItemData } from "../../i18n/types";
import "../../styles/process-portfolio.css";

type ShapeType = ProcessItemData["shape"];

function AbstractShape({
  shape,
  color,
}: {
  shape: ShapeType;
  color: string;
}) {
  const c = color;
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
    );
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
    );
  if (shape === "diamond")
    return (
      <svg viewBox="0 0 200 200" className="pf-shape" aria-hidden>
        <polygon points="100,15 185,100 100,185 15,100" fill="none" stroke={c} strokeWidth="1.5" opacity="0.25" />
        <polygon points="100,45 155,100 100,155 45,100" fill="none" stroke={c} strokeWidth="1" opacity="0.18" />
        <polygon points="100,75 125,100 100,125 75,100" fill={c} opacity="0.12" />
        <line x1="15" y1="100" x2="185" y2="100" stroke={c} strokeWidth="0.8" opacity="0.15" />
        <line x1="100" y1="15" x2="100" y2="185" stroke={c} strokeWidth="0.8" opacity="0.15" />
      </svg>
    );
  if (shape === "hexagon")
    return (
      <svg viewBox="0 0 200 200" className="pf-shape" aria-hidden>
        <polygon points="100,18 172,59 172,141 100,182 28,141 28,59" fill="none" stroke={c} strokeWidth="1.5" opacity="0.25" />
        <polygon points="100,45 152,75 152,135 100,165 48,135 48,75" fill="none" stroke={c} strokeWidth="1" opacity="0.18" />
        <polygon points="100,72 128,88 128,120 100,136 72,120 72,88" fill={c} opacity="0.1" />
        <circle cx="100" cy="100" r="6" fill={c} opacity="0.35" />
      </svg>
    );
  return null;
}

function ProcessCard({
  project,
  index,
  cardCta,
}: {
  project: ProcessItemData;
  index: number;
  cardCta: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

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
        style={{ "--accent": project.color } as React.CSSProperties}
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
  );
}

export function Process() {
  const { dict, isRtl, locale } = useLanguage();
  const p = dict.process;
  const [filter, setFilter] = useState<string>(p.filterAll);

  useEffect(() => {
    setFilter(p.filterAll);
  }, [locale, p.filterAll]);

  const filtered =
    filter === p.filterAll
      ? p.items
      : p.items.filter((item) => item.service === filter);

  const categories = [p.filterAll, ...p.categories];

  return (
    <section
      id="process"
      className={`pf relative bg-white/75 backdrop-blur-md ${isRtl ? "font-arabic" : ""}`}
    >
      <div className="pf-header">
        <div className="pf-header__eyebrow">
          <span className="pf-header__line" />
          <span>{p.eyebrow}</span>
        </div>
        <h2 className="pf-header__title">
          <em>{p.titleEm}</em>
          <span className="pf-header__outline">{p.titleOutline}</span>
        </h2>
        <p className="pf-header__desc">{p.description}</p>
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
            cardCta={p.cardCta}
          />
        ))}
      </div>

      <div className="pf-bottom">
        <p className="pf-bottom__text">{p.bottomText}</p>
        <a href="#contact" className="pf-bottom__btn">
          {p.bottomBtn}
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
  );
}
