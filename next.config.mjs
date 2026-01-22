/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  // Ensure proper output for Vercel
  output: undefined, // Let Vercel auto-detect (don't force static export)
}

export default nextConfig
