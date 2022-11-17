/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{appDir: true},
  images: {
    domains: ['admin.prensaobrera.com'],
  }
}

module.exports = nextConfig
