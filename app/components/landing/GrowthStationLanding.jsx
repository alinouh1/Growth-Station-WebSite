import { SiteBackground } from "./SiteBackground"
import { Navbar } from "./Navbar"
import { Hero } from "./Hero"
import { Marquee } from "./Marquee"
import { Expertise } from "./Expertise"
import { Approach } from "./Approach"
import { WhyUs } from "./WhyUs"
import { Process } from "./Portfolio"
import { Leadership } from "./Leadership"
import { Recruiting } from "./Recruiting"
import { Footer } from "./Footer"

export function GrowthStationLanding() {
  return (
    <>
      <SiteBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee />
        <Expertise />
        <Approach />
        <WhyUs />
        <Process />
        <Leadership />
        <Recruiting />
      </main>
      <Footer />
    </>
  )
}
