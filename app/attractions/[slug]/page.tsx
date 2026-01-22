import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const attractions: Record<string, {
  name: string
  slogan: string
  description: string
  heroImage: string
  location: string
  price: string
  rounds: string
  duration: string
  minHeight: string
  ageLimit: string
  thrillLevel: number
  galleryImages: string[]
}> = {
  'go-karting': {
    name: 'GO-KARTING',
    slogan: 'Fuel Your Thrill. Rule the Track.',
    description: 'Unleash your inner racer at Blaaze! Whether you\'re a speed junkie or a first-time driver, our high-performance go-karts and professionally designed tracks promise an adrenaline-packed experience for all ages. Safe, thrilling, and seriously fun — get ready to race, drift, and dominate the track!',
    heroImage: '/go-karting.jpg',
    location: 'Mall of Dehradun',
    price: '₹400',
    rounds: '5 Rounds',
    duration: '5–7',
    minHeight: '3.5 FT',
    ageLimit: '11+ YRS',
    thrillLevel: 5,
    galleryImages: ['/go-karting.jpg', '/go-karting.jpg', '/go-karting.jpg', '/go-karting.jpg', '/go-karting.jpg', '/go-karting.jpg']
  },
  'bowling': {
    name: 'BOWLING',
    slogan: 'Strike the Fun. Roll into Action.',
    description: 'Perfect your bowling skills in our state-of-the-art lanes. Experience the thrill of knocking down pins in our modern, neon-lit bowling alley. Fun for the whole family with professional lanes and a vibrant atmosphere!',
    heroImage: '/bowling.jpg',
    location: 'Mall of Dehradun',
    price: '₹300',
    rounds: '1 Game',
    duration: '15–20',
    minHeight: '3 FT',
    ageLimit: '6+ YRS',
    thrillLevel: 3,
    galleryImages: ['/bowling.jpg', '/bowling.jpg', '/bowling.jpg', '/bowling.jpg', '/bowling.jpg', '/bowling.jpg']
  },
  'trampoline': {
    name: 'TRAMPOLINE TIME',
    slogan: 'Bounce Higher. Jump Further.',
    description: 'Defy gravity in our thrilling trampoline park with various zones and activities. Jump, flip, and soar through the air in our safe and exciting trampoline arena. Perfect for kids and adults who love high-flying fun!',
    heroImage: '/trampoline.jpg',
    location: 'Mall of Dehradun',
    price: '₹350',
    rounds: '30 Min',
    duration: '30',
    minHeight: '3 FT',
    ageLimit: '5+ YRS',
    thrillLevel: 4,
    galleryImages: ['/trampoline.jpg', '/trampoline.jpg', '/trampoline.jpg', '/trampoline.jpg', '/trampoline.jpg', '/trampoline.jpg']
  },
  'vr': {
    name: 'VR & SPECIAL ACTIVITIES',
    slogan: 'Enter New Worlds. Experience Reality.',
    description: 'Immerse yourself in virtual reality adventures with cutting-edge VR technology. Step into alternate realities and experience gaming like never before! From action-packed adventures to mind-bending puzzles, we have it all.',
    heroImage: '/vr.jpg',
    location: 'Mall of Dehradun',
    price: '₹500',
    rounds: '1 Session',
    duration: '15–20',
    minHeight: '3 FT',
    ageLimit: '8+ YRS',
    thrillLevel: 5,
    galleryImages: ['/vr.jpg', '/vr.jpg', '/vr.jpg', '/vr.jpg', '/vr.jpg', '/vr.jpg']
  },
  'bumper-cars': {
    name: 'BUMPER CARS',
    slogan: 'Bump, Spin, and Laugh!',
    description: 'Get ready to bump, spin, and laugh in our colorful bumper car arena! Perfect for families and friends looking for fun-filled excitement. Crash into friends, spin around, and create unforgettable memories in our neon-lit arena.',
    heroImage: '/bumper-cars.jpg',
    location: 'Mall of Dehradun',
    price: '₹250',
    rounds: '5 Min',
    duration: '5',
    minHeight: '3 FT',
    ageLimit: '6+ YRS',
    thrillLevel: 4,
    galleryImages: ['/bumper-cars.jpg', '/bumper-cars.jpg', '/bumper-cars.jpg', '/bumper-cars.jpg', '/bumper-cars.jpg', '/bumper-cars.jpg']
  },
  'arcade': {
    name: 'ARCADE GAMES',
    slogan: 'Play Hard. Win Big.',
    description: 'Classic and modern arcade games for all ages. Win tickets and redeem prizes! From nostalgic classics to cutting-edge games, we have it all. Play your favorite games and collect tickets to claim amazing rewards!',
    heroImage: '/arcade.jpg',
    location: 'Mall of Dehradun',
    price: '₹200',
    rounds: 'Per Game',
    duration: '5–10',
    minHeight: 'N/A',
    ageLimit: 'All Ages',
    thrillLevel: 3,
    galleryImages: ['/arcade.jpg', '/arcade.jpg', '/arcade.jpg', '/arcade.jpg', '/arcade.jpg', '/arcade.jpg']
  },
}

export default async function AttractionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const attraction = attractions[slug]

  if (!attraction) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              OUR ATTRACTIONS
            </p>

            <h1 className="font-nasalization text-4xl md:text-5xl text-red-600 mb-4">
              {attraction.name}
            </h1>

            <p className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
              {attraction.slogan.split('. ').map((line, i, arr) => (
                <span key={i}>
                  {line}{i < arr.length - 1 ? '.' : ''}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>

            <Link
              href="/plan-a-party"
              className="inline-block border border-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
            >
              Book Now!
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative aspect-[4/5] bg-black">
            <Image
              src={attraction.heroImage}
              alt={attraction.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-3 right-4 text-xs text-gray-300">
              Thrill meter&nbsp;&nbsp;{[...Array(5)].map((_, i) => (
                <span key={i} className={i < attraction.thrillLevel ? 'text-red-600' : 'text-gray-600'}>⚡</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-14 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-300 leading-relaxed mb-4">
            {attraction.description}
          </p>

          <p className="text-sm text-gray-400">
            Available at <span className="text-red-600">{attraction.location}</span>
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div>
            <p className="text-2xl font-bold mb-1">{attraction.price}</p>
            <p className="text-xs uppercase text-gray-400">{attraction.rounds}</p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-1">{attraction.duration}</p>
            <p className="text-xs uppercase text-gray-400">Minutes</p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-1">{attraction.minHeight}</p>
            <p className="text-xs uppercase text-gray-400">Minimum Height</p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-1">{attraction.ageLimit}</p>
            <p className="text-xs uppercase text-gray-400">Age Limit</p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {attraction.galleryImages.map((img, i) => (
            <div key={i} className="relative aspect-square bg-black">
              <Image
                src={img}
                alt={`${attraction.name} Gallery ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
