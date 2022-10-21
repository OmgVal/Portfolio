/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // supply an array of trusted image domains
    domains: ['media.giphy.com']
  }
}

module.exports = nextConfig
