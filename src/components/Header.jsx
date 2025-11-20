import React, { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true)
      }
      
      setScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgba(0,65,66,0.7)] backdrop-blur-[30px]' : 'bg-[rgba(0,65,66,0.4)] backdrop-blur-[20px]'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center logo-wrapper">
          <img 
            src="/wonder_guard_logo__2__720.png" 
            alt="Wonder Guard" 
            className="logo-img h-24 w-auto object-contain"
            style={{ maxHeight: '96px' }}
          />
        </div>
        
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex gap-8 text-sm">
            <a href="#problem" className="text-[#D5D5D5] hover:text-[#FFFEFF] transition-colors font-normal">Problem</a>
            <a href="#solution" className="text-[#D5D5D5] hover:text-[#FFFEFF] transition-colors font-normal">Solution</a>
            <a href="#benefits" className="text-[#D5D5D5] hover:text-[#FFFEFF] transition-colors font-normal">Benefits</a>
            <a href="#news" className="text-[#D5D5D5] hover:text-[#FFFEFF] transition-colors font-normal">News</a>
            <a href="#contact" className="text-[#D5D5D5] hover:text-[#FFFEFF] transition-colors font-normal">Contact</a>
          </nav>
          
          <a 
            href="#contact" 
            className="hidden lg:inline-flex items-center btn-primary px-6 py-2.5 rounded-lg font-semibold text-sm"
          >
            Connect With Us
          </a>
          
          <button className="lg:hidden text-[#D5D5D5]">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  )
}
