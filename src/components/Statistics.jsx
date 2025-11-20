import React, { useEffect, useRef, useState } from 'react'

export default function Statistics() {
  const statsRef = useRef(null)
  const [counted, setCounted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !counted) {
            setCounted(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [counted])

  const animateCounters = () => {
    const counters = document.querySelectorAll('[data-target]')
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'))
      const suffix = counter.textContent.includes('+') ? '+' : 
                   counter.textContent.includes('%') ? '%' : ''
      
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current < target) {
          counter.textContent = Math.floor(current) + suffix
        } else {
          counter.textContent = target + suffix
          clearInterval(timer)
        }
      }, 30)
    })
  }

  return (
    <section className="py-20 relative" ref={statsRef}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center fade-in-up">
            <div className="stat-number mb-3" data-target="80">0%</div>
            <p className="text-sm md:text-base text-[#D5D5D5] font-normal">Reduction in Detection Time</p>
          </div>
          <div className="text-center fade-in-up" style={{ transitionDelay: '0.1s' }}>
            <div className="stat-number mb-3">24/7</div>
            <p className="text-sm md:text-base text-[#D5D5D5] font-normal">Real-time Monitoring</p>
          </div>
          <div className="text-center fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="stat-number mb-3" data-target="95">0%</div>
            <p className="text-sm md:text-base text-[#D5D5D5] font-normal">Detection Accuracy</p>
          </div>
          <div className="text-center fade-in-up" style={{ transitionDelay: '0.3s' }}>
            <div className="stat-number mb-3" data-target="1000">0+</div>
            <p className="text-sm md:text-base text-[#D5D5D5] font-normal">Patients Monitored</p>
          </div>
        </div>
      </div>
    </section>
  )
}
