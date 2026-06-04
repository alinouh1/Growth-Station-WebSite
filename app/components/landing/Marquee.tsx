import { useLanguage } from "../../context/LanguageContext";

export function Marquee() {
  const { dict, isRtl } = useLanguage();
  const track = [...dict.marquee, ...dict.marquee];

  return (
    <div className="relative overflow-hidden border-y border-gs-dark/10 bg-gs-dark py-4">
      <div className="flex w-max animate-marquee">
        {track.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className={`mx-8 flex shrink-0 items-center gap-4 whitespace-nowrap text-sm font-medium tracking-wide text-gs-mint md:text-base ${isRtl ? "font-arabic" : ""}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gs-gold" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
