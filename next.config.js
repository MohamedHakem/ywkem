/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
    mode: 'production',
  },
  images: {
    domains: ['dummyimage.com', 'links.papareact.com'],
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
})
