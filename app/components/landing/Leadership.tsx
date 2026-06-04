import { useLanguage } from "../../context/LanguageContext";
import { useReveal } from "../../hooks/useReveal";

const images = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
];

export function Leadership() {
  const { dict, isRtl } = useLanguage();
  const { ref, visible } = useReveal<HTMLElement>();
  const l = dict.leadership;

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-gs-mint-soft/88 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`reveal text-center ${visible ? "visible" : ""}`}>
          <span
            className={`text-xs font-bold uppercase tracking-[0.3em] text-gs-gold ${isRtl ? "font-arabic normal-case" : ""}`}
          >
            {l.eyebrow}
          </span>
          <h2
            className={`font-display mt-3 text-4xl font-bold text-gs-dark md:text-5xl ${isRtl ? "font-arabic" : ""}`}
          >
            {l.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {l.members.map((member, idx) => (
            <article
              key={member.name}
              className={`reveal group overflow-hidden rounded-3xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${idx * 0.12}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={images[idx]}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className={`absolute top-4 rounded-full bg-gs-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${isRtl ? "right-4 font-arabic" : "left-4"}`}
                >
                  {member.badge}
                </span>
              </div>
              <div className={`p-6 ${isRtl ? "text-right font-arabic" : ""}`}>
                <p className="text-xs font-bold uppercase tracking-widest text-gs-teal">
                  {member.role}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-gs-dark">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gs-teal">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
