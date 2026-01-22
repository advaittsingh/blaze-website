'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const locations = [
    {
      id: '01',
      name: 'MALL OF DEHRADUN',
      address: '3rd floor, Mall of Dehradun, IP, Mohkampur, Dehradun, Mohkam Pur Kala, Uttarakhand 248006',
      timings: '11 AM - 10:30 PM | MON - SUN',
      contact: '+91 726 990 0758 | +91 955 580 0600',
    },
    {
      id: '02',
      name: 'MALL OF FARIDABAD',
      address: '5th Floor, The Mall Of Faridabad, 6L, Mehra Rd, Aravali Golf Course, New Industrial Township, Faridabad, Haryana 121001',
      timings: '10:30 AM - 11:00 PM | MON - SUN',
      contact: '+91 726 990 0758 | +91 955 580 0600',
    },
    {
      id: '03',
      name: 'PACIFIC MALL, NSP',
      address: 'Ground Floor, Pacific mall, Netaji Subhash Place, Shakurpur, Delhi, 110034',
      timings: '11 AM - 11:00 PM | MON - SUN',
      contact: '+91 726 990 0758 | +91 955 580 0600',
    },
  ]

  const faqs = [
    {
      question: 'WHAT IS THE MINIMUM NUMBER OF GUESTS FOR A PARTY BOOKING?',
      answer: 'The minimum number of guests for a party booking is typically 10 people. However, we can accommodate smaller groups with custom packages.',
    },
    {
      question: 'CAN WE BRING OUR OWN CAKE OR DECORATIONS?',
      answer: 'Yes, you are welcome to bring your own cake and decorations. We also offer professional decoration services if you prefer.',
    },
    {
      question: 'ARE ATTRACTIONS INCLUDED IN PARTY PACKAGES?',
      answer: 'Yes, all our party packages include access to selected attractions. The number of attractions depends on the package you choose.',
    },
    {
      question: 'HOW FAR IN ADVANCE SHOULD WE BOOK?',
      answer: 'We recommend booking at least 2-3 weeks in advance to ensure availability, especially for weekends and holidays.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-32 min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/fun-zone-image.png"
            alt="Contact Hero"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="font-nasalization text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Find <span className="text-red-600">Us</span>, Feel the <span className="text-red-600">Thrill</span><br />
            We&apos;re Closer Than You Think!
          </h1>
          <p className="text-sm md:text-base uppercase tracking-widest text-gray-300">
            DEHRADUN | DELHI | NOIDA
          </p>
        </div>
      </section>

      {/* Location Details Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          {locations.map((location) => (
            <div key={location.id} className="grid md:grid-cols-2 gap-8 items-center">
              {/* Map Placeholder */}
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/unleash-the-thrill.png"
                  alt={`${location.name} Map`}
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-blaaze-grey/80 flex items-center justify-center">
                  <span className="text-white text-sm uppercase tracking-wide">MAP</span>
                </div>
              </div>

              {/* Location Info */}
              <div>
                <h3 className="font-nasalization text-2xl md:text-3xl text-white mb-6">
                  {location.id} {location.name}
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm">{location.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm">{location.timings}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-sm">{location.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Heading */}
            <div>
              <h2 className="font-nasalization text-4xl md:text-5xl lg:text-6xl text-red-600 leading-tight">
                HAVE QUESTIONS?<br />GET IN TOUCH!
              </h2>
            </div>

            {/* Right Side - Form */}
            <div className="bg-blaaze-grey rounded-xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm uppercase tracking-wide mb-2">
                      NAME
                    </label>
                    <div className="relative">
                      <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full pl-10 pr-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white text-sm uppercase tracking-wide mb-2">
                      EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full pl-10 pr-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white text-sm uppercase tracking-wide mb-2">
                      PHONE
                    </label>
                    <div className="relative">
                      <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full pl-10 pr-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600"
                        placeholder="+91 123 456 7890"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white text-sm uppercase tracking-wide mb-2">
                      SUBJECT
                    </label>
                    <div className="relative">
                      <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full pl-10 pr-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-white text-sm uppercase tracking-wide mb-2">
                    LOCATION
                  </label>
                  <div className="relative">
                    <select
                      id="location"
                      name="location"
                      className="w-full pl-4 pr-10 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 appearance-none"
                    >
                      <option value="dehradun">DEHRADUN</option>
                      <option value="faridabad">FARIDABAD</option>
                      <option value="nsp">NSP</option>
                    </select>
                    <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm uppercase tracking-wide mb-2">
                    HOW CAN WE HELP YOU? FEEL FREE TO GET IN TOUCH
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wide hover:bg-red-700 transition-colors"
                >
                  Get in Touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/fun-zone-image.png"
                alt="FAQ Section"
                fill
                className="object-cover"
              />
            </div>

            {/* Right FAQ */}
            <div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-white/10 pb-4">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <p className="text-white text-sm md:text-base pr-4">{faq.question}</p>
                      <span className="text-red-600 text-xl flex-shrink-0">
                        {openFAQ === index ? '−' : '+'}
                      </span>
                    </button>
                    {openFAQ === index && (
                      <p className="text-gray-400 text-sm mt-3">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
