import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Minimal middleware to force server runtime on Vercel
  return NextResponse.next()
}

export const config = {
  // Match all page routes, exclude static assets and API routes
  // Using simple pattern to avoid capturing group errors
  matcher: [
    '/((?!api|_next|favicon).*)',
  ],
}
