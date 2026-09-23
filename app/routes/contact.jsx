import { Contact } from "../components/landing/Contact"
import { Navbar } from "../components/landing/Navbar"
import { Footer } from "../components/landing/Footer"
import { SiteBackground } from "../components/landing/SiteBackground"
import { LanguageProvider } from "../context/LanguageContext"

export default function ContactPage() {
  return (
    <LanguageProvider>
      <SiteBackground />
      <div className="min-h-screen bg-gs-cream">
        <Navbar />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
