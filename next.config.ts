import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  serverExternalPackages: [],
  images: {},
  experimental: {
    ppr: false,
    optimizeCss: false,
    optimisticClientCache: true,
    optimizeServerReact: true,
    optimizePackageImports: [],
    serverMinification: true
  },
  rewrites: async () => [
    {
      source: '/api/chat',
      destination: `${process.env.NEXT_PUBLIC_APP_URL}/v1/chat`
    },
    {
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_APP_URL}/:path*`
    }
  ]
}

export default nextConfig
