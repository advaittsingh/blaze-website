import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  )
}
