import React from 'react'

export default function News({ content }) {
  const newsItems = [
    {
      url: content['news.0.url'] || 'https://www.eng.mcmaster.ca/news/wonder-guard-phd-students-new-device-aims-to-halt-progression-of-utis/',
      img: content['news.0.img'] || 'https://www.eng.mcmaster.ca//app/uploads/2025/06/Manak_Bajaj_2025.jpg',
      date: content['news.0.date'] || 'July 16, 2025',
      title: content['news.0.title'] || "Wonder Guard: PhD student's new device aims to halt progression of UTIs",
      source: content['news.0.source'] || 'McMaster University',
      description: content['news.0.description'] || "McMaster PhD student Manak Bajaj develops innovative UTI detection device that could revolutionize patient care."
    },
    {
      url: content['news.1.url'] || 'https://www.kite-uhn.com/news/icair-2025-award-winners',
      img: content['news.1.img'] || 'https://kite-uhn-photos-by-editor.s3.ca-central-1.amazonaws.com/kite_editor_638823000622708152.jpg',
      date: content['news.1.date'] || 'June 26, 2025',
      title: content['news.1.title'] || 'Wonder Guard takes home 1st place at The Power Play Pitch Innovative Concept Competition',
      source: content['news.1.source'] || 'KITE Research Institute',
      description: content['news.1.description'] || 'Wonder Guard wins first place at prestigious innovation competition, showcasing breakthrough UTI detection technology.'
    },
    {
      url: content['news.2.url'] || 'https://news.smu.ca/news/2025/4/10/ai-device-predicting-utis-wins-10k-at-the-arena',
      img: content['news.2.img'] || 'https://images.squarespace-cdn.com/content/v1/56a7b5951c1210756e3465c1/33388724-f07c-4999-a647-e2572d9dc0b3/winner+-+Manak+-The+Arena+-+Final++Round+.png?format=2500w',
      date: content['news.2.date'] || 'Jan 15, 2025',
      title: content['news.2.title'] || 'AI device predicting UTIs wins $10K at The Arena',
      source: content['news.2.source'] || "Saint Mary's University",
      description: content['news.2.description'] || "Wonder Guard's AI-powered UTI prediction technology wins $10,000 prize at The Arena innovation competition."
    }
  ]

  return (
    <section id="news" className="relative py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight fade-in-up"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            <span className="gradient-text-orange">Latest News</span>{' '}
            <span className="text-[#FFFEFF]">& Recognition</span>
          </h2>
          <p 
            className="text-xl text-[#D5D5D5] leading-relaxed fade-in-up font-light" 
            style={{ transitionDelay: '0.2s', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Stay updated with our latest achievements, research breakthroughs, and industry recognition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[rgba(255,255,255,0.02)] rounded-lg overflow-hidden border border-[rgba(255,255,255,0.08)] backdrop-blur-sm fade-in-up hover:bg-[rgba(255,255,255,0.04)] transition-all"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.img} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={item.title}
                />
              </div>
              <div className="p-6">
                <p 
                  className="text-sm text-[#9DAAB2] mb-3" 
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  {item.date}
                </p>
                <h3 
                  className="text-lg font-bold text-[#FFFEFF] mb-3 group-hover:text-[#F3921B] transition-colors leading-snug" 
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm gradient-text-orange font-medium mb-3" 
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  {item.source}
                </p>
                <p 
                  className="text-sm text-[#D5D5D5] mb-4 line-clamp-3" 
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  {item.description}
                </p>
                <div className="flex items-center gradient-text-orange text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                  Read more <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
