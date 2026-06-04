import { useReveal } from "../../hooks/useReveal";

const projects = [
  {
    title: "Fintech Rebrand",
    category: "Branding · UAE",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    title: "E-Commerce Scale",
    category: "Marketing · Egypt",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "SaaS Platform",
    category: "Software · GCC",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  },
  {
    title: "Luxury Hospitality",
    category: "Full Service · KSA",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  },
];

export function Portfolio() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-24 md:py-32 bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`reveal text-center ${visible ? "visible" : ""}`}>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gs-gold">
            Portfolio
          </span>
          <h2 className="font-display mt-3 text-4xl font-bold text-gs-dark md:text-5xl">
            Work That Drives Growth
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, idx) => (
            <a
              key={project.title}
              href="#contact"
              className={`reveal group relative overflow-hidden rounded-2xl ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gs-dark via-gs-dark/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-xs uppercase tracking-wider text-gs-mint">
                  {project.category}
                </p>
                <h3 className="font-display mt-1 text-lg font-bold">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
