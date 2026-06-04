import { useLanguage } from "../../context/LanguageContext";

export function LanguageSwitcher() {
  const { locale, setLocale, dict } = useLanguage();

  return (
    <div
      className="flex items-center rounded-full border border-white/20 p-0.5"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`min-w-[2.25rem] rounded-full px-2.5 py-1.5 text-xs font-bold transition-all ${
          locale === "en"
            ? "bg-gs-gold text-white"
            : "text-gs-mint/70 hover:text-white"
        }`}
        aria-pressed={locale === "en"}
      >
        {dict.lang.switchToEn}
      </button>
      <button
        type="button"
        onClick={() => setLocale("ar")}
        className={`min-w-[2.25rem] rounded-full px-2.5 py-1.5 font-arabic text-sm font-bold transition-all ${
          locale === "ar"
            ? "bg-gs-gold text-white"
            : "text-gs-mint/70 hover:text-white"
        }`}
        aria-pressed={locale === "ar"}
      >
        {dict.lang.switchToAr}
      </button>
    </div>
  );
}
