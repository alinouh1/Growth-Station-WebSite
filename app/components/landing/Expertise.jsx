import { useReveal } from "../../hooks/useReveal"
import { Link } from "react-router-dom"
import { Target, Sparkles, PenTool, Smartphone, Video, BarChart3, Globe, ShoppingCart, Layout, Palette, Megaphone, Laptop } from "lucide-react"
import "./ServicesNew.css"

const colors = {
  mint: "#96cdb0",
  dark: "#162727",
  teal: "#135454",
  gold: "#c08d51",
  green: "#6bb68e",
  cream: "#f8faf9",
  mintSoft: "#e8f4ef",
  goldSoft: "#f5ebe0",
}

const marketingServices = [
  { icon:<Target className="w-5 h-5" />, name:"Strategy" },
  { icon:<Sparkles className="w-5 h-5" />, name:"Branding" },
  { icon:<PenTool className="w-5 h-5" />, name:"Content Creation" },
  { icon:<Smartphone className="w-5 h-5" />, name:"Social Media Management" },
  { icon:<Video className="w-5 h-5" />, name:"Media Production" },
  { icon:<BarChart3 className="w-5 h-5" />, name:"Ads & Performance Advertising" },
]

const softwareServices = [
  { icon:<Globe className="w-5 h-5" />, name:"Web Development" },
  { icon:<ShoppingCart className="w-5 h-5" />, name:"E-commerce" },
  { icon:<Layout className="w-5 h-5" />, name:"Mobile Application" },
  { icon:<Palette className="w-5 h-5" />, name:"UI / UX Design" },
]

function ServiceCategory({ num, icon, title, services, delay }) {
  return (
    <div className={`service-cat-el ${delay}`} style={{ transition: "0.5s" }}>
      <div className="cat-num-el">{num}</div>
      <div style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"1.2rem" }}>
        <div className="cat-icon-el" style={{ color:colors.mint }}>{icon}</div>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.2rem", fontWeight:600, color:colors.cream }}>{title}</div>
      </div>
      <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:0 }}>
        {services.map(s => (
          <li key={s.name} className="service-item-el">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration:"none", color:"inherit", display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}>
                <span style={{ color:colors.gold }}>{s.icon}</span>
                <span className="svc-name">{s.name}</span>
              </div>
              <span className="svc-arrow">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Expertise() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32"
      style={{
        background:colors.dark,
        overflow:"hidden",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"end", marginBottom:"5rem" }}>
          <div>
            <div className="section-tag-el section-tag-mint" style={{ fontFamily:"'Syne Mono',monospace", fontSize:"0.97rem", letterSpacing:"0.2em", textTransform:"uppercase", color:colors.mint, marginBottom:"1rem" }}>
              OUR EXPERTISE
            </div>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2.4rem,4.5vw,3.8rem)", fontWeight:300, lineHeight:1.1, color:colors.cream }}>
              Interactive Services
            </h2>
          </div>
        </div>
        <div className="services-grid-el" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.8rem" }}>
          <ServiceCategory num="01" icon={<Megaphone className="w-6 h-6" />} title="Digital Marketing" services={marketingServices} delay="delay-1" />
          <ServiceCategory num="02" icon={<Laptop className="w-6 h-6" />} title="Software" services={softwareServices} delay="delay-3" />
        </div>
      </div>
    </section>
  )
}
