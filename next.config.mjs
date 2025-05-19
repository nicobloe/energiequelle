/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.com', 'v0.blob.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,
  // Korrigierte Konfiguration
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    },
    optimizePackageImports: ['lucide-react'],
  },
  // Verschoben von experimental.serverComponentsExternalPackages
  serverExternalPackages: [],
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
