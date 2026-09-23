import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { getDictionary } from "../i18n"

const STORAGE_KEY = "gs-locale"

const LanguageContext = createContext(null)

function readStoredLocale() {
  if (typeof window === "undefined") return "en"
  // Always default to English
  localStorage.setItem(STORAGE_KEY, "en")
  return "en"
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("en")

  useEffect(() => {
    setLocaleState(readStoredLocale())
  }, [])

  const setLocale = useCallback((next) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "en" ? "ar" : "en"
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  const isRtl = locale === "ar"

  useEffect(() => {
    const root = document.documentElement
    root.lang = locale
    // Don't set dir globally - let individual pages handle it
    document.title = getDictionary(locale).meta.title
  }, [locale, isRtl])

  const value = useMemo(
    () => ({
      locale,
      dict: getDictionary(locale),
      isRtl,
      setLocale,
      toggleLocale,
    }),
    [locale, isRtl, setLocale, toggleLocale],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return ctx
}
