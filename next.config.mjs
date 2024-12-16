import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'smc-test-bucket123.s3.us-east-1.amazonaws.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: ''
      }
    ]
  },
  reactStrictMode: true,
  swcMinify: true
})

export default nextConfig
