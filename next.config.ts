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
      destination:
        process.env.NODE_ENV === 'development'
          ? 'http://127.0.0.1:8000/api/v1/chat'
          : '/api/'
    }
  ]
}

export default nextConfig
