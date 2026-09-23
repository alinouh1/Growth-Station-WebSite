import { useEffect, useState, useRef, useCallback } from "react"
import { Link, useLocation } from "react-router-dom"
import { BrandLogo } from "./BrandLogo"
import { LanguageSwitcher } from "./LanguageSwitcher"
import "./Navbar.css"

// Throttle utility for scroll events - improves mobile performance
function throttle(fn, delay) {
  let lastCall = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      fn.apply(this, args)
    }
  }
}

export function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const logoImgRef = useRef(null)

  const isHomePage       = location.pathname === "/"
  const isContactOrBrief = location.pathname === "/contact" || location.pathname === "/brief"

  const links = [
    { href: "/",         label: "Home"     },
    { href: "/about",    label: "About"    },
    { href: "/services", label: "Services" },
    { href: "/careers",  label: "Careers"  },
    { href: "/brief",    label: "Brief"    },
    { href: "/contact",  label: "Contact"  },
  ]

  /* scroll - throttled for better mobile performance */
  useEffect(() => {
    const fn = throttle(() => setScrolled(window.scrollY > 100), 100)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  /* change icon based on section - throttled and optimized */
  useEffect(() => {
    const logoImg = logoImgRef.current
    if (!logoImg) return

    const sectionsForFirstImage = [
      { selector: '[class*="bg-gs-dark"]' },
      { selector: '[class*="expertise"]' },
      { selector: '[class*="why-us"]' },
      { selector: '[class*="how-we-work"]' },
      { selector: '[class*="our-process"]' },
      { selector: '[class*="recruiting"]' },
      { selector: '[class*="building-team"]' },
      { selector: 'footer' },
    ]

    const checkSection = throttle(() => {
      let shouldUseFirstImage = false

      for (const section of sectionsForFirstImage) {
        const elements = document.querySelectorAll(section.selector)
        for (const element of elements) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            shouldUseFirstImage = true
            break
          }
        }
        if (shouldUseFirstImage) break
      }

      if (shouldUseFirstImage) {
        logoImg.src = '/images/ali logo.png 1.svg'
      } else {
        logoImg.src = '/images/ali logo.png 2.svg'
        const bgColor = window.getComputedStyle(document.body).backgroundColor
        logoImg.style.filter = bgColor === 'rgb(22, 39, 39)' ? 'invert(1)' : 'none'
      }
    }, 150)

    checkSection()
    window.addEventListener('scroll', checkSection, { passive: true })
    return () => window.removeEventListener('scroll', checkSection)
  }, [])

  /* close sidebar on route change */
  useEffect(() => { setSidebarOpen(false) }, [location.pathname])

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [sidebarOpen])

  /* desktop link helper */
  const navLink = (link, extra = "") => (
    <Link
      to={link.href}
      className={`font-medium text-gs-mint/90 transition-colors hover:text-gs-gold ${
        location.pathname === link.href ? "border-b-2 border-gs-gold text-gs-gold" : ""
      } ${extra}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {link.label}
    </Link>
  )

  /*
    Circular text math:
    - SVG viewBox: 108 × 108  (matches button size)
    - centre: cx=54, cy=54
    - text path radius: 48  → r=48, so path diameter=96, fits in 108
    - text sits just inside the outer edge
  */
  const circularTextPath =
    "M 54,54 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"

  const label = ".GROWTH STATION · GROWTH STATION · "

  return (
    <>
      {/* ══════════════════════════════════════════════
          MOBILE — Logo trigger fixed bottom-right
      ══════════════════════════════════════════════ */}
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={sidebarOpen}
        className={`nav-logo-trigger${sidebarOpen ? " hidden-trigger" : ""}`}
        onClick={() => setSidebarOpen(true)}
      >
        {/* Rotating circular text */}
        <svg
          className="nav-logo-circular-text"
          viewBox="0 0 108 108"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <path id="circle-path" d={circularTextPath} />
          </defs>
          <text>
            <textPath href="#circle-path" startOffset="0%">
              {label}
            </textPath>
          </text>
        </svg>

        {/* Logo image */}
        <img
          ref={logoImgRef}
          src="/images/ali logo.png 1.svg"
          alt="Growth Station logo"
          className="nav-logo-img"
        />
      </button>

      {/* ══════════════════════════════════════════════
          MOBILE — Overlay
      ══════════════════════════════════════════════ */}
      <div
        className={`nav-sidebar-overlay${sidebarOpen ? " open" : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════
          MOBILE — Sidebar
      ══════════════════════════════════════════════ */}
      <nav
        dir="ltr"
        className={`nav-sidebar${sidebarOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {/* header */}
        <div className="nav-sidebar-header">
          <BrandLogo className="h-[48px] w-auto max-w-[140px]" />
          <button
            type="button"
            aria-label="Close navigation menu"
            className="nav-sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <svg width="17" height="17" viewBox="0 0 14 14" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* links */}
        <ul className="nav-sidebar-links">
          {links.map((link) => (
            <li key={`sidebar-${link.href}`} className="nav-sidebar-item">
              <Link
                to={link.href}
                className={`nav-sidebar-link${location.pathname === link.href ? " active" : ""}`}
                onClick={() => { setSidebarOpen(false); window.scrollTo(0, 0) }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* footer */}
        <div className="nav-sidebar-footer">
          {isContactOrBrief && (
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          )}
          <Link
            to="/contact"
            className="nav-sidebar-cta"
            onClick={() => setSidebarOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════
          DESKTOP / TABLET (md+) — Floating pill
      ══════════════════════════════════════════════ */}
      <header
        dir="ltr"
        className={`navbar-desktop md:block hidden fixed left-1/2 -translate-x-1/2 w-[90%] max-w-7xl backdrop-blur-xl rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-[100] ${
          isHomePage
            ? scrolled
              ? "top-1 bg-gs-dark/90 backdrop-blur-2xl shadow-xl shadow-black/30 scale-[0.9]"
              : "bottom-4 py-4 bg-gs-dark/70 shadow-lg shadow-black/20 scale-[0.85]"
            : "top-2 bg-gs-dark/90 backdrop-blur-2xl shadow-xl shadow-black/30"
        }`}
      >
        <nav className="flex items-center justify-between gap-1 md:gap-2 lg:gap-4 px-3 md:px-4 lg:px-8">
          <a href="/" className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90">
            <BrandLogo className="h-[50px] w-auto max-w-[130px] md:h-[60px] md:max-w-[160px] lg:h-[70px] lg:max-w-[200px] xl:h-[78px] xl:max-w-[240px]" />
          </a>

          <ul className="hidden items-center gap-1 md:gap-2 lg:gap-4 xl:gap-8 md:flex">
            {links.map((link) => (
              <li key={`desktop-${link.href}`}>
                {navLink(link, "text-xs md:text-sm lg:text-base xl:text-xl")}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
            {isContactOrBrief && <LanguageSwitcher />}
            <Link
              to="/contact"
              className="hidden rounded-full bg-gs-gold px-2 py-1 text-xs font-semibold text-white transition-all hover:bg-gs-mint md:px-3 md:py-1.5 md:text-sm lg:px-4 lg:py-2 lg:text-base xl:px-6 xl:py-2.5 xl:text-lg min-[1120px]:max-[1140px]:px-2 min-[1120px]:max-[1140px]:py-1.2 min-[1120px]:max-[1140px]:text-[calc(0,5rem-3px)] relative overflow-hidden sm:inline-flex"
            >
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}