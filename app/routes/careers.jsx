import { Careers } from "../components/landing/Careers"
import { Navbar } from "../components/landing/Navbar"
import { Footer } from "../components/landing/Footer"
import { SiteBackground } from "../components/landing/SiteBackground"
import { useLanguage } from "../context/LanguageContext"

export default function CareersPage() {
  const { dict } = useLanguage()
  
  return (
    <>
      <SiteBackground />
      <div className="min-h-screen bg-gs-cream">
        <Navbar />
        <Careers />
        <Footer />
      </div>
    </>
  )
}
