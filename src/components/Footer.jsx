import React from 'react'

export default function Footer({ content }) {
  return (
    <footer className="py-4 relative border-t border-[rgba(255,255,255,0.08)] bg-[rgba(0,65,66,0.2)] backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 flex-wrap">
          <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-[#9DAAB2] flex-wrap justify-center md:justify-start" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
            <a href="#" className="text-[#9DAAB2] hover:text-[#F3921B] transition-colors">
              <i className="fab fa-linkedin text-lg md:text-xl"></i>
            </a>
            <span className="text-[#D5D5D5] hidden sm:inline">•</span>
            <span className="text-[#D5D5D5] text-center">
              <strong className="text-[#F3921B]">Disclaimer:</strong> Product in development, not yet FDA approved. Not for sale.
            </span>
            <span className="text-[#D5D5D5] hidden lg:inline">•</span>
            <span className="hidden lg:flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i>
              {content['contact.location'] || 'Toronto, Canada'}
            </span>
            <span className="text-[#D5D5D5] hidden lg:inline">•</span>
            <a href={`mailto:${content['contact.email'] || 'info@wonderguard.com'}`} className="hover:text-[#F3921B] transition-colors hidden lg:flex items-center">
              <i className="fas fa-envelope mr-2"></i>
              {content['contact.email'] || 'info@wonderguard.com'}
            </a>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm flex-wrap justify-center md:justify-end">
            <p className="text-[#9DAAB2]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
              &copy; 2025 Wonder Guard. All rights reserved.
            </p>
            <span className="text-[#D5D5D5] hidden md:inline">•</span>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="text-[#9DAAB2] hover:text-[#F3921B] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Privacy Policy</a>
              <a href="#" className="text-[#9DAAB2] hover:text-[#F3921B] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
