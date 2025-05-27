import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  serverExternalPackages: [],
  images: {},
  experimental: {
    optimizeCss: false,
    optimisticClientCache: true,
    optimizeServerReact: true,
    optimizePackageImports: [],
    serverMinification: true
  }
}

export default nextConfig
