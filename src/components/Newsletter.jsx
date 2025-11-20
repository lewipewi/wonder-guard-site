import React from 'react'

export default function Newsletter() {
  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 
          className="text-5xl md:text-6xl font-bold mb-6 fade-in-up"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
        >
          <span className="gradient-text-orange">Get the latest in UTI detection,</span><br />
          <span className="text-[#FFFEFF]">straight to your inbox</span>
        </h2>
        <p 
          className="text-xl text-[#D5D5D5] mb-10 fade-in-up" 
          style={{ transitionDelay: '0.2s', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
        >
          Be the first to hear about new developments, product updates, research highlights, and upcoming events.
        </p>
        <form 
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto fade-in-up" 
          style={{ transitionDelay: '0.4s' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-6 py-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg focus:ring-2 focus:ring-[#F3921B] focus:border-transparent text-[#FFFEFF] placeholder-[#9DAAB2] bg-transparent transition-all backdrop-blur-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
          <button 
            type="submit" 
            className="btn-primary px-8 py-4 rounded-lg font-semibold"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Sign Up
          </button>
        </form>
        <p 
          className="text-sm text-[#9DAAB2] mt-6" 
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
        >
          By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
        </p>
      </div>
    </section>
  )
}
