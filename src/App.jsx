import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import KeyBenefits from './components/KeyBenefits'
import News from './components/News'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [content, setContent] = useState({})

  useEffect(() => {
    // Load dynamic content
    fetch('/content')
      .then(res => res.ok ? res.json() : {})
      .then(data => setContent(data))
      .catch(() => {})

    // Fade in on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in-up').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      <div className="bg-blend"></div>
      <div className="grid-overlay"></div>
      
      <Header />
      <Hero content={content} />
      <Problem content={content} />
      <Solution content={content} />
      <KeyBenefits />
      <News content={content} />
      <Newsletter />
      <Contact content={content} />
      <Footer content={content} />
    </div>
  )
}

export default App
