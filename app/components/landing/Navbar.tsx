import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { BrandLogo } from "./BrandLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { dict, isRtl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#home", label: dict.nav.home },
    { href: "#services", label: dict.nav.services },
    { href: "#process", label: dict.nav.portfolio },
    { href: "#process", label: dict.nav.process },
    { href: "#contact", label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-gs-dark py-4 transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/25" : ""
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 lg:px-8 ${isRtl ? "flex-row-reverse" : ""}`}
      >
        <a
          href="#home"
          className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
        >
          <BrandLogo className="h-11 w-auto max-w-[150px] sm:h-12 sm:max-w-[180px]" />
        </a>

        <ul
          className={`hidden items-center gap-8 lg:flex ${isRtl ? "flex-row-reverse" : ""}`}
        >
          {links.map((link) => (
            <li key={`${link.href}-${link.label}`}>
              <a
                href={link.href}
                className={`text-sm font-medium text-gs-mint/90 transition-colors hover:text-gs-gold ${isRtl ? "font-arabic" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}
        >
          <LanguageSwitcher />
          <a
            href="#contact"
            className={`hidden rounded-full bg-gs-gold px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gs-mint hover:text-gs-dark sm:inline-flex ${isRtl ? "font-arabic" : ""}`}
          >
            {dict.nav.getStarted}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-0.5 w-5 bg-white transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 top-[72px] bg-gs-dark transition-all duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-6">
          {links.map((link) => (
            <li key={`${link.href}-${link.label}-mobile`}>
              <a
                href={link.href}
                className={`block rounded-xl px-4 py-3 text-lg font-medium text-gs-mint hover:text-gs-gold ${isRtl ? "font-arabic text-right" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4 flex justify-center gap-3">
            <LanguageSwitcher />
          </li>
          <li className="mt-4">
            <a
              href="#contact"
              className={`block rounded-full bg-gs-gold py-3 text-center font-semibold text-white ${isRtl ? "font-arabic" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {dict.nav.getStarted}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
