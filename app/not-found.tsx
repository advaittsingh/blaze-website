import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center">
      <Header />
      <div className="text-center px-6">
        <h1 className="font-nasalization text-6xl md:text-8xl mb-6 text-red-600">404</h1>
        <h2 className="font-nasalization text-3xl md:text-4xl mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-wide hover:bg-red-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
      <Footer />
    </main>
  )
}
