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
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,
  // Korrigierte Konfiguration
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  // Verschoben von experimental.serverComponentsExternalPackages
  serverExternalPackages: [],
  poweredByHeader: false
}

export default nextConfig
