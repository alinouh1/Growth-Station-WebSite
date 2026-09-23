import { About } from "../components/landing/About"
import { SiteBackground } from "../components/landing/SiteBackground"
import { Navbar } from "../components/landing/Navbar"
import { Footer } from "../components/landing/Footer"

export default function AboutPage() {
  return (
    <>
      <SiteBackground />
      <div className="min-h-screen bg-gs-cream">
        <Navbar />
        <About />
        <Footer />
      </div>
    </>
  )
}
