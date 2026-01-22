/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Ensure server-side rendering uses Node.js runtime
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

export default nextConfig
