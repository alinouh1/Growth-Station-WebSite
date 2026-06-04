import { useLanguage } from "../../context/LanguageContext";
import { useReveal } from "../../hooks/useReveal";

const icons = ["📣", "💻"];
const images = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
];
const accents = [
  "from-gs-mint/30 to-gs-green/20",
  "from-gs-gold/25 to-gs-mint/20",
];

export function Expertise() {
  const { dict, isRtl } = useLanguage();
  const { ref, visible } = useReveal<HTMLElement>();
  const e = dict.expertise;

  const services = [
    { icon: icons[0], ...e.marketing, accent: accents[0] },
    { icon: icons[1], ...e.software, accent: accents[1] },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32 bg-gs-mint-soft/88 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`reveal text-center ${visible ? "visible" : ""}`}>
          <span
            className={`text-xs font-bold uppercase tracking-[0.3em] text-gs-gold ${isRtl ? "font-arabic normal-case" : ""}`}
          >
            {e.eyebrow}
          </span>
          <h2
            className={`font-display mt-3 text-4xl font-bold text-gs-dark md:text-5xl ${isRtl ? "font-arabic" : ""}`}
          >
            {e.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className={`card-shine reveal group overflow-hidden rounded-3xl bg-white shadow-xl shadow-gs-dark/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={images[idx]}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.accent} to-transparent`}
                />
                <span
                  className={`absolute top-6 text-4xl ${isRtl ? "right-6" : "left-6"}`}
                >
                  {service.icon}
                </span>
              </div>
              <div className={`p-8 ${isRtl ? "font-arabic text-right" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-wider text-gs-teal">
                  {service.tag}
                </p>
                <h3 className="font-display mt-2 text-2xl font-bold text-gs-dark">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gs-teal/90">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center justify-between border-b border-gs-dark/5 py-2 text-sm font-medium text-gs-dark transition-colors group-hover:border-gs-mint/30 ${isRtl ? "flex-row-reverse" : ""}`}
                    >
                      {item}
                      <span
                        className={`text-gs-gold transition-transform ${isRtl ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
                      >
                        {isRtl ? "↖" : "↗"}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-gs-teal transition-colors hover:text-gs-gold"
                >
                  {service.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
