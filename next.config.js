const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/Home',
      },
    ]
  },
}

module.exports = nextConfig
