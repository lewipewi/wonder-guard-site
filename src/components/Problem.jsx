import React from 'react'

export default function Problem({ content }) {
  return (
    <section id="problem" className="relative py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight fade-in-up"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            <span className="text-[#FFFEFF]">Healthcare captures snapshots.</span><br />
            <span className="gradient-text-orange">Infections develop continuously.</span>
          </h2>
          <p 
            className="text-xl text-[#D5D5D5] leading-relaxed fade-in-up font-light" 
            style={{ transitionDelay: '0.2s', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Fast-changing infection markers need fast detection. Without real-time insight, clinicians miss critical warning signs until symptoms escalate.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div className="space-y-8 fade-in-up" style={{ transitionDelay: '0.3s' }}>
            <div>
              <h3 
                className="text-3xl font-bold text-[#FFFEFF] mb-6" 
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                The Challenge
              </h3>
              <p 
                className="text-lg text-[#D5D5D5] leading-relaxed" 
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                {content['problem.description'] || "Urinary tract infections are one of the most common and dangerous complications in catheterized patients. They often go undetected until symptoms worsen, leading to prolonged hospital stays, systemic infections, or worse."}
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#F3921B]/20 border border-[#F3921B]/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-exclamation text-[#F3921B] text-xs"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FFFEFF] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>Delayed Detection</h4>
                  <p className="text-[#D5D5D5]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Traditional methods detect UTIs only after symptoms appear, often too late for early intervention.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#F3921B]/20 border border-[#F3921B]/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-exclamation text-[#F3921B] text-xs"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FFFEFF] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>Increased Risk</h4>
                  <p className="text-[#D5D5D5]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Hospital-acquired infections lead to longer stays, higher costs, and worse patient outcomes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '0.4s' }}>
            <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-8 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm">
              <img 
                src={content['problem.image'] || '/uploads/problem-image.jpg'} 
                className="w-full h-64 object-cover rounded" 
                alt="Problem illustration" 
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="w-full h-64 bg-gradient-to-br from-[#407879]/20 to-[#06303C]/20 rounded flex items-center justify-center border border-[#407879]/20" style={{ display: 'none' }}>
                <div className="text-center">
                  <i className="fas fa-chart-line text-5xl text-[#407879] mb-4 opacity-60"></i>
                  <p className="text-[#D5D5D5] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Infection timeline visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
