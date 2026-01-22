'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black border-t border-gray-800 pt-12 pb-8 overflow-hidden">
      {/* Background pattern - abstract red/orange lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path d="M0,300 Q200,200 400,250 T800,280 T1200,300 L1200,400 L0,400 Z" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.3"/>
          <path d="M0,320 Q300,180 600,220 T1200,280 L1200,400 L0,400 Z" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.2"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Newsletter Signup Section */}
          <div className="col-span-1">
            <Image
              src="/Logo-typo-4.png"
              alt="BLAAZE Logo"
              width={120}
              height={50}
              className="h-auto mb-6"
            />
            
            <h3 className="font-nasalization text-lg font-bold text-white mb-4 uppercase">NEWSLETTER SIGNUP</h3>
            <p className="text-white text-sm mb-6 leading-relaxed">
              BLAAZE IS YOUR ULTIMATE DESTINATION FOR THRILL, FUN, AND UNFORGETTABLE MEMORIES - WHERE EVERY GAME LEADS THE THRILL.
            </p>
            
            <form className="mb-4" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="relative flex items-center border-b border-white/30 pb-2 mb-4">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL AD..."
                  className="flex-1 bg-transparent text-white placeholder-white/70 outline-none text-sm"
                />
                <button
                  type="submit"
                  className="ml-2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <label className="flex items-center text-white text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mr-2 w-4 h-4"
                />
                <span>
                  I AGREE TO THE <Link href="/privacy-policy" className="text-red-600 hover:underline">PRIVACY POLICY</Link>.
                </span>
              </label>
            </form>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-nasalization text-lg font-bold text-white mb-4 uppercase">FOLLOW US</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="#" className="hover:text-red-600 transition-colors">FACEBOOK</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-600 transition-colors">TWITTER</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-600 transition-colors">DRIBBLE</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-600 transition-colors">INSTAGRAM</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-nasalization text-lg font-bold text-white mb-4 uppercase">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/" className="hover:text-red-600 transition-colors">HOME</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-red-600 transition-colors">ABOUT US</Link>
              </li>
              <li>
                <Link href="/attractions" className="hover:text-red-600 transition-colors">OUR ATTRACTIONS</Link>
              </li>
              <li>
                <Link href="/plan-a-party" className="hover:text-red-600 transition-colors">PLAN A PARTY</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-600 transition-colors">CONTACT US</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-nasalization text-lg font-bold text-white mb-4 uppercase">CONTACT US</h3>
            <ul className="space-y-3 text-sm text-white">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>EXAMPLE@EMAIL.COM</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0123456789</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>MON-SUN: 11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  MALL OF, IP, MOHKAMPUR,<br />
                  DEHRADUN, MOHKAM PUR KALA,<br />
                  UTTARAKHAND 248005
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 mt-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="uppercase">© 2025 BLAAZE, ALL RIGHTS RESERVED</p>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <p className="uppercase">DEVELOPED BY CURVVTECH</p>
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="absolute right-0 bottom-0 w-10 h-10 bg-black border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
