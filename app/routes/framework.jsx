import { Framework } from "../components/landing/Framework"
import { Navbar } from "../components/landing/Navbar"
import { Footer } from "../components/landing/Footer"
import { SiteBackground } from "../components/landing/SiteBackground"
import { useLanguage } from "../context/LanguageContext"

export default function FrameworkPage() {
  const { dict } = useLanguage()
  
  return (
    <>
      <SiteBackground />
      <div className="min-h-screen bg-gs-cream">
        <Navbar />
        <Framework />
        <Footer />
      </div>
    </>
  )
}
