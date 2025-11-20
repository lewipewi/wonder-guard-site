import React from 'react'

export default function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight fade-in-up"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            <span className="gradient-text-orange">What Clinicians</span><br />
            <span className="text-[#FFFEFF]">Are Saying</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-10 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm fade-in-up hover:bg-[rgba(255,255,255,0.04)] transition-all">
            <div className="mb-6">
              <i className="fas fa-quote-left text-4xl gradient-text-orange opacity-30"></i>
            </div>
            <p 
              className="text-[#D5D5D5] text-lg mb-8 leading-relaxed" 
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              "Wonder Guard's platform provides an elegant and scalable solution, delivering robust data at a quality-to-cost ratio that's unmatched. Beyond detecting known targets, the platform helps us uncover early infection markers before symptoms appear."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#407879] to-[#06303C] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>JD</span>
              </div>
              <div>
                <h4 
                  className="font-bold text-[#FFFEFF]" 
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  Dr. Jane Doe
                </h4>
                <p 
                  className="text-[#D5D5D5] text-sm" 
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  Principal Investigator, Hospital Research Center
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-10 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm fade-in-up hover:bg-[rgba(255,255,255,0.04)] transition-all" style={{ transitionDelay: '0.2s' }}>
            <div className="mb-6">
              <i className="fas fa-quote-left text-4xl gradient-text-teal opacity-30"></i>
            </div>
            <p 
              className="text-[#D5D5D5] text-lg mb-8 leading-relaxed" 
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              "The real-time monitoring capability has transformed our approach to UTI prevention. The data quality and turnaround time far surpasses traditional methods. Wonder Guard is becoming an essential tool in our patient care toolkit."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F3921B] to-[#ffa64d] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>JS</span>
              </div>
              <div>
                <h4 
                  className="font-bold text-[#FFFEFF]" 
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  Dr. John Smith
                </h4>
                <p 
                  className="text-[#D5D5D5] text-sm" 
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  Director of Infectious Diseases, Medical Center
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
