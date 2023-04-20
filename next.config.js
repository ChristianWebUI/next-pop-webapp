/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  }
}

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com'
      }
    ]
  },
  env: {
    APOLLO_CLIENT_URI: 'http://localhost:4000/graphql',
    MONGODB_URI:
      'mongodb+srv://christian-pop-db:Ndz5qsZl96rRiKOs@cluster0.iq5nbpo.mongodb.net/pop-stationery-database?retryWrites=true&w=majority',
    MERCADOPAGO_PUBLIC_KEY: 'TEST-b880659d-e34b-4ba7-9845-c1de28680582'
  }
}
