module.exports = {
  images: {
    domains: ['source.unsplash.com', 'github.com', 'images.prismic.io'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
