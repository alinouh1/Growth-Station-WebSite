import { Routes, Route } from "react-router-dom"
import "./app.css"
import { LanguageProvider } from "./context/LanguageContext"
import Home from "./routes/home"
import About from "./routes/about"
import Services from "./routes/services"
import Framework from "./routes/framework"
import Careers from "./routes/careers"
import CareersApply from "./routes/careers.apply"
import Brief from "./routes/brief"
import Contact from "./routes/contact"
import NotFound from "./routes/notfound"

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/apply" element={<CareersApply />} />
        <Route path="/brief" element={<Brief />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  )
}
