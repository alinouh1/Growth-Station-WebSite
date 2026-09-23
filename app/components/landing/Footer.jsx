import { Link } from "react-router-dom"
import { BrandLogo } from "./BrandLogo"
import { MapPin, Phone, Mail } from "lucide-react"
import { FaSnapchat } from "react-icons/fa"

function SocialIcon({
  children,
  href,
  label,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-gs-mint hover:bg-gs-mint hover:text-gs-dark"
    >
      {children}
    </a>
  )
}

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/growthstationco", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
  { name: "Instagram", href: "https://instagram.com/growthstationco", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
  { name: "TikTok", href: "https://tiktok.com/@growthstationco", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg> },
  { name: "Snapchat", href: "https://snapchat.com/add/growthstationco", icon: <FaSnapchat className="h-4 w-4" /> },
  { name: "Behance", href: "https://behance.net/growthstationco", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" /></svg> },
  { name: "LinkedIn", href: "https://linkedin.com/company/growthstationco", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
  { name: "WhatsApp", href: "https://wa.me/201281338483", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg> },
]

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Brief", href: "/brief" },
  { label: "Framework", href: "/framework" },
  { label: "Contact", href: "/contact" },
]

const footerData = {
  tagline: "We partner with ambitious businesses across Egypt & the GCC to build powerful brands and drive measurable growth.",
  navigation: "Navigation",
  servicesTitle: "Services",
  services: [
    "Performance Marketing",
    "Brand Strategy",
    "Web Development",
    "UI/UX Design",
    "AI Solutions",
  ],
  contactTitle: "Get In Touch",
  location: "Cairo, Egypt",
  rights: "© 2026 Growth Station. All Rights Reserved.",
  privacy: "Privacy Policy",
  terms: "Terms & Conditions",
}

export function Footer() {

  const handleLogoClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer id="contact" dir="ltr" className="bg-gs-dark text-white relative z-[1000]">
      <div className="mx-auto max-w-7xl px-2 pt-10 pb-7 lg:px-2 lg:pt-13 lg:pb-9">
        {/* First Row: Logo + Tagline (left) and Navigation (right) on laptop, stacked on smaller screens */}
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-10 mb-8">
          {/* Left Side: Logo + Tagline */}
          <div className="flex-1 flex flex-col gap-3 xl:gap-4">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="inline-block bg-transparent transition-opacity hover:opacity-90 flex-shrink-0"
            >
              <BrandLogo className="h-12 w-auto max-w-[160px] sm:h-14 sm:max-w-[180px] lg:h-16 lg:max-w-[220px]" />
            </Link>
            <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed text-gs-mint/80 text-center xl:text-left">
              {footerData.tagline}
            </p>
          </div>

          {/* Right Side: Navigation & Services & Contact */}
          <div className="flex-1">
            <div className="grid gap-4 sm:gap-5 grid-cols-2 lg:grid-cols-3">
              <div className="col-span-1">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gs-gold sm:text-xs">
                  {footerData.navigation}
                </h4>
                <ul className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5">
                  {navLinks.map((link, i) => (
                    <li key={`${link.href}-${i}`}>
                      <a
                        href={link.href}
                        className="text-[11px] sm:text-xs md:text-sm text-gs-mint/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-1">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gs-gold sm:text-xs">
                  {footerData.servicesTitle}
                </h4>
                <ul className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5">
                  {footerData.services.map((link) => (
                    <li key={link}>
                      <a
                        href="#services"
                        className="text-[11px] sm:text-xs md:text-sm text-gs-mint/80 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gs-gold sm:text-xs">
                  {footerData.contactTitle}
                </h4>
                <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2 text-[11px] sm:text-xs md:text-sm text-gs-mint/80">
                  <li className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>{footerData.location}</span>
                  </li>
                  <li>
                    <a href="tel:+20128133" className="flex items-center gap-1.5 hover:text-white">
                      <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>+20 128 133 8483</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@growthstation.com"
                      className="flex items-center gap-1.5 hover:text-white"
                    >
                      <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>info@growthstation.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Social Media Icons */}
        <div className="mt-6 md:mt-8 flex justify-center">
          <div className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-4">
            {socialLinks.map((social) => (
              <SocialIcon key={social.name} href={social.href} label={social.name}>
                {social.icon}
              </SocialIcon>
            ))}
          </div>
        </div>

        {/* Bottom Row: Copyright & Legal */}
        <div
          className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-sm text-gs-mint/60 sm:mt-12 sm:flex-row sm:gap-4 sm:pt-8 sm:text-base"
        >
          <p className="text-center sm:text-left">{footerData.rights}</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white">
              {footerData.privacy}
            </a>
            <a href="#" className="hover:text-white">
              {footerData.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
