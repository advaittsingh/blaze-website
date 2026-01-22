import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InstagramFeed from '@/components/InstagramFeed'
import RollingBanner from '@/components/RollingBanner'
import PartyPackages from '@/components/PartyPackages'
import Image from 'next/image'
import Link from 'next/link'

// Force Node.js runtime and dynamic rendering to avoid __dirname errors
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 min-h-screen flex items-center justify-center bg-gradient-to-b from-blaaze-dark to-black overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Blaaze.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-nasalization text-6xl md:text-8xl lg:text-9xl mb-6 text-white tracking-wide">
            BLAAZE
          </h1>
          <h2 className="font-nasalization text-3xl md:text-5xl lg:text-6xl text-blaaze-orange mb-8">
            LEAD THE THRILL
          </h2>
        </div>
      </section>

      {/* Discover The Fun Zone */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image on Left */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
              <Image
                src="/fun-zone-image.png"
                alt="Air hockey game at BLAAZE"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            {/* Text Content on Right */}
            <div className="text-left">
              <p className="text-white text-sm mb-2 uppercase tracking-wide">
                Entertainment Destination
              </p>
              <h2 className="font-nasalization text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                DISCOVER THE<br />FUN ZONE
              </h2>
              <p className="text-white text-lg leading-relaxed mb-6">
                Blaaze is packed with everything from epic arcade games and immersive VR to bumpers, bowling, and more. It&apos;s not just entertainment,
              </p>
              <p className="font-nasalization text-3xl md:text-4xl lg:text-5xl text-blaaze-orange font-bold uppercase">
                IT&apos;S AN EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rolling Banner */}
      <RollingBanner />

      {/* Statistics Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-white uppercase text-sm tracking-wide mb-2">HAPPY VISITORS</p>
              <div className="text-5xl md:text-6xl font-nasalization text-white mb-4">150K +</div>
            </div>
            <div className="p-6">
              <p className="text-white uppercase text-sm tracking-wide mb-2">LOCATIONS</p>
              <div className="text-5xl md:text-6xl font-nasalization text-white mb-4">3</div>
            </div>
            <div className="p-6">
              <p className="text-white uppercase text-sm tracking-wide mb-2">CUSTOMER RETURN RATE</p>
              <div className="text-5xl md:text-6xl font-nasalization text-white mb-4">65%</div>
            </div>
            <div className="p-6">
              <p className="text-white uppercase text-sm tracking-wide mb-2">CELEBRATIONS</p>
              <div className="text-5xl md:text-6xl font-nasalization text-white mb-4">400 +</div>
            </div>
          </div>
        </div>
      </section>

      {/* Unleash The Thrill Within */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image on Left */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
              <Image
                src="/unleash-the-thrill.png"
                alt="Unleash the thrill at BLAAZE"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            {/* Text Content on Right */}
            <div className="text-left">
              <p className="text-white text-sm mb-2 uppercase tracking-wide">
                What We Do
              </p>
              <h2 className="font-nasalization text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                UNLEASH THE<br />THRILL WITHIN
              </h2>
              <p className="text-white text-lg leading-relaxed mb-6">
                Blaaze is where the fun never stops and every visit feels like a celebration. We bring high-energy entertainment for young adults who love games, excitement, and good times with friends. All in a safe, clean space with a super friendly team and awesome facilities.
              </p>
              <Link 
                href="/about-us" 
                className="text-white underline decoration-blaaze-orange decoration-2 underline-offset-4 hover:text-blaaze-orange transition-colors inline-block"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Card Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Go-Karting Fun! */}
            <div className="bg-transparent overflow-hidden relative group rounded-lg aspect-[4/5]">
              {/* Image Background */}
              <Image
                src="/fun-zone-image.png"
                alt="Go-Karting at BLAAZE"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <p className="text-white text-xs uppercase tracking-wider mb-2 opacity-90">SERVICES</p>
                <h3 className="font-nasalization text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">GO-KARTING FUN!</h3>
                <p className="text-white text-xs md:text-sm leading-relaxed opacity-90 line-clamp-3">
                  VISUAL REPRESENTATION: HIGH-SPEED TRACK WITH RACERS ZOOMING PAST IN COLORFUL KARTS FEEL THE RUSH OF BUMPER CAR
                </p>
              </div>
            </div>

            {/* Bowling */}
            <div className="bg-transparent overflow-hidden relative group rounded-lg aspect-[4/5]">
              {/* Image Background */}
              <Image
                src="/unleash-the-thrill.png"
                alt="Bowling at BLAAZE"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <p className="text-white text-xs uppercase tracking-wider mb-2 opacity-90">SERVICES</p>
                <h3 className="font-nasalization text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">BOWLING</h3>
                <p className="text-white text-xs md:text-sm leading-relaxed opacity-90 line-clamp-3">
                  VISUAL REPRESENTATION: NEON-LIT LANES WITH PLAYERS MID-STRIKE STRIKE, SPARE, AND SCORE! OUR VIBRANT BOWLING
                </p>
              </div>
            </div>

            {/* Trampoline Time */}
            <div className="bg-transparent overflow-hidden relative group rounded-lg aspect-[4/5]">
              {/* Image Background */}
              <Image
                src="/fun-zone-image.png"
                alt="Trampoline at BLAAZE"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <p className="text-white text-xs uppercase tracking-wider mb-2 opacity-90">SERVICES</p>
                <h3 className="font-nasalization text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">TRAMPOLINE TIME</h3>
                <p className="text-white text-xs md:text-sm leading-relaxed opacity-90 line-clamp-3">
                  VISUAL REPRESENTATION: WALL-TO-WALL TRAMPOLINES WITH KIDS AND ADULTS MID-AIR JUMP INTO ACTION! OUR TRAMPOLINE
                </p>
              </div>
            </div>

            {/* VR & Special Activities */}
            <div className="bg-transparent overflow-hidden relative group rounded-lg aspect-[4/5]">
              {/* Image Background */}
              <Image
                src="/unleash-the-thrill.png"
                alt="VR & Special Activities at BLAAZE"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <p className="text-white text-xs uppercase tracking-wider mb-2 opacity-90">SERVICES</p>
                <h3 className="font-nasalization text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">VR & SPECIAL ACTIVITIES</h3>
                <p className="text-white text-xs md:text-sm leading-relaxed opacity-90 line-clamp-3">
                  VISUAL REPRESENTATION: GUESTS IMMERSED IN VR HEADSETS AND MOTION CHAIRS STEP INTO ALTERNATE REALITIES!
                </p>
              </div>
            </div>

            {/* Bumper Cars */}
            <div className="bg-transparent overflow-hidden relative group rounded-lg aspect-[4/5]">
              {/* Image Background */}
              <Image
                src="/fun-zone-image.png"
                alt="Bumper Cars at BLAAZE"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <p className="text-white text-xs uppercase tracking-wider mb-2 opacity-90">SERVICES</p>
                <h3 className="font-nasalization text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">BUMPER CARS</h3>
                <p className="text-white text-xs md:text-sm leading-relaxed opacity-90 line-clamp-3">
                  VISUAL REPRESENTATION: COLORFUL CARS CRASHING PLAYFULLY IN A GLOWING ARENA GET READY TO BUMP, SPIN, AND
                </p>
              </div>
            </div>

            {/* Arcade Games */}
            <div className="bg-transparent overflow-hidden relative group rounded-lg aspect-[4/5]">
              {/* Image Background */}
              <Image
                src="/unleash-the-thrill.png"
                alt="Arcade Games at BLAAZE"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <p className="text-white text-xs uppercase tracking-wider mb-2 opacity-90">SERVICES</p>
                <h3 className="font-nasalization text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">ARCADE GAMES</h3>
                <p className="text-white text-xs md:text-sm leading-relaxed opacity-90 line-clamp-3">
                  VISUAL REPRESENTATION: RETRO AND MODERN ARCADE CABINETS, LIGHTS, AND GAMING ACTION FROM NOSTALGIC
                </p>
              </div>
            </div>

            {/* Laser Tag */}
            <div className="bg-transparent overflow-hidden relative group rounded-lg aspect-[4/5]">
              {/* Image Background */}
              <Image
                src="/fun-zone-image.png"
                alt="Laser Tag at BLAAZE"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <p className="text-white text-xs uppercase tracking-wider mb-2 opacity-90">SERVICES</p>
                <h3 className="font-nasalization text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">LASER TAG</h3>
                <p className="text-white text-xs md:text-sm leading-relaxed opacity-90 line-clamp-3">
                  VISUAL REPRESENTATION: TACTICAL COMBAT ARENAS WITH NEON LIGHTS AND STRATEGIC GAMEPLAY EXPERIENCE THE THRILL
                </p>
              </div>
            </div>

            {/* Escape Room */}
            <div className="bg-transparent overflow-hidden relative group rounded-lg aspect-[4/5]">
              {/* Image Background */}
              <Image
                src="/unleash-the-thrill.png"
                alt="Escape Room at BLAAZE"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <p className="text-white text-xs uppercase tracking-wider mb-2 opacity-90">SERVICES</p>
                <h3 className="font-nasalization text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">ESCAPE ROOM</h3>
                <p className="text-white text-xs md:text-sm leading-relaxed opacity-90 line-clamp-3">
                  VISUAL REPRESENTATION: IMMERSIVE PUZZLE ROOMS WITH MYSTERIOUS THEMES AND CHALLENGING RIDDLES SOLVE THE MYSTERY
                </p>
              </div>
            </div>

            {/* Mini Golf */}
            <div className="bg-transparent overflow-hidden relative group rounded-lg aspect-[4/5]">
              {/* Image Background */}
              <Image
                src="/fun-zone-image.png"
                alt="Mini Golf at BLAAZE"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <p className="text-white text-xs uppercase tracking-wider mb-2 opacity-90">SERVICES</p>
                <h3 className="font-nasalization text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">MINI GOLF</h3>
                <p className="text-white text-xs md:text-sm leading-relaxed opacity-90 line-clamp-3">
                  VISUAL REPRESENTATION: THEMED COURSES WITH OBSTACLES AND CHALLENGING HOLES PUTT YOUR WAY TO VICTORY
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Photo & Party Packages Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Group Photo - Left Side */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <span className="text-gray-400">Group Photo - Happy Customers/Staff</span>
              </div>
            </div>

            {/* Party Packages - Right Side */}
            <div>
              <p className="text-white text-sm uppercase tracking-wide mb-2 font-poppins">IGNITE THE CELEBRATION</p>
              <h2 className="font-nasalization text-4xl md:text-5xl lg:text-6xl text-white mb-8">
                PARTY PACKAGES
              </h2>
              
              {/* Location Tabs and Pricing Table */}
              <PartyPackages />

              {/* Additional Offers */}
              <div className="space-y-2 mb-6">
                <p className="text-white text-sm font-poppins">
                  <span className="text-red-600">|</span> VR Combo Pack only ₹999 (Limited time)
                </p>
                <p className="text-white text-sm font-poppins">
                  <span className="text-red-600">|</span> Free party host for birthday events over ₹5000
                </p>
                <p className="text-white text-sm font-poppins">
                  <span className="text-red-600">|</span> Flat 10% off on weekday bookings
                </p>
              </div>

              {/* CTA Button */}
              <button className="px-12 py-4 bg-red-600 text-white font-bold uppercase tracking-wide hover:bg-red-700 transition-colors text-lg font-poppins">
                BOOK YOUR CELEBRATION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Client Says */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <p className="text-white text-sm uppercase tracking-wide mb-2 text-center">TESTIMONIALS</p>
          <h2 className="font-nasalization text-4xl md:text-5xl lg:text-6xl text-center mb-12 text-white">
            WHAT OUR CLIENT SAY&apos;S
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT LABORE DOLORE MAGNA ALIQUA.",
                name: "BRIAN WOODS",
                role: "GAMER"
              },
              {
                quote: "ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT LABORE DOLORE MAGNA ALIQUA.",
                name: "NATALIE JONES",
                role: "GAMER"
              },
              {
                quote: "ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT LABORE DOLORE MAGNA ALIQUA.",
                name: "ANDREW MORRIS",
                role: "GAMER"
              },
            ].map((testimonial, i) => (
              <div key={i} className="text-left">
                <div className="text-white text-6xl md:text-7xl font-serif leading-none mb-4">"</div>
                <p className="text-white text-sm md:text-base mb-6 uppercase tracking-wide leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="mb-2">
                  <p className="text-white font-bold text-sm md:text-base uppercase tracking-wide">
                    {testimonial.name}
                  </p>
                  <p className="text-white text-xs md:text-sm uppercase tracking-wide mt-1">
                    {testimonial.role}
                  </p>
                </div>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-red-600 text-lg md:text-xl">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's New At BLAAZE */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="font-nasalization text-4xl md:text-5xl text-center mb-4 text-white">
            WHAT&apos;S NEW AT BLAAZE?
          </h2>
          <p className="font-nasalization text-white text-center mb-12 text-sm uppercase tracking-wide">
            STAY UPDATED WITH OUR LATEST OFFERS, GAMES & MORE
          </p>
          
          {/* Instagram Feed */}
          <InstagramFeed />
        </div>
      </section>

      <Footer />
    </main>
  )
}
