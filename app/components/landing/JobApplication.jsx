import { useState } from "react"
import { Link } from "react-router-dom"
import { useLanguage } from "../../context/LanguageContext"
import { useReveal } from "../../hooks/useReveal"

export function JobApplication() {
  const { dict, isRtl } = useLanguage()
  const c = dict.careers.application
  const { ref: formRef, visible: formVisible } = useReveal()
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    cv: null,
    whyGrowthStation: "",
  })

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cv: e.target.files[0] })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gs-cream">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gs-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <div className={isRtl ? "font-arabic" : ""}>
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-30" />
              <span className="relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gs-gold shadow-lg shadow-gs-gold/20">
                {c.badge}
              </span>
            </div>
            <h1
              className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 ${isRtl ? "font-arabic" : ""}`}
            >
              {c.title}
            </h1>
            <p className="mt-8 text-xl text-gs-mint/90 max-w-3xl mx-auto">
              {c.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section
        ref={formRef}
        className="relative py-24 md:py-32 bg-gs-cream gs-mesh"
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div
            className={`reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-white/80 to-gs-cream/80 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${formVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className={`block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`}
                >
                  {c.fullName} *
                </label>
                <input
                  type="text"
                  required
                  className={`w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                  placeholder={c.fullName}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`}
                >
                  {c.email} *
                </label>
                <input
                  type="email"
                  required
                  className={`w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                  placeholder={c.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`}
                >
                  {c.phone}
                </label>
                <input
                  type="tel"
                  className={`w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                  placeholder={c.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`}
                >
                  {c.portfolio}
                </label>
                <input
                  type="url"
                  className={`w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                  placeholder={c.portfolio}
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`}
                >
                  {c.cv} *
                </label>
                <div
                  className={`w-full rounded-xl border-2 border-dashed border-gs-gold/30 bg-white/70 px-4 py-8 text-center transition-all hover:border-gs-gold/60 ${isRtl ? "font-arabic" : ""}`}
                >
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="cursor-pointer"
                  >
                    {formData.cv ? (
                      <p className="text-gs-dark font-medium">{formData.cv.name}</p>
                    ) : (
                      <div>
                        <p className="text-gs-dark font-medium mb-2">{c.dropCV}</p>
                        <p className="text-gs-dark/60 text-sm">{c.fileTypes}</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`}
                >
                  {c.whyGrowthStation} *
                </label>
                <textarea
                  required
                  rows={5}
                  className={`w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                  placeholder={c.whyGrowthStation}
                  value={formData.whyGrowthStation}
                  onChange={(e) => setFormData({ ...formData, whyGrowthStation: e.target.value })}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className={`flex-1 rounded-full bg-gradient-to-r from-gs-gold to-amber-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-gs-gold/60 hover:scale-105 ${isRtl ? "font-arabic" : ""}`}
                >
                  {c.submitButton}
                </button>
                <Link
                  to="/careers"
                  className={`flex-1 rounded-full border-2 border-gs-gold/40 bg-white/70 px-8 py-4 text-sm font-semibold text-gs-dark text-center transition-all duration-300 hover:border-gs-gold/60 ${isRtl ? "font-arabic" : ""}`}
                >
                  {c.cancelButton}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
