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
    }
  ]
}

export default nextConfig
