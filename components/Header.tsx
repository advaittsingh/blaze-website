import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo-typo-4.png"
            alt="BLAAZE Logo"
            width={150}
            height={60}
            className="h-auto"
            priority
          />
        </Link>
        <ul className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide">
          <li>
            <Link href="/" className="hover:text-blaaze-orange transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-blaaze-orange transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/attractions" className="hover:text-blaaze-orange transition-colors">
              Our Attractions
            </Link>
          </li>
          <li>
            <Link href="/plan-a-party" className="hover:text-blaaze-orange transition-colors">
              Plan A Party
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blaaze-orange transition-colors">
              Contact
            </Link>
          </li>
        </ul>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
