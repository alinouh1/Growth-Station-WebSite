import { useState } from "react"
import { useLanguage } from "../../context/LanguageContext"
import { useReveal } from "../../hooks/useReveal"
import { submitBrief } from "../../services/api"

export function Brief() {
  const { dict, isRtl } = useLanguage()
  const b = dict.brief
  const { ref: heroRef, visible: heroVisible } = useReveal()
  const { ref: formRef, visible: formVisible } = useReveal()
  
  const [selectedServices, setSelectedServices] = useState([])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    brand: "",
    email: "",
    countryCode: "+20", // Default to Egypt
    phone: "",
    businessOverview: "",
    productsServices: "",
    targetAudience: "",
    objectives: "",
    additionalInfo: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [validationErrors, setValidationErrors] = useState({})

  const services = [
    { id: "strategy", label: "Strategy", labelAr: "اﻻستراتيجية والتخطيط" },
    { id: "branding", label: "Branding", labelAr: "بناء الهوية التجارية (Branding)" },
    { id: "content", label: "Content Creation", labelAr: "صناعة المحتوى" },
    { id: "social", label: "Social Media Management", labelAr: "إدارة منصات التواصل اﻻجتماعي" },
    { id: "media", label: "Media Production", labelAr: "اﻹنتاج اﻹعﻼمي والتصوير" },
    { id: "ads", label: "Ads & Performance Advertising", labelAr: "اﻹعﻼنات والتسويق الرقمي (Performance Marketing)" },
    { id: "web", label: "Web Development", labelAr: "تطوير المواقع اﻹلكترونية" },
    { id: "ecommerce", label: "E-commerce", labelAr: "المتاجر اﻹلكترونية" },
    { id: "mobile", label: "Mobile Application", labelAr: "تطبيقات الهاتف المحمول" },
    { id: "uiux", label: "UI / UX Design", labelAr: "تصميم تجربة وواجهة المستخدم (UI/UX)" },
    { id: "all", label: "All Services", labelAr: "جميع الخدمات" },
  ]

  const countryCodes = [
    { code: "+20", label: "Egypt (+20)", labelAr: "مصر (+20)" },
    { code: "+966", label: "Saudi Arabia (+966)", labelAr: "السعودية (+966)" },
    { code: "+971", label: "UAE (+971)", labelAr: "الإمارات (+971)" },
    { code: "+965", label: "Kuwait (+965)", labelAr: "الكويت (+965)" },
    { code: "+974", label: "Qatar (+974)", labelAr: "قطر (+974)" },
    { code: "+968", label: "Oman (+968)", labelAr: "عمان (+968)" },
    { code: "+962", label: "Jordan (+962)", labelAr: "الأردن (+962)" },
    { code: "+961", label: "Lebanon (+961)", labelAr: "لبنان (+961)" },
    { code: "+964", label: "Iraq (+964)", labelAr: "العراق (+964)" },
    { code: "+212", label: "Morocco (+212)", labelAr: "المغرب (+212)" },
    { code: "+213", label: "Algeria (+213)", labelAr: "الجزائر (+213)" },
    { code: "+216", label: "Tunisia (+216)", labelAr: "تونس (+216)" },
    { code: "+218", label: "Libya (+218)", labelAr: "ليبيا (+218)" },
    { code: "+1", label: "USA/Canada (+1)", labelAr: "أمريكا/كندا (+1)" },
    { code: "+44", label: "UK (+44)", labelAr: "بريطانيا (+44)" },
    { code: "+33", label: "France (+33)", labelAr: "فرنسا (+33)" },
    { code: "+49", label: "Germany (+49)", labelAr: "ألمانيا (+49)" },
    { code: "+90", label: "Turkey (+90)", labelAr: "تركيا (+90)" },
    { code: "+91", label: "India (+91)", labelAr: "الهند (+91)" },
    { code: "+86", label: "China (+86)", labelAr: "الصين (+86)" },
  ]

  const serviceEnumMap = {
    strategy: "STRATEGY",
    branding: "BRANDING",
    content: "CONTENT_CREATION",
    social: "SOCIAL_MEDIA_MANAGEMENT",
    media: "MEDIA_PRODUCTION",
    ads: "ADS_ADVERTISING",
    web: "WEB_DEVELOPMENT",
    ecommerce: "E_COMMERCE",
    mobile: "MOBILE_APPLICATION",
    uiux: "UI_UX_DESIGN",
    all: "ALL",
  }

  const toggleService = (serviceId) => {
    if (serviceId === "all") {
      if (selectedServices.includes("all")) {
        setSelectedServices([])
      } else {
        setSelectedServices(["all"])
      }
    } else {
      if (selectedServices.includes("all")) {
        setSelectedServices([serviceId])
      } else if (selectedServices.includes(serviceId)) {
        setSelectedServices(selectedServices.filter(id => id !== serviceId))
      } else {
        setSelectedServices([...selectedServices, serviceId])
      }
    }
  }

  const validateForm = () => {
    const errors = {}

    // Validate First Name
    if (!formData.firstName.trim()) {
      errors.firstName = isRtl ? "الاسم الأول مطلوب" : "First name is required"
    } else if (formData.firstName.length < 2) {
      errors.firstName = isRtl ? "الاسم الأول يجب أن يكون حرفين على الأقل" : "First name must be at least 2 characters"
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      errors.lastName = isRtl ? "اسم العائلة مطلوب" : "Last name is required"
    } else if (formData.lastName.length < 2) {
      errors.lastName = isRtl ? "اسم العائلة يجب أن يكون حرفين على الأقل" : "Last name must be at least 2 characters"
    }

    // Validate Brand
    if (!formData.brand.trim()) {
      errors.brand = isRtl ? "اسم البراند مطلوب" : "Brand name is required"
    } else if (formData.brand.length < 2) {
      errors.brand = isRtl ? "اسم البراند يجب أن يكون حرفين على الأقل" : "Brand name must be at least 2 characters"
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = isRtl ? "البريد الإلكتروني مطلوب" : "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      errors.email = isRtl ? "البريد الإلكتروني غير صالح" : "Invalid email format"
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      errors.phone = isRtl ? "رقم الهاتف مطلوب" : "Phone number is required"
    } else if (formData.phone.length < 8) {
      errors.phone = isRtl ? "رقم الهاتف يجب أن يكون 8 أرقام على الأقل" : "Phone number must be at least 8 digits"
    }

    // Validate Business Overview
    if (!formData.businessOverview.trim()) {
      errors.businessOverview = isRtl ? "نظرة عامة على النشاط التجاري مطلوبة" : "Business overview is required"
    } else if (formData.businessOverview.length < 10) {
      errors.businessOverview = isRtl ? "نظرة عامة على النشاط التجاري يجب أن تكون 10 أحرف على الأقل" : "Business overview must be at least 10 characters"
    }

    // Validate Products/Services
    if (!formData.productsServices.trim()) {
      errors.productsServices = isRtl ? "المنتجات أو الخدمات مطلوبة" : "Products or services are required"
    }

    // Validate Target Audience
    if (!formData.targetAudience.trim()) {
      errors.targetAudience = isRtl ? "الجمهور المستهدف مطلوب" : "Target audience is required"
    }

    // Validate Objectives
    if (!formData.objectives.trim()) {
      errors.objectives = isRtl ? "الأهداف مطلوبة" : "Objectives are required"
    } else if (formData.objectives.length < 10) {
      errors.objectives = isRtl ? "الأهداف يجب أن تكون 10 أحرف على الأقل" : "Objectives must be at least 10 characters"
    }

    // Validate Services Selection
    if (selectedServices.length === 0) {
      errors.services = isRtl ? "يجب اختيار خدمة واحدة على الأقل" : "Please select at least one service"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleBlur = (fieldName) => {
    const errors = { ...validationErrors }
    
    switch(fieldName) {
      case 'firstName':
        if (!formData.firstName.trim()) {
          errors.firstName = isRtl ? "الاسم الأول مطلوب" : "First name is required"
        } else if (formData.firstName.length < 2) {
          errors.firstName = isRtl ? "الاسم الأول يجب أن يكون حرفين على الأقل" : "First name must be at least 2 characters"
        } else {
          delete errors.firstName
        }
        break
      case 'lastName':
        if (!formData.lastName.trim()) {
          errors.lastName = isRtl ? "اسم العائلة مطلوب" : "Last name is required"
        } else if (formData.lastName.length < 2) {
          errors.lastName = isRtl ? "اسم العائلة يجب أن يكون حرفين على الأقل" : "Last name must be at least 2 characters"
        } else {
          delete errors.lastName
        }
        break
      case 'brand':
        if (!formData.brand.trim()) {
          errors.brand = isRtl ? "اسم البراند مطلوب" : "Brand name is required"
        } else if (formData.brand.length < 2) {
          errors.brand = isRtl ? "اسم البراند يجب أن يكون حرفين على الأقل" : "Brand name must be at least 2 characters"
        } else {
          delete errors.brand
        }
        break
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email.trim()) {
          errors.email = isRtl ? "البريد الإلكتروني مطلوب" : "Email is required"
        } else if (!emailRegex.test(formData.email)) {
          errors.email = isRtl ? "البريد الإلكتروني غير صالح" : "Invalid email format"
        } else {
          delete errors.email
        }
        break
      case 'phone':
        if (!formData.phone.trim()) {
          errors.phone = isRtl ? "رقم الهاتف مطلوب" : "Phone number is required"
        } else if (formData.phone.length < 8) {
          errors.phone = isRtl ? "رقم الهاتف يجب أن يكون 8 أرقام على الأقل" : "Phone number must be at least 8 digits"
        } else {
          delete errors.phone
        }
        break
      case 'businessOverview':
        if (!formData.businessOverview.trim()) {
          errors.businessOverview = isRtl ? "نظرة عامة على النشاط التجاري مطلوبة" : "Business overview is required"
        } else if (formData.businessOverview.length < 10) {
          errors.businessOverview = isRtl ? "نظرة عامة على النشاط التجاري يجب أن تكون 10 أحرف على الأقل" : "Business overview must be at least 10 characters"
        } else {
          delete errors.businessOverview
        }
        break
      case 'productsServices':
        if (!formData.productsServices.trim()) {
          errors.productsServices = isRtl ? "المنتجات أو الخدمات مطلوبة" : "Products or services are required"
        } else {
          delete errors.productsServices
        }
        break
      case 'targetAudience':
        if (!formData.targetAudience.trim()) {
          errors.targetAudience = isRtl ? "الجمهور المستهدف مطلوب" : "Target audience is required"
        } else {
          delete errors.targetAudience
        }
        break
      case 'objectives':
        if (!formData.objectives.trim()) {
          errors.objectives = isRtl ? "الأهداف مطلوبة" : "Objectives are required"
        } else if (formData.objectives.length < 10) {
          errors.objectives = isRtl ? "الأهداف يجب أن تكون 10 أحرف على الأقل" : "Objectives must be at least 10 characters"
        } else {
          delete errors.objectives
        }
        break
    }
    
    setValidationErrors(errors)
  }

  // Helper function to convert Arabic-Indic numerals to Western Arabic numerals (0-9)
  const normalizeArabicNumerals = (str) => {
    if (!str) return str
    const normalized = str
      .replace(/[\u0660-\u0669]/g, (d) => d.charCodeAt(0) - 0x0660) // Arabic-Indic to Western
      .replace(/[\u06F0-\u06F9]/g, (d) => d.charCodeAt(0) - 0x06F0) // Extended Arabic-Indic to Western
    if (normalized !== str) {
      console.log(`Normalized: "${str}" -> "${normalized}"`)
    }
    return normalized
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form submit triggered!")

    // Validate form before submission
    if (!validateForm()) {
      console.log("Form validation failed")
      return
    }

    setLoading(true)
    setError(null)
    setValidationErrors({})

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim()
      const payload = {
        department: "MODERATOR",
        sender: {
          fullName: normalizeArabicNumerals(fullName),
          brand: normalizeArabicNumerals(formData.brand),
          email: normalizeArabicNumerals(formData.email),
          phone: normalizeArabicNumerals(formData.countryCode + formData.phone),
        },
        mainInfo: {
          bussinessInfo: normalizeArabicNumerals(formData.businessOverview),
          productsOrServices: normalizeArabicNumerals(formData.productsServices),
          targetAudience: normalizeArabicNumerals(formData.targetAudience),
          goalsAndResults: normalizeArabicNumerals(formData.objectives),
          service: selectedServices.map(id => serviceEnumMap[id]).filter(Boolean),
          notes: normalizeArabicNumerals(formData.additionalInfo),
        },
      }

      console.log("Submitting brief with payload:", payload)
      const result = await submitBrief(payload)
      console.log("Brief submitted successfully:", result)
      setSubmitted(true)
    } catch (err) {
      console.error("Brief submission error:", err)
      let errorMsg = "Something went wrong. Please try again."
      if (err.message) {
        errorMsg = err.message
      } else if (err.response?.data?.message) {
        errorMsg = err.response.data.message
      }
      setError(errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gs-cream" dir={isRtl ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gs-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl hidden md:block animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl hidden md:block animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gs-gold/10 to-amber-600/10 rounded-full blur-3xl hidden md:block animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        {/* Animated decorative elements - hidden on mobile */}
        <div className="absolute top-20 right-20 w-20 h-20 border-2 border-gs-gold/30 rounded-full hidden md:block animate-spin" style={{ animationDuration: "20s" }} />
        <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-gs-teal/30 rounded-full hidden md:block animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
        <div className="absolute top-40 left-1/3 w-12 h-12 border-2 border-gs-gold/20 rotate-45 hidden md:block animate-pulse" />
        <div className="absolute bottom-40 right-1/3 w-14 h-14 border-2 border-gs-teal/20 rounded-lg hidden md:block animate-bounce" style={{ animationDuration: "3s" }} />
        
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <div
            className={`reveal ${heroVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
          >
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-30" />
              <span className="relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gs-gold shadow-lg shadow-gs-gold/20">
                {b.hero.badge}
              </span>
            </div>
            <h1
              className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-4 ${isRtl ? "font-arabic" : ""}`}
            >
              {b.hero.title}
            </h1>
            <h2
              className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gs-gold mb-6 ${isRtl ? "font-arabic" : ""}`}
            >
              {b.hero.subtitle}
            </h2>
            <p className="mt-8 text-xl text-gs-mint/90 max-w-3xl mx-auto">
              {b.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section
        ref={formRef}
        className="relative py-24 md:py-32 bg-gs-cream gs-mesh"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-3xl font-bold text-gs-dark mb-4">
                Brief submitted successfully!
              </h3>
              <p className="text-gs-dark/70 max-w-md mx-auto">
                Thank you for your interest. We'll review your brief and get back to you within 24 hours.
              </p>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Your Information */}
            <div
              className={`reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
            >
              <h3 className={`font-display text-2xl font-bold text-gs-dark mb-6 ${isRtl ? "font-arabic" : ""}`}>
                {b.yourInfo.title}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-gs-dark mb-2">
                    {isRtl ? "الاسم الأول" : "First Name"}
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full rounded-xl border-2 ${validationErrors.firstName ? 'border-red-500' : 'border-gs-gold/30'} bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                    placeholder={isRtl ? "الاسم الأول" : "First Name"}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    onBlur={() => handleBlur('firstName')}
                  />
                  {validationErrors.firstName && (
                    <p className="mt-1 text-xs text-red-600">{validationErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gs-dark mb-2">
                    {isRtl ? "اسم العائلة" : "Last Name"}
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full rounded-xl border-2 ${validationErrors.lastName ? 'border-red-500' : 'border-gs-gold/30'} bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                    placeholder={isRtl ? "اسم العائلة" : "Last Name"}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    onBlur={() => handleBlur('lastName')}
                  />
                  {validationErrors.lastName && (
                    <p className="mt-1 text-xs text-red-600">{validationErrors.lastName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gs-dark mb-2">
                    {b.yourInfo.brand}
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full rounded-xl border-2 ${validationErrors.brand ? 'border-red-500' : 'border-gs-gold/30'} bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                    placeholder={b.yourInfo.brand}
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    onBlur={() => handleBlur('brand')}
                  />
                  {validationErrors.brand && (
                    <p className="mt-1 text-xs text-red-600">{validationErrors.brand}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gs-dark mb-2">
                    {b.yourInfo.email}
                  </label>
                  <input
                    type="email"
                    required
                    className={`w-full rounded-xl border-2 ${validationErrors.email ? 'border-red-500' : 'border-gs-gold/30'} bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                    placeholder={b.yourInfo.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onBlur={() => handleBlur('email')}
                  />
                  {validationErrors.email && (
                    <p className="mt-1 text-xs text-red-600">{validationErrors.email}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gs-dark mb-2">
                    {b.yourInfo.phone}
                  </label>
                  <div className="flex gap-2">
                    <select
                      className={`w-32 rounded-xl border-2 border-gs-gold/30 bg-white/70 px-3 py-3 text-gs-dark focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {isRtl ? country.labelAr : country.label}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      className={`flex-1 rounded-xl border-2 ${validationErrors.phone ? 'border-red-500' : 'border-gs-gold/30'} bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                      placeholder={isRtl ? "رقم الهاتف" : "Phone number"}
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '')
                        setFormData({ ...formData, phone: value })
                      }}
                      onBlur={() => handleBlur('phone')}
                    />
                  </div>
                  {validationErrors.phone && (
                    <p className="mt-1 text-xs text-red-600">{validationErrors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Business Overview */}
            <div
              className={`reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <label className="block text-sm font-semibold text-gs-dark mb-2">
                {isRtl ? "احكيلنا بإختصار عن نشاطك التجاري أو البراند الخاص بك." : "Please provide a brief overview of your business or brand?"}
              </label>
              <textarea
                rows={3}
                className={`w-full rounded-xl border-2 ${validationErrors.businessOverview ? 'border-red-500' : 'border-gs-gold/30'} bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                placeholder={isRtl ? "احكيلنا بإختصار عن نشاطك التجاري أو البراند الخاص بك." : "Please provide a brief overview of your business or brand?"}
                value={formData.businessOverview}
                onChange={(e) => setFormData({ ...formData, businessOverview: e.target.value })}
                onBlur={() => handleBlur('businessOverview')}
              />
              {validationErrors.businessOverview && (
                <p className="mt-1 text-xs text-red-600">{validationErrors.businessOverview}</p>
              )}
            </div>

            {/* Products/Services */}
            <div
              className={`reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
              style={{ transitionDelay: "0.15s" }}
            >
              <label className="block text-sm font-semibold text-gs-dark mb-2">
                {isRtl ? "ما هي المنتجات أو الخدمات الرئيسية التي تقدمها؟" : "What are your primary products or services?"}
              </label>
              <textarea
                rows={2}
                className={`w-full rounded-xl border-2 ${validationErrors.productsServices ? 'border-red-500' : 'border-gs-gold/30'} bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                placeholder={isRtl ? "ما هي المنتجات أو الخدمات الرئيسية التي تقدمها؟" : "What are your primary products or services?"}
                value={formData.productsServices}
                onChange={(e) => setFormData({ ...formData, productsServices: e.target.value })}
                onBlur={() => handleBlur('productsServices')}
              />
              {validationErrors.productsServices && (
                <p className="mt-1 text-xs text-red-600">{validationErrors.productsServices}</p>
              )}
            </div>

            {/* Target Audience */}
            <div
              className={`reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <label className="block text-sm font-semibold text-gs-dark mb-2">
                {isRtl ? "من هو جمهورك المستهدف؟" : "Who is your target audience?"}
              </label>
              <textarea
                rows={2}
                className={`w-full rounded-xl border-2 ${validationErrors.targetAudience ? 'border-red-500' : 'border-gs-gold/30'} bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                placeholder={isRtl ? "من هو جمهورك المستهدف؟" : "Who is your target audience?"}
                value={formData.targetAudience}
                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                onBlur={() => handleBlur('targetAudience')}
              />
              {validationErrors.targetAudience && (
                <p className="mt-1 text-xs text-red-600">{validationErrors.targetAudience}</p>
              )}
            </div>

            {/* Objectives */}
            <div
              className={`reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
              style={{ transitionDelay: "0.25s" }}
            >
              <label className="block text-sm font-semibold text-gs-dark mb-2">
                {isRtl ? "ما هي أهدافك الرئيسية من هذا المشروع؟ وما النتائج التي تتطلع إﱃ تحقيقها؟" : "What are your main objectives for this project and what results would you like to achieve?"}
              </label>
              <textarea
                rows={3}
                className={`w-full rounded-xl border-2 ${validationErrors.objectives ? 'border-red-500' : 'border-gs-gold/30'} bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                placeholder={isRtl ? "ما هي أهدافك الرئيسية من هذا المشروع؟ وما النتائج التي تتطلع إﱃ تحقيقها؟" : "What are your main objectives for this project and what results would you like to achieve?"}
                value={formData.objectives}
                onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                onBlur={() => handleBlur('objectives')}
              />
              {validationErrors.objectives && (
                <p className="mt-1 text-xs text-red-600">{validationErrors.objectives}</p>
              )}
            </div>

            {/* Services Selection */}
            <div
              className={`reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <label className="block text-sm font-semibold text-gs-dark mb-4">
                {isRtl ? "ما الخدمات التي ترغب في الحصول عليها؟" : "Which service(s) are you interested in?"}
              </label>
              {validationErrors.services && (
                <p className="mb-3 text-xs text-red-600">{validationErrors.services}</p>
              )}
              <div className="grid gap-3 md:grid-cols-2">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedServices.includes(service.id)
                        ? "border-gs-gold bg-gradient-to-br from-gs-gold/20 to-amber-600/20"
                        : "border-gs-gold/30 bg-white/70 hover:border-gs-gold/60"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => toggleService(service.id)}
                      className="w-5 h-5 mt-0.5 rounded border-2 border-gs-gold/50 text-gs-gold focus:ring-gs-gold focus:ring-offset-0 flex-shrink-0"
                    />
                    <span className={`text-sm leading-relaxed ${isRtl ? "font-arabic" : ""}`}>
                      {isRtl ? service.labelAr : service.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div
              className={`reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
              style={{ transitionDelay: "0.35s" }}
            >
              <label className="block text-sm font-semibold text-gs-dark mb-2">
                {isRtl ? "هل هناك أي معلومات إضافية أو مﻼحظات أو متطلبات خاصة تود مشاركتها معنا بخصوص المشروع؟" : "Is there anything else you would like us to know about your project, Notes, or requirements?"}
              </label>
              <textarea
                rows={4}
                className={`w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`}
                placeholder={isRtl ? "هل هناك أي معلومات إضافية أو مﻼحظات أو متطلبات خاصة تود مشاركتها معنا بخصوص المشروع؟" : "Is there anything else you would like us to know about your project, Notes, or requirements?"}
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              />
            </div>

            {/* Loading Indicator */}
            {loading && (
              <div className="reveal p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-center">
                Sending your brief...
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="reveal p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
                <strong>Error:</strong> {error}
              </div>
            )}

            {/* Submit Button */}
            <div
              className={`reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-full bg-gradient-to-r from-gs-gold to-amber-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-gs-gold/60 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 ${isRtl ? "font-arabic" : ""}`}
              >
                {loading ? "Sending..." : b.submitButton}
              </button>
            </div>
          </form>
          )}
        </div>
      </section>
    </div>
  )
}