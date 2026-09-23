import { Brief } from "../components/landing/Brief"
import { Navbar } from "../components/landing/Navbar"
import { Footer } from "../components/landing/Footer"
import { SiteBackground } from "../components/landing/SiteBackground"
import { LanguageProvider } from "../context/LanguageContext"

export default function BriefPage() {
  return (
    <LanguageProvider>
      <SiteBackground />
      <div className="min-h-screen bg-gs-cream">
        <Navbar />
        <Brief />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
