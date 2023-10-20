/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cloudflare-ipfs.com'],
      },
      env: {
        API_URL: "https://6527f3b1931d71583df1a378.mockapi.io"
      }
}

module.exports = nextConfig
