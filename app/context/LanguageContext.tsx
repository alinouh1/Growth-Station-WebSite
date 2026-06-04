import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getDictionary } from "../i18n";
import type { Dictionary, Locale } from "../i18n";

const STORAGE_KEY = "gs-locale";

type LanguageContextValue = {
  locale: Locale;
  dict: Dictionary;
  isRtl: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "ar" ? "ar" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "en" ? "ar" : "en";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const isRtl = locale === "ar";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = isRtl ? "rtl" : "ltr";
    document.title = getDictionary(locale).meta.title;
  }, [locale, isRtl]);

  const value = useMemo(
    () => ({
      locale,
      dict: getDictionary(locale),
      isRtl,
      setLocale,
      toggleLocale,
    }),
    [locale, isRtl, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
