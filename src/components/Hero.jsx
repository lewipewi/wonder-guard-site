import React from 'react'

export default function Hero({ content }) {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src={content['hero.video'] || '/WG_DummyProto2_Animated_Final_SecondAngle.MP4'} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#06303C]/60 via-transparent to-[#06303C]/60"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 w-full">
        <div className="max-w-5xl">
          <h1 
            className="text-6xl md:text-8xl lg:text-[120px] font-bold mb-8 leading-[0.92] text-[#FFFEFF] fade-in-up"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            Early UTI Detection<br />
            <span className="gradient-text-orange">for Catheterized Patients</span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-[#D5D5D5] mb-12 max-w-3xl leading-relaxed fade-in-up" 
            style={{ transitionDelay: '0.1s', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            {content['hero.subtitle'] || "Wonder Guard is a revolutionary smart biosensor system designed to detect urinary tract infections early—improving patient safety and reducing hospital-acquired infections through real-time monitoring."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center btn-primary px-10 py-5 rounded-lg font-semibold text-lg"
            >
              Connect With Us
            </a>
            <a 
              href="#solution" 
              className="inline-flex items-center justify-center px-10 py-5 rounded-lg font-semibold text-lg border border-[#9DAAB2]/40 text-[#FFFEFF] hover:bg-[rgba(255,255,255,0.05)] transition-all"
            >
              Technology
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
