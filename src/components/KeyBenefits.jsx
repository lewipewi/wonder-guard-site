import React from 'react'

export default function KeyBenefits() {
  return (
    <section id="benefits" className="relative py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight fade-in-up"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            <span className="gradient-text-teal">Accessible.</span>{' '}
            <span className="gradient-text-orange">Adaptable.</span>{' '}
            <span className="text-[#FFFEFF]">Absolute.</span>
          </h2>
          <p 
            className="text-xl text-[#D5D5D5] leading-relaxed fade-in-up font-light" 
            style={{ transitionDelay: '0.2s', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Achieve early detection at scale, minus the usual barriers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center bg-[rgba(255,255,255,0.02)] rounded-lg p-8 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm fade-in-up hover:bg-[rgba(255,255,255,0.04)] transition-all">
            <div className="w-16 h-16 bg-[rgba(64,120,121,0.15)] border border-[rgba(64,120,121,0.3)] rounded-lg flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-bolt text-[#407879] text-2xl"></i>
            </div>
            <h3 
              className="text-lg font-bold text-[#FFFEFF] mb-3" 
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              High Sensitivity
            </h3>
            <p 
              className="text-[#D5D5D5] text-sm leading-relaxed" 
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Detects infections at early stages with high accuracy and precision.
            </p>
          </div>
          
          <div className="text-center bg-[rgba(255,255,255,0.02)] rounded-lg p-8 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm fade-in-up hover:bg-[rgba(255,255,255,0.04)] transition-all" style={{ transitionDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-[rgba(243,146,27,0.15)] border border-[rgba(243,146,27,0.3)] rounded-lg flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-clock text-[#F3921B] text-2xl"></i>
            </div>
            <h3 
              className="text-lg font-bold text-[#FFFEFF] mb-3" 
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              Real-time
            </h3>
            <p 
              className="text-[#D5D5D5] text-sm leading-relaxed" 
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Continuous monitoring without delays, providing instant insights.
            </p>
          </div>
          
          <div className="text-center bg-[rgba(255,255,255,0.02)] rounded-lg p-8 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm fade-in-up hover:bg-[rgba(255,255,255,0.04)] transition-all" style={{ transitionDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-[rgba(64,120,121,0.15)] border border-[rgba(64,120,121,0.3)] rounded-lg flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-dollar-sign text-[#407879] text-2xl"></i>
            </div>
            <h3 
              className="text-lg font-bold text-[#FFFEFF] mb-3" 
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              Cost-Efficient
            </h3>
            <p 
              className="text-[#D5D5D5] text-sm leading-relaxed" 
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Reduces hospital stays and complications, lowering overall costs.
            </p>
          </div>
          
          <div className="text-center bg-[rgba(255,255,255,0.02)] rounded-lg p-8 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm fade-in-up hover:bg-[rgba(255,255,255,0.04)] transition-all" style={{ transitionDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-[rgba(243,146,27,0.15)] border border-[rgba(243,146,27,0.3)] rounded-lg flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-users text-[#F3921B] text-2xl"></i>
            </div>
            <h3 
              className="text-lg font-bold text-[#FFFEFF] mb-3" 
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              Patient-Friendly
            </h3>
            <p 
              className="text-[#D5D5D5] text-sm leading-relaxed" 
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Non-invasive monitoring that requires no additional procedures.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
