import { LanguageProvider } from "../../context/LanguageContext";
import { SiteBackground } from "./SiteBackground";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { Expertise } from "./Expertise";
import { Approach } from "./Approach";
import { WhyUs } from "./WhyUs";
import { Process } from "./Process";
import { Leadership } from "./Leadership";
import { Recruiting } from "./Recruiting";
import { Footer } from "./Footer";

export function GrowthStationLanding() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}
