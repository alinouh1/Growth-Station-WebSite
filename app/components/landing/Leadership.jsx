import { useReveal } from "../../hooks/useReveal"
import { useState, useEffect, useRef } from 'react'

const imageVersion = import.meta.env.VITE_TEAM_IMAGE_VERSION
const images = [
  `/images/abotaleb.jpg?v=${imageVersion}`,
  `/images/ranaw.jpg?v=${imageVersion}`,
  `/images/osamam.jpg?v=${imageVersion}`,
]

const members = [
  {
    name: "D/Shaban Abo Taleb",
    role: " Founder & CEO",
    badge: "CEO",
    bio: "Building brands, systems, and scalable growth experiences across Egypt and the GCC.",
  },
  {
    name: "Rana Torkey",
    role: "Digital Marketing Manager",
    badge: "Operations",
    bio: "Leading operations, communication, and execution with precision and consistency.",
  },
  {
    name: "Osama Mohamed",
    role: "Account Manager",
    badge: "Client Success",
    bio: "Managing client relationships and performance with a strong focus on measurable outcomes.",
  },
]

export function Leadership() {
  const { ref, visible } = useReveal()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [carouselInView, setCarouselInView] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const carouselRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const observer = new IntersectionObserver(
      ([entry]) => setCarouselInView(entry.isIntersecting),
      { threshold: 0.1 },
    )
    observer.observe(carousel)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden)
    updateVisibility()
    document.addEventListener('visibilitychange', updateVisibility)
    return () => document.removeEventListener('visibilitychange', updateVisibility)
  }, [])

  useEffect(() => {
    if (!carouselInView || !pageVisible || isDragging) return

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % members.length)
    }, 4000)

    return () => {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [carouselInView, isDragging, pageVisible])

  // Preload next image for smoother transitions
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length
    const img = new Image()
    img.src = images[nextIndex]
  }, [currentIndex])

  // Handle drag start
  const handleDragStart = (e) => {
    setIsDragging(true)
    setStartX(e.clientX || e.touches[0].clientX)
    setCurrentX(e.clientX || e.touches[0].clientX)
  }

  // Handle drag move
  const handleDragMove = (e) => {
    if (!isDragging) return
    const x = e.clientX || e.touches[0].clientX
    setCurrentX(x)
  }

  // Handle drag end
  const handleDragEnd = () => {
    if (!isDragging) return
    const diff = currentX - startX
    const threshold = 50

    if (diff > threshold) {
      // Swipe right - go to previous
      setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)
    } else if (diff < -threshold) {
      // Swipe left - go to next
      setCurrentIndex((prev) => (prev + 1) % members.length)
    }

    setIsDragging(false)
  }

  return (
    <section
      ref={ref}
      className="section-reveal relative py-24 md:py-32 bg-gs-mint-soft overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`reveal text-center ${visible ? "visible" : ""}`}>
          <span
            className="text-xs font-bold uppercase tracking-[0.3em] text-gs-gold"
          >
            Leadership
          </span>
          <h2
            className="font-display mt-3 text-4xl font-bold text-gs-dark md:text-5xl"
          >
            Meet The Team
          </h2>
        </div>

        <div className="mt-16 relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(${-currentIndex * 100}%)`
            }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {members.map((member, idx) => {
              const faceFocused = ["D/Shaban Abo Taleb", "Rana Torkey", "Osama Mohamed"].includes(member.name)
              const portraitScale = idx === currentIndex
                ? faceFocused ? "scale-[1.2] translate-y-3" : "scale-100"
                : "scale-95"
              const portraitHoverScale = faceFocused
                ? "group-hover/photo:scale-[1.2] group-active/photo:scale-[1.2]"
                : "group-hover/photo:scale-105 group-active/photo:scale-105"

              return (
              <div key={member.name} className="flex-shrink-0 w-full px-4 flex justify-center">
                <article
                  className={`reveal group overflow-hidden rounded-2xl bg-[#162727]/95 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl max-w-[517px] sm:max-w-[400px] px-0 ${visible ? "visible" : ""}`}
                  style={{
                    opacity: idx === currentIndex ? 1 : 0.3,
                    transform: idx === currentIndex ? 'scale(1)' : 'scale(0.95)',
                    transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)'
                  }}
                >
                  <div className="flex flex-col items-center p-4 sm:p-[39px] gap-8 min-h-[250px] sm:min-h-[300px]">
                    <div className="group/photo relative overflow-hidden rounded-xl">
                      <img
                        src={images[idx]}
                        alt={member.name}
                        loading="lazy"
                        className={`w-32 h-37 sm:w-52 sm:h-52 rounded-xl object-cover ${faceFocused ? "object-top" : ""} ${portraitHoverScale} border-4 border-gs-gold/40 transition-all duration-500 shadow-xl shadow-gs-gold/20 ${portraitScale} ${idx === currentIndex ? 'opacity-100' : 'opacity-70'}`}
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-xl bg-[#96cdb0]/35 opacity-0 mix-blend-color transition-opacity duration-300 group-hover/photo:opacity-100 group-active/photo:opacity-100"
                      />
                    </div>
                    <div className="flex-1 text-center">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base font-bold uppercase tracking-widest text-gs-mint">
                        {member.role}
                      </p>
                      <p className="mt-3 text-base sm:text-lg leading-relaxed text-gs-mint/80">{member.bio}</p>
                    </div>
                  </div>
                </article>
              </div>
              )
            })}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {members.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-gs-gold w-8' : 'bg-gs-gold/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}