'use client'

export default function RollingBanner() {
  const bannerText = "BLAAZE LEAD THE THRILL"

  return (
    <div className="relative overflow-hidden bg-black py-4">
      <div className="flex animate-scroll">
        {/* Duplicate content multiple times for seamless scrolling */}
        {[...Array(8)].map((_, i) => (
          <span 
            key={i} 
            className="font-nasalization text-3xl md:text-4xl lg:text-5xl text-red-600 uppercase tracking-wider mx-8 flex-shrink-0"
          >
            {bannerText}
          </span>
        ))}
      </div>
    </div>
  )
}
