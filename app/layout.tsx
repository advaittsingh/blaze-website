import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

// Force Node.js runtime to avoid __dirname errors in font loading
export const runtime = 'nodejs'

const nasalization = localFont({
  src: './fonts/nasalization.ttf',
  variable: '--font-nasalization',
  display: 'swap',
})

const poppinsMedium = localFont({
  src: './fonts/Poppins-Medium.ttf',
  variable: '--font-poppins-medium',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BLAAZE - Lead The Thrill',
  description: 'BLAAZE Entertainment Center - Discover the Fun Zone',
  icons: {
    icon: '/Logo-typo-4.png',
    apple: '/Logo-typo-4.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nasalization.variable} ${poppinsMedium.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  )
}
