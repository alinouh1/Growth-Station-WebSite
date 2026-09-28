import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import "./app.css"
import { LanguageProvider } from "./context/LanguageContext"

const Home = lazy(() => import("./routes/home"))
const About = lazy(() => import("./routes/about"))
const Services = lazy(() => import("./routes/services"))
const Framework = lazy(() => import("./routes/framework"))
const Careers = lazy(() => import("./routes/careers"))
const CareersApply = lazy(() => import("./routes/careers.apply"))
const Brief = lazy(() => import("./routes/brief"))
const Contact = lazy(() => import("./routes/contact"))
const NotFound = lazy(() => import("./routes/notfound"))

export default function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
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
      </Suspense>
    </LanguageProvider>
  )
}
