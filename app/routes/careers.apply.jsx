import { JobApplication } from "../components/landing/JobApplication"
import { Navbar } from "../components/landing/Navbar"
import { Footer } from "../components/landing/Footer"
import { useLanguage } from "../context/LanguageContext"

export default function JobApplicationPage() {
  const { dict } = useLanguage()
  
  return (
    <div className="min-h-screen bg-gs-cream">
      <Navbar />
      <JobApplication />
      <Footer />
    </div>
  )
}
