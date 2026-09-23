import { useState, useEffect } from "react"
import { useLanguage } from "../../context/LanguageContext"
import { useReveal } from "../../hooks/useReveal"

const BASE_URL = "https://api.growthstationco.com";

const submitJobApplication = async (formData) => {
  const data = new FormData();
  data.append("fullName", formData.fullName);
  data.append("email", formData.email);
  data.append("position", formData.position || "Open Application");
  if (formData.cv) data.append("resume", formData.cv);
  if (formData.phone) data.append("phone", formData.phone);
  if (formData.portfolio) data.append("portfolio", formData.portfolio);
  if (formData.whyGrowthStation) data.append("message", formData.whyGrowthStation);
  const res = await fetch(`${BASE_URL}/application/`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: data,
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.message || "Failed");
  return json;
};

const getJobPostings = async () => {
  const res = await fetch(`${BASE_URL}/announcement`);
  const json = await res.json();
  const jobs = Array.isArray(json) ? json : json?.data || [];
  return jobs.filter((job) => job.publish === true);
};

export function Careers() {
  const { dict, isRtl } = useLanguage()
  const c = dict.careers
  const { ref: heroRef, visible: heroVisible } = useReveal()
  const { ref: positionsRef, visible: positionsVisible } = useReveal()

  const [selectedFilter, setSelectedFilter] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [jobs, setJobs] = useState([])
  const [loadingJobs, setLoadingJobs] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    cv: null,
    whyGrowthStation: "",
    position: "",
  })

  // fetch job postings on mount
  useEffect(() => {
    getJobPostings()
      .then((data) => setJobs(data))
      .catch(() => setJobs([]))
      .finally(() => setLoadingJobs(false))
  }, [])

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cv: e.target.files[0] })
    }
  }

  const openModal = (position = null) => {
    setSelectedPosition(position)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      portfolio: "",
      cv: null,
      whyGrowthStation: "",
      position: position?.title || "",
    })
    setSubmitSuccess(false)
    setSubmitError("")
    setIsModalOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError("")
    try {
      await submitJobApplication(formData)
      setSubmitSuccess(true)
      setTimeout(() => setIsModalOpen(false), 2000)
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  // derive unique departments for filter buttons
  const departments = [...new Set(jobs.map((j) => j.department).filter(Boolean))]

  const filters = [
    { id: "all", label: c.filters.all },
    ...departments.map((d) => ({ id: d.toLowerCase(), label: d })),
  ]

  const filteredJobs =
    selectedFilter === "all"
      ? jobs
      : jobs.filter((j) => j.department?.toLowerCase() === selectedFilter)

  return (
    <div className="min-h-screen bg-gs-cream">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gs-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl hidden md:block animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl hidden md:block animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <div className={`reveal ${heroVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}>
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-30" />
              <span className="relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gs-gold shadow-lg shadow-gs-gold/20">
                {c.hero.badge}
              </span>
            </div>
            <h1
              className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 ${isRtl ? "font-arabic" : ""}`}
            >
              {c.hero.title}
            </h1>
            <p className="mt-8 text-xl text-gs-mint/90 max-w-3xl mx-auto">
              {c.hero.subtitle}
            </p>
            <p className="mt-4 text-lg text-gs-mint/70 max-w-3xl mx-auto">
              {c.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        ref={positionsRef}
        className="relative py-24 md:py-32 bg-gs-cream gs-mesh"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`reveal mb-12 ${positionsVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
          >
            <h2
              className={`font-display text-3xl md:text-4xl font-bold text-gs-dark mb-8 ${isRtl ? "font-arabic" : ""}`}
            >
              {c.positions.title}
            </h2>

            {/* Filters — only show if there are real departments */}
            {departments.length > 0 && (
              <div className={`flex flex-wrap gap-3 ${isRtl ? "justify-end" : ""}`}>
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      selectedFilter === filter.id
                        ? "bg-gradient-to-r from-gs-gold to-amber-600 text-white shadow-lg shadow-gs-gold/30"
                        : "bg-white/70 backdrop-blur-md border-2 border-gs-gold/30 text-gs-dark hover:border-gs-gold/60"
                    } ${isRtl ? "font-arabic" : ""}`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {loadingJobs ? (
              <div className="text-center py-16">
                <div className="inline-block w-8 h-8 border-4 border-gs-gold/40 border-t-gs-gold rounded-full animate-spin" />
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gs-dark/60 text-lg">{c.positions.noPositions}</p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job._id}
                  className="rounded-2xl border-2 border-gs-gold/20 bg-white/80 backdrop-blur-md p-6 shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:border-gs-gold/50 transition-all"
                >
                  <div>
                    <h3 className={`font-display text-xl font-bold text-gs-dark mb-1 ${isRtl ? "font-arabic" : ""}`}>
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {job.department && (
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gs-gold/10 text-gs-gold border border-gs-gold/30">
                          {job.department}
                        </span>
                      )}
                      {job.type && (
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gs-teal/10 text-gs-teal border border-gs-teal/30">
                          {job.type}
                        </span>
                      )}
                    </div>
                    {job.description && (
                      <p className="text-gs-dark/60 text-sm mt-2 max-w-xl line-clamp-2">
                        {job.description}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => openModal(job)}
                    className={`shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gs-gold to-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gs-gold/30 transition-all hover:-translate-y-0.5 hover:scale-105 ${isRtl ? "font-arabic" : ""}`}
                  >
                    {c.openApplication.button}
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Open Application CTA */}
          <div
            className={`reveal mt-16 rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-white/80 to-gs-cream/80 backdrop-blur-md p-10 shadow-xl transition-all duration-800 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${positionsVisible ? "visible" : ""}`}
            style={{ transition: "0.4s" }}
          >
            <div className={`text-center ${isRtl ? "font-arabic" : ""}`}>
              <h3
                className={`font-display text-2xl font-bold text-gs-dark mb-4 ${isRtl ? "font-arabic" : ""}`}
              >
                {c.openApplication.title}
              </h3>
              <p className="text-gs-dark/70 mb-8 max-w-2xl mx-auto">
                {c.openApplication.description}
              </p>
              <button
                onClick={() => openModal(null)}
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gs-gold to-amber-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-800 hover:-translate-y-1 hover:shadow-gs-gold/60 hover:scale-105 ${isRtl ? "font-arabic" : ""}`}
              >
                {c.openApplication.button}
                <span className="text-lg">✦</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div
            className={`relative w-full max-w-2xl rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 backdrop-blur-md p-8 shadow-2xl max-h-[90vh] overflow-y-auto ${isRtl ? "font-arabic" : ""}`}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gs-mint/60 hover:text-white transition-colors"
            >
              ✕
            </button>

            <div className="mb-6">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-30" />
                <span className="relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-gs-gold shadow-lg shadow-gs-gold/20">
                  {c.application.badge}
                </span>
              </div>
            </div>

            <h2
              className={`font-display text-3xl font-bold text-white mb-2 ${isRtl ? "font-arabic" : ""}`}
            >
              {selectedPosition ? selectedPosition.title : c.application.title}
            </h2>
            <p className="text-gs-mint/80 mb-8">{c.application.subtitle}</p>

            {/* Success state */}
            {submitSuccess ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-white text-lg font-semibold">
                  {c.application.successMessage || "Application submitted successfully!"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={`block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`}>
                    {c.application.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full rounded-xl border-2 border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-3 text-white placeholder-gs-mint/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                    placeholder={c.application.fullName}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`}>
                    {c.application.email} *
                  </label>
                  <input
                    type="email"
                    required
                    className={`w-full rounded-xl border-2 border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-3 text-white placeholder-gs-mint/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                    placeholder={c.application.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`}>
                    {c.application.phone}
                  </label>
                  <input
                    type="tel"
                    className={`w-full rounded-xl border-2 border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-3 text-white placeholder-gs-mint/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                    placeholder={c.application.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`}>
                    {c.application.portfolio}
                  </label>
                  <input
                    type="url"
                    className={`w-full rounded-xl border-2 border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-3 text-white placeholder-gs-mint/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                    placeholder={c.application.portfolio}
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`}>
                    {c.application.cv} *
                  </label>
                  <div
                    className={`w-full rounded-xl border-2 border-dashed border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-6 text-center transition-all hover:border-gs-gold/60 ${isRtl ? "font-arabic" : ""}`}
                  >
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="cv-upload-modal"
                    />
                    <label htmlFor="cv-upload-modal" className="cursor-pointer">
                      {formData.cv ? (
                        <p className="text-white font-medium">{formData.cv.name}</p>
                      ) : (
                        <div>
                          <p className="text-white font-medium mb-2">{c.application.dropCV}</p>
                          <p className="text-gs-mint/60 text-sm">{c.application.fileTypes}</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`}>
                    {c.application.whyGrowthStation} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className={`w-full rounded-xl border-2 border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-3 text-white placeholder-gs-mint/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                    placeholder={c.application.whyGrowthStation}
                    value={formData.whyGrowthStation}
                    onChange={(e) => setFormData({ ...formData, whyGrowthStation: e.target.value })}
                  />
                </div>

                {/* Error message */}
                {submitError && (
                  <p className="text-red-400 text-sm text-center">{submitError}</p>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`flex-1 rounded-full bg-gradient-to-r from-gs-gold to-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-gs-gold/60 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 ${isRtl ? "font-arabic" : ""}`}
                  >
                    {submitting ? "..." : `${c.application.submitButton} →`}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className={`flex-1 rounded-full border-2 border-gs-gold/40 bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white transition-all hover:border-gs-gold/60 ${isRtl ? "font-arabic" : ""}`}
                  >
                    {c.application.cancelButton}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}