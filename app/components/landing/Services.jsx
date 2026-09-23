import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Target, Sparkles, PenTool, Smartphone, Video, BarChart3, Globe, ShoppingCart, Layout, Palette, Megaphone, Laptop } from "lucide-react";
import "./ServicesNew.css";

const colors = {
  mint: "#96cdb0",
  dark: "#162727",
  teal: "#135454",
  gold: "#c08d51",
  green: "#6bb68e",
  cream: "#f8faf9",
  mintSoft: "#e8f4ef",
  goldSoft: "#f5ebe0",
};

// ── Scroll Reveal Hook ──
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-el, .reveal-left-el, .reveal-right-el");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
          else e.target.classList.remove("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Hero Section ──
function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable scroll animation on mobile
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <section className="hero-grid" style={{
      minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 1fr",
      alignItems:"center", padding: isMobile ? "7px 2rem 4rem 2rem" : "70px 2rem 9rem 9rem",
      position:"relative",
      background:"linear-gradient(135deg,#1a3535 0%,#1f4242 40%,#163030 75%,#0f2222 100%)",
    }}>
      {/* mesh overlay */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        background:`radial-gradient(ellipse 70% 60% at 75% 20%,rgba(150,205,176,0.12) 0%,transparent 60%),
          radial-gradient(ellipse 50% 70% at 10% 80%,rgba(19,84,84,0.35) 0%,transparent 55%),
          radial-gradient(ellipse 40% 40% at 50% 50%,rgba(192,141,81,0.06) 0%,transparent 50%)`,
      }} />
      {/* bg circles with parallax - disabled on mobile */}
      {!isMobile && (
        <>
          <div style={{
            position:"absolute", borderRadius:"50%", pointerEvents:"none",
            width:700, height:700, top:-120, right:-180,
            background:"radial-gradient(circle,rgba(150,205,176,0.18) 0%,rgba(19,84,84,0.22) 40%,transparent 70%)",
            transform:`translateY(${scrollY * 0.15}px)`,
          }} />
          <div style={{
            position:"absolute", borderRadius:"50%", pointerEvents:"none",
            width:380, height:380, bottom:30, left:60,
            background:"radial-gradient(circle,rgba(192,141,81,0.12) 0%,rgba(19,84,84,0.18) 50%,transparent 70%)",
            transform:`translateY(${scrollY * -0.1}px)`,
          }} />
        </>
      )}

      {/* Content */}
      <div style={{ position:"relative", zIndex:1 }}>
        <div className="hero-tag-el">
          <span className="hero-tag-dot" />
          WHAT WE DO
        </div>
        <h1 className="hero-title-el">
          Everything your brand <em style={{ fontStyle:"italic", color:colors.gold }}>needs.</em>
          <strong style={{ fontWeight:700, color:colors.mint, display:"block" }}>Nothing it doesn't.</strong>
        </h1>
        <p className="hero-desc-el">
          We craft digital products, scalable systems & premium experiences that move ambitious businesses forward.
        </p>
        <div className="hero-btns-el">
          <a href="#services" className="btn-primary-el">
            <span>Explore Services</span>
            <span>↓</span>
          </a>
          <Link to="/contact" className="btn-outline-el" onClick={() => window.scrollTo(0, 0)}>Book a Session</Link>
        </div>
      </div>

      {/* Visual cards */}
      <div className="hero-visual-el" style={{ position:"relative", zIndex:1 }}>
        <div style={{ position:"relative", width:380, height:460 }}>
          <div className="hero-card-1-el">
            <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"1rem", letterSpacing:"0.12em", textTransform:"uppercase", color:colors.mint, marginBottom:"1.5rem" }}>Growth Delivered</div>
            <div style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:700, lineHeight:1, fontSize:"3.5rem", color:"white" }}>
              <span style={{ fontSize:"1.5rem", color:colors.gold }}>+</span>340<span style={{ fontSize:"1.5rem", color:colors.gold }}>%</span>
            </div>
            <div style={{ fontSize:"0.8rem", marginTop:"0.4rem", color:"rgba(255,255,255,0.5)" }}>Average ROI Increase</div>
            <div style={{ width:40, height:2, background:colors.gold, margin:"1.5rem 0" }} />
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.5rem" }}>
              {["Performance Ads","Social Media","Web Development","Branding & Strategy"].map(s => (
                <li key={s} className="card-service-item-el">{s}</li>
              ))}
            </ul>
          </div>
          <div className="hero-card-2-el">
            <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"1rem", letterSpacing:"0.12em", textTransform:"uppercase", color:colors.teal, marginBottom:"1rem" }}>Our Focus</div>
            <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"2rem", fontWeight:600, color:colors.teal, lineHeight:1.1 }}>Egypt & GCC Markets</div>
            <div style={{ fontSize:"1.15rem", color:"rgba(22,39,39,0.55)", marginTop:"0.6rem", lineHeight:1.5 }}>One partner for both markets. Deep audience knowledge, real results.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Services Section ──
const marketingServices = [
  { icon:<Target className="w-5 h-5" />, name:"Strategy" },
  { icon:<Sparkles className="w-5 h-5" />, name:"Branding" },
  { icon:<PenTool className="w-5 h-5" />, name:"Content Creation" },
  { icon:<Smartphone className="w-5 h-5" />, name:"Social Media Management" },
  { icon:<Video className="w-5 h-5" />, name:"Media Production" },
  { icon:<BarChart3 className="w-5 h-5" />, name:"Ads & Performance Advertising" },
];
const softwareServices = [
  { icon:<Globe className="w-5 h-5" />, name:"Web Development" },
  { icon:<ShoppingCart className="w-5 h-5" />, name:"E-commerce" },
  { icon:<Layout className="w-5 h-5" />, name:"Mobile Application" },
  { icon:<Palette className="w-5 h-5" />, name:"UI / UX Design" },
];

function ServiceCategory({ num, icon, title, services, delay }) {
  return (
    <div className={`service-cat-el reveal-el ${delay}`}>
      <div className="cat-num-el">{num}</div>
      <div style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"1.2rem" }}>
        <div className="cat-icon-el" style={{ color:colors.mint }}>{icon}</div>
        <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"1.2rem", fontWeight:600, color:colors.cream }}>{title}</div>
      </div>
      <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:0 }}>
        {services.map(s => (
          <li key={s.name} className="service-item-el">
            <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}>
              <span style={{ color:colors.gold }}>{s.icon}</span>
              <span className="svc-name">{s.name}</span>
            </div>
            <span className="svc-arrow">→</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServicesSection() {
  return (
    <div style={{ position:"relative", zIndex:10, marginTop:"-60px" }} className="md:mt-[-60px] mt-12">
      <section
        id="services"
        className="section-pad"
        style={{
          width:"90%",
          margin:"0 auto",
          padding:"7rem 4rem",
          background:colors.dark,
          overflow:"hidden",
          borderRadius:"32px 32px 32px 32px",
          boxShadow:"0 25px 60px rgba(0,0,0,0.4)",
          position:"sticky",
          top:0,
        }}
      >
        <div className="services-header-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"end", marginBottom:"5rem" }}>
          <div className="reveal-left-el">
            <div className="section-tag-el section-tag-mint">Our Services</div>
            <h2 style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"clamp(2.4rem,4.5vw,3.8rem)", fontWeight:300, lineHeight:1.1, color:colors.cream }}>
              Built to<br />
              <strong style={{ fontWeight:700, color:colors.mint }}>move</strong> your<br />
              business <em style={{ fontStyle:"italic", color:colors.gold }}>forward.</em>
            </h2>
          </div>
          <p className="reveal-right-el delay-2" style={{ fontSize:"1.375rem", lineHeight:1.8, color:"rgba(248,250,249,0.55)", alignSelf:"end" }}>
            From brand identity to full-stack software — every service we offer is designed to connect strategy with execution. We don't just deliver work. We deliver measurable growth.
          </p>
        </div>
        <div className="services-grid-el" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.8rem" }}>
          <ServiceCategory num="01" icon={<Megaphone className="w-6 h-6" />} title="Digital Marketing" services={marketingServices} delay="delay-1" />
          <ServiceCategory num="02" icon={<Laptop className="w-6 h-6" />} title="Software" services={softwareServices} delay="delay-3" />
        </div>
      </section>
    </div>
  );
}

// ── Why Us Section ──
const reasons = [
  { num:"1", title:"Strategy Before Everything", text:"Every campaign, every post, every decision is connected to a clear growth plan built specifically for your business." },
  { num:"2", title:"Results You Can Measure", text:"We are allergic to vanity metrics. We track what moves your business — leads, conversions, and real ROI." },
  { num:"3", title:"Egypt & GCC, One Partner", text:"We are fluent in both markets. Whether scaling locally or expanding across the Gulf, we know the audiences, dynamics, and opportunities." },
  { num:"4", title:"Full Stack, One Team", text:"Strategy, branding, software, content, ads, and media — all under one roof, all aligned to one goal. No handoffs. No gaps." },
];

function WhySection() {
  return (
    <section id="why" className="section-pad" style={{ padding:"7rem 4rem", background:colors.cream }}>
      <div className="why-layout-el" style={{ display:"grid", gridTemplateColumns:"1fr 1.5fr", gap:"6rem", alignItems:"start" }}>
        <div className="why-sticky-el reveal-left-el" style={{ position:"sticky", top:"8rem" }}>
          <div className="section-tag-el">WHY GROWTH STATION?</div>
          <h2 style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"clamp(2.5rem,4.5vw,3.8rem)", fontWeight:300, lineHeight:1.1, color:colors.dark }}>
            Most agencies deliver <em style={{ fontStyle:"italic", color:colors.gold }}>work...</em><br />
            <strong style={{ fontWeight:700, color:colors.teal }}>We deliver growth.</strong>
          </h2>
          <p style={{ fontSize:"1.425rem", lineHeight:1.8, color:"rgba(22,39,39,0.6)", marginTop:"1.5rem", marginBottom:"2.5rem" }}>
            There is no shortage of agencies that post, design, and execute. What is rare is a partner who starts with your business goals, builds a strategy around them, and takes full ownership of the results.
          </p>
          <div style={{ display:"inline-block", background:colors.goldSoft, borderLeft:`3px solid ${colors.gold}`, padding:"1rem 1.4rem", fontSize:"0.9rem", fontStyle:"italic", color:colors.dark, lineHeight:1.6, borderRadius:12 }}>
            That is exactly what Growth Station is built to do.
          </div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
          {reasons.map((r, i) => (
            <div key={r.num} className={`reason-card-el reveal-el delay-${i + 1}`}>
              <div className="reason-num-el">{r.num}</div>
              <div>
                <div className="reason-title-el">{r.title}</div>
                <p style={{ fontSize:"0.92rem", lineHeight:1.75, color:"rgba(22,39,39,0.6)" }}>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Section ──
function CTASection() {
  return (
    <section className="cta-pad" style={{ background:colors.teal, position:"relative", overflow:"hidden", textAlign:"center", padding:"8rem 4rem" }}>
      <div style={{ position:"absolute", fontFamily:"'DM Sans', sans-serif", fontSize:"18vw", fontWeight:700, color:"rgba(255,255,255,0.03)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", whiteSpace:"nowrap", pointerEvents:"none", letterSpacing:"-0.02em", userSelect:"none" }}>
        GROWTH
      </div>
      <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"1.09rem", letterSpacing:"0.2em", textTransform:"uppercase", color:colors.mint, marginBottom:"1.5rem", display:"flex", alignItems:"center", justifyContent:"center", gap:"0.8rem" }}>
        <span style={{ display:"inline-block", width:40, height:1, background:colors.mint, opacity:0.4 }} />
        TEAM · STRATEGY · GROWTH
        <span style={{ display:"inline-block", width:40, height:1, background:colors.mint, opacity:0.4 }} />
      </div>
      <h2 className="reveal-el" style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"clamp(2.8rem,5vw,5rem)", fontWeight:300, color:colors.cream, lineHeight:1.1, marginBottom:"1.2rem" }}>
        Ready to build something<br /><em style={{ fontStyle:"italic", color:colors.gold }}>remarkable?</em>
      </h2>
      <p className="reveal-el delay-2" style={{ fontSize:"1rem", color:"rgba(248,250,249,0.55)", lineHeight:1.7, maxWidth:480, margin:"0 auto 2.5rem" }}>
        Let's create something premium, scalable & unforgettable.<br />No fluff — just clarity and results.
      </p>
      <Link to="/contact" className="btn-cta-el reveal-el delay-3" onClick={() => window.scrollTo(0, 0)}>
        <span>Book Appointment</span>
        <span className="cta-arrow">→</span>
      </Link>
    </section>
  );
}

// ── Main App ──
export function Services() {
  useReveal();

  return (
    <div className="services-page">
      <Hero />
      <ServicesSection />
      <WhySection />
      <CTASection />
    </div>
  );
}
