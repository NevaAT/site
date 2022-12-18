/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'infoneps.beget.tech',
        port: '',
        pathname: '/storage/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig