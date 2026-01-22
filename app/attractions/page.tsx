import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const attractions = [
  { id: 'go-karting', name: 'GO-KARTING FUN!', slug: 'go-karting', image: '/go-karting.jpg' },
  { id: 'bowling', name: 'BOWLING', slug: 'bowling', image: '/bowling.jpg' },
  { id: 'trampoline', name: 'TRAMPOLINE TIME', slug: 'trampoline', image: '/trampoline.jpg' },
  { id: 'vr', name: 'VR & SPECIAL ACTIVITIES', slug: 'vr', image: '/vr.jpg' },
  { id: 'bumper-cars', name: 'BUMPER CARS', slug: 'bumper-cars', image: '/bumper-cars.jpg' },
  { id: 'arcade', name: 'ARCADE GAMES', slug: 'arcade', image: '/arcade.jpg' },
]

export default function Attractions() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 pb-36 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/fun-zone-image.png"
            alt="Attractions Hero"
            fill
            className="object-cover opacity-35"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-nasalization text-6xl md:text-8xl mb-4">
            OUR ATTRACTIONS
          </h1>
          <p className="text-xs tracking-widest uppercase text-gray-300">
            ENTERTAINMENT | ADVENTURE | GAMING ZONE
          </p>
        </div>
      </section>

      {/* ATTRACTIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((item) => (
              <Link
                key={item.id}
                href={`/attractions/${item.slug}`}
                className="group relative aspect-square overflow-hidden rounded-xl bg-black"
              >
                <Image
                  src="/fun-zone-image.png"
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />

                {/* Bottom Text */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                  <p className="text-[10px] tracking-widest uppercase text-gray-300 mb-2">
                    SERVICES
                  </p>
                  <h3 className="font-nasalization text-2xl leading-tight">
                    {item.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PLAY MORE, WIN BIG */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative aspect-[16/7] rounded-xl overflow-hidden mb-14">
            <Image
              src="/unleash-the-thrill.png"
              alt="Prize Counter"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* Text Panel */}
          <div className="max-w-4xl mx-auto bg-[#151515] rounded-xl px-10 py-14 text-center">
            <h2 className="font-nasalization text-4xl md:text-5xl text-red-600 mb-4">
              PLAY MORE, WIN BIG!
            </h2>
            <p className="font-bold text-lg mb-4">
              Win Tickets &gt; Claim Gifts &gt; Keep Playing
            </p>
            <p className="text-gray-300 leading-relaxed">
              Turn your game-time into gift-time! Trade tickets from your favorite games
              for exciting rewards — from plush toys to cool gadgets.
              The more you play, the bigger the win!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
