// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/local' }],
  },
  eslint: {
    dirs: ['appDir', 'app', './app'],
  },
}

module.exports = nextConfig
