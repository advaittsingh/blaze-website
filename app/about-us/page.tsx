import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 pb-32 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/fun-zone-image.png"
            alt="About Us Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-nasalization text-6xl md:text-8xl mb-3">
            ABOUT US
          </h1>
          <p className="text-xs tracking-widest uppercase text-gray-300">
            ENTERTAINMENT | ADVENTURE | GAMING ZONE
          </p>
        </div>
      </section>

      {/* BLAAZE CARD */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#161616] rounded-xl p-10 md:p-14 text-center">
            <h2 className="font-nasalization text-5xl text-red-600 mb-6">
              BLAAZE
            </h2>
            <p className="text-gray-300 leading-relaxed mb-10">
              Blaaze began with a simple idea which was to build a vibrant space where all ages can play, bond, and create lasting memories.
              From redefining fun in Dehradun to becoming a buzzing hub of entertainment, Blaaze now offers multiple locations,
              cutting-edge games, and joyful experiences for everyone.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-10 py-3 font-bold uppercase tracking-wide"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 text-center px-6">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
          Our Story
        </p>
        <h2 className="font-nasalization text-5xl md:text-6xl text-red-600 mb-8">
          FROM ONE GAME TO A WHOLE NEW WORLD OF FUN
        </h2>
        <p className="max-w-4xl mx-auto text-gray-300 leading-relaxed">
          What started as a single location has grown into a beloved entertainment destination.
          Today, Blaaze welcomes families, friends, and multi-generational groups to experience
          everything from bowling and VR to trampolines and arcade battles.
        </p>
      </section>

      {/* MISSION / VISION */}
      <section className="relative py-28">
        <div className="absolute inset-0">
          <Image
            src="/unleash-the-thrill.png"
            alt="Mission Vision Background"
            fill
            className="object-cover opacity-25"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {[
            {
              title: 'MISSION',
              text: 'To deliver thrilling, safe, and inclusive entertainment experiences that bring families and friends closer together.'
            },
            {
              title: 'VISION',
              text: 'To be India’s most loved entertainment brand by blending innovation, excitement, and guest happiness.'
            }
          ].map((item) => (
            <div key={item.title} className="bg-[#161616] rounded-xl p-10">
              <h3 className="font-nasalization text-3xl text-red-600 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative h-[360px] rounded-xl overflow-hidden">
            <Image
              src="/fun-zone-image.png"
              alt="Why Choose Us"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-nasalization text-4xl mb-4">
              WHY CHOOSE US
            </h2>
            <p className="text-gray-400 mb-10">
              What sets us apart and keeps people coming back.
            </p>

            <div className="space-y-6">
              {[
                ['DIVERSE ATTRACTIONS', 'Games and experiences for all age groups'],
                ['TOP-NOTCH SAFETY', 'Strict safety checks and trained staff'],
                ['CUSTOM EVENTS', 'Birthdays, school trips, and corporate parties'],
                ['FRIENDLY VIBES', 'Warm, welcoming, and energetic atmosphere']
              ].map(([title, desc]) => (
                <div key={title} className="border-t border-gray-700 pt-5">
                  <p className="font-bold">{title}</p>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMPTY GREY PANEL (as in image) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto h-[300px] bg-[#2a2a2a] rounded-xl" />
      </section>

      {/* SAFETY PROTOCOLS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[360px] rounded-xl overflow-hidden">
            <Image
              src="/unleash-the-thrill.png"
              alt="Safety Protocols"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="bg-red-600 inline-block px-6 py-2 mb-6 font-nasalization text-xl">
              SAFETY PROTOCOLS
            </div>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li>Your safety is our top priority</li>
              <li>All equipment regularly sanitized</li>
              <li>Trained safety staff at every zone</li>
              <li>Clear height & age guidelines displayed</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
