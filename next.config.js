/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPreact = require('next-plugin-preact');

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([[withBundleAnalyzer], [withPWA], [withPreact]], {
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
