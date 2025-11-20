import React from 'react'

export default function Solution({ content }) {
  return (
    <>
      <section id="solution" className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight fade-in-up"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              <span className="gradient-text-teal">The Wonder Guard</span><br />
              <span className="text-[#FFFEFF]">Platform</span>
            </h2>
            <p 
              className="text-xl text-[#D5D5D5] leading-relaxed fade-in-up font-light" 
              style={{ transitionDelay: '0.2s', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Real-time monitoring and early detection through cutting-edge nano-biosensor technology.
            </p>
          </div>

          {/* How It Works - Editorial style */}
          <div className="max-w-5xl mx-auto fade-in-up">
            <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-12 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm">
              <h3 
                className="text-4xl font-bold mb-12" 
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                <span className="gradient-text-orange">How It Works</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#407879] to-[#06303C] text-white rounded-lg flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1</div>
                    <div>
                      <h4 
                        className="font-bold text-[#FFFEFF] mb-3 text-lg" 
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                      >
                        Biosensor Integration
                      </h4>
                      <p 
                        className="text-[#D5D5D5]" 
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                      >
                        Nano-biosensors are embedded directly into urinary catheter collection bags, requiring no additional patient procedures.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#F3921B] to-[#ffa64d] text-white rounded-lg flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2</div>
                    <div>
                      <h4 
                        className="font-bold text-[#FFFEFF] mb-3 text-lg" 
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                      >
                        Real-time Analysis
                      </h4>
                      <p 
                        className="text-[#D5D5D5]" 
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                      >
                        The system continuously analyzes biomarkers in urine, detecting infection markers before symptoms appear.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#407879] to-[#06303C] text-white rounded-lg flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3</div>
                    <div>
                      <h4 
                        className="font-bold text-[#FFFEFF] mb-3 text-lg" 
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                      >
                        Instant Alerts
                      </h4>
                      <p 
                        className="text-[#D5D5D5]" 
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                      >
                        When early infection signs are detected, care providers receive immediate notifications, enabling rapid response.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-8 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm overflow-hidden">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-auto rounded"
                  >
                    <source src="/Video Project.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Biosensors Section */}
      <section className="relative py-32 min-h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${content['biosensors.bgImage'] || '/uploads/biosensors-bg.jpg'})`
          }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#06303C]/80 via-[#06303C]/70 to-[#06303C]/80"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-6 fade-in-up">
              <div className="w-14 h-14 bg-[rgba(64,120,121,0.25)] border border-[rgba(64,120,121,0.4)] rounded-lg flex items-center justify-center">
                <i className="fas fa-microchip text-[#407879] text-2xl"></i>
              </div>
              <h2 
                className="text-5xl md:text-7xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                <span className="gradient-text-teal">Smart Biosensors</span>
              </h2>
            </div>
            
            <div className="space-y-6 fade-in-up" style={{ transitionDelay: '0.2s' }}>
              <p 
                className="text-xl md:text-2xl text-[#D5D5D5] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                {content['biosensors.description'] || "Nano-biosensor technology embedded in catheter bags monitors biomarkers in real-time, detecting early infection signals before they become symptomatic. Our advanced molecular sensors continuously analyze urine composition, identifying pathogenic bacteria and inflammatory markers with laboratory-grade precision."}
              </p>
              <p 
                className="text-lg text-[#D5D5D5] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                {content['biosensors.details'] || "The integration is seamless—requiring no additional procedures, no patient discomfort, and no disruption to existing care protocols. The biosensors work silently in the background, providing healthcare teams with the critical early warning system they need to prevent complications."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Alerts Section */}
      <section className="relative py-32 min-h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${content['alerts.bgImage'] || '/uploads/alerts-bg.jpg'})`
          }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#06303C]/80 via-[#06303C]/70 to-[#06303C]/80"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-6 fade-in-up">
              <div className="w-14 h-14 bg-[rgba(243,146,27,0.25)] border border-[rgba(243,146,27,0.4)] rounded-lg flex items-center justify-center">
                <i className="fas fa-bell text-[#F3921B] text-2xl"></i>
              </div>
              <h2 
                className="text-5xl md:text-7xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                <span className="gradient-text-orange">Early Alerts</span>
              </h2>
            </div>
            
            <div className="space-y-6 fade-in-up" style={{ transitionDelay: '0.2s' }}>
              <p 
                className="text-xl md:text-2xl text-[#D5D5D5] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                {content['alerts.description'] || "Instant notifications to care providers when early signs of infection are detected, enabling proactive intervention before symptoms escalate. Our intelligent alert system prioritizes critical findings and delivers them directly to the right healthcare professionals at the right time."}
              </p>
              <p 
                className="text-lg text-[#D5D5D5] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                {content['alerts.details'] || "The notification system integrates seamlessly with existing hospital infrastructure, ensuring that alerts reach care teams through their preferred communication channels. This early warning capability transforms reactive care into proactive prevention, significantly improving patient outcomes."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Monitoring Section */}
      <section className="relative py-32 min-h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${content['monitoring.bgImage'] || '/uploads/monitoring-bg.jpg'})`
          }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#06303C]/80 via-[#06303C]/70 to-[#06303C]/80"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-6 fade-in-up">
              <div className="w-14 h-14 bg-[rgba(64,120,121,0.25)] border border-[rgba(64,120,121,0.4)] rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-[#407879] text-2xl"></i>
              </div>
              <h2 
                className="text-5xl md:text-7xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                <span className="gradient-text-teal">Continuous Monitoring</span>
              </h2>
            </div>
            
            <div className="space-y-6 fade-in-up" style={{ transitionDelay: '0.2s' }}>
              <p 
                className="text-xl md:text-2xl text-[#D5D5D5] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                {content['monitoring.description'] || "24/7 monitoring without requiring additional lab tests or patient discomfort, providing continuous health intelligence that empowers data-driven decision making. Unlike traditional point-in-time testing, Wonder Guard delivers a comprehensive view of patient health trends over time."}
              </p>
              <p 
                className="text-lg text-[#D5D5D5] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                {content['monitoring.details'] || "This continuous data stream enables healthcare providers to detect subtle changes in patient status that might otherwise go unnoticed. The system tracks biomarker levels throughout the patient's stay, building a complete picture that supports better clinical decision-making and improved care outcomes."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
