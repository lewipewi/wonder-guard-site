import React from 'react'

export default function Contact({ content }) {
  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight fade-in-up"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            <span className="gradient-text-orange">Connect with our team</span>
          </h2>
          <p 
            className="text-xl text-[#D5D5D5] max-w-2xl mx-auto leading-relaxed fade-in-up" 
            style={{ transitionDelay: '0.2s', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Ready to learn more about Wonder Guard? Get in touch with our team to discuss partnerships, clinical trials, or investment opportunities.
          </p>
        </div>
        
        <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-10 md:p-14 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm fade-in-up" style={{ transitionDelay: '0.3s' }}>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label 
                  className="block text-sm font-medium text-[#D5D5D5] mb-3" 
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full px-5 py-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg focus:ring-2 focus:ring-[#F3921B] focus:border-transparent transition-all bg-transparent text-[#FFFEFF] placeholder-[#9DAAB2] backdrop-blur-sm"
                  placeholder="Enter your full name"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>
              <div>
                <label 
                  className="block text-sm font-medium text-[#D5D5D5] mb-3" 
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-5 py-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg focus:ring-2 focus:ring-[#F3921B] focus:border-transparent transition-all bg-transparent text-[#FFFEFF] placeholder-[#9DAAB2] backdrop-blur-sm"
                  placeholder="Enter your email address"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>
            </div>
            
            <div>
              <label 
                className="block text-sm font-medium text-[#D5D5D5] mb-3" 
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                Organization
              </label>
              <input 
                type="text" 
                name="organization" 
                className="w-full px-5 py-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg focus:ring-2 focus:ring-[#F3921B] focus:border-transparent transition-all bg-transparent text-[#FFFEFF] placeholder-[#9DAAB2] backdrop-blur-sm"
                placeholder="Your company or institution"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
            </div>
            
            <div>
              <label 
                className="block text-sm font-medium text-[#D5D5D5] mb-3" 
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                Inquiry Type
              </label>
              <select 
                name="inquiry_type" 
                required 
                className="w-full px-5 py-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg focus:ring-2 focus:ring-[#F3921B] focus:border-transparent transition-all bg-transparent text-[#FFFEFF] backdrop-blur-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <option value="">Select an option</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="clinical_trial">Clinical Trial Collaboration</option>
                <option value="investment">Investment Inquiry</option>
                <option value="media">Media Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label 
                className="block text-sm font-medium text-[#D5D5D5] mb-3" 
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                Message
              </label>
              <textarea 
                name="message" 
                rows="5" 
                required 
                className="w-full px-5 py-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg focus:ring-2 focus:ring-[#F3921B] focus:border-transparent transition-all resize-none bg-transparent text-[#FFFEFF] placeholder-[#9DAAB2] backdrop-blur-sm"
                placeholder="Tell us about your interest in Wonder Guard..."
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full btn-primary py-5 rounded-lg font-semibold text-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
