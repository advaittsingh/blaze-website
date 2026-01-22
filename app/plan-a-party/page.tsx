import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import PartyPackages from '@/components/PartyPackages'

export default function PlanAParty() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 pb-40">
        <div className="absolute inset-0">
          <Image
            src="/fun-zone-image.png"
            alt="Party Hero"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="relative bg-black/70 border border-white/10 rounded-xl px-12 py-16 text-center">

            {/* Gifts */}
            <Image
              src="/gift.png"
              alt=""
              width={44}
              height={44}
              className="absolute left-[-22px] top-1/2 -translate-y-1/2"
            />
            <Image
              src="/gift.png"
              alt=""
              width={44}
              height={44}
              className="absolute right-[-22px] top-1/2 -translate-y-1/2"
            />

            <h1 className="font-nasalization text-4xl md:text-6xl leading-tight mb-6">
              Where Every Celebration Sparks<br />
              Thrill and Lasting Memories!
            </h1>

            <div className="inline-block border border-white/30 px-6 py-2 text-xs tracking-widest mb-6">
              DEHRADUN | DELHI | NOIDA
            </div>

            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Choose from our power-packed birthday bundles, enjoy unlimited games,
              and let the good times roll. Whether it’s a small gathering or a mega bash,
              Blaaze brings the thrill closer than ever!
            </p>

            <Link
              href="/contact"
              className="inline-block border border-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT BLAAZE BRINGS */}
      <section className="py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-nasalization text-4xl md:text-5xl text-red-600 text-center mb-4">
            WHAT BLAAZE BRINGS TO THE PARTY
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Parties made easy with unlimited games, party hosts, surprise gifts,
            e-invites, and unmatched fun.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-14 text-center">
            {[
              ['01', 'CORPORATE EVENTS'],
              ['02', 'BIRTHDAY PARTIES'],
              ['03', 'SCHOOLS & UNIVERSITIES'],
              ['04', 'CUSTOM PACKAGES'],
            ].map(([num, label]) => (
              <div key={num}>
                <p className="text-red-600 text-5xl font-bold mb-3">{num}</p>
                <p className="font-nasalization text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIRTHDAY OFFERS */}
      <section className="py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[420px_1fr] gap-16 items-center">
          
          {/* Image */}
          <div className="relative aspect-[3/4]">
            <Image
              src="/fun-zone-image.png"
              alt="Birthday Party"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-red-600 font-nasalization text-xl mb-2">
              Birthday Offers
            </p>
            <h2 className="font-nasalization text-5xl mb-8 leading-tight">
              PLANNING A<br />BIRTHDAY?
            </h2>

            <ul className="space-y-4 mb-10">
              {[
                'VR Combo Pack only ₹999 (Limited time)',
                'Free party host for birthday events over ₹5000',
                'Surprise return gift for the birthday child',
                'Unlimited Arcade Gaming',
                'Complimentary digital E-invites',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-red-600">|</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="text-red-600 underline underline-offset-4 font-bold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* PARTY PACKAGES */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-center mb-3">
            Ignite the Celebration
          </p>
          <h2 className="font-nasalization text-5xl text-center mb-16">
            PARTY PACKAGES
          </h2>

          <PartyPackages />

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-red-600 px-14 py-4 text-lg font-bold uppercase hover:bg-red-700 transition"
            >
              Book Your Celebration
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
