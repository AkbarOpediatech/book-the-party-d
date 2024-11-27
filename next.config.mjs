import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true' // Enable only when ANALYZE=true
})({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: ''
      }
    ]
  },
  reactStrictMode: true, // Your existing Next.js configuration
  swcMinify: true
})

export default nextConfig
