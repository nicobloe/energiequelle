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
  // Füge diese Option hinzu, um Probleme mit der JSON-Serialisierung zu beheben
  experimental: {
    serverComponentsExternalPackages: [],
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  // Füge diese Option hinzu, um sicherzustellen, dass Next.js die richtige Middleware verwendet
  poweredByHeader: false,
  // Füge diese Option hinzu, um Probleme mit der API-Handhabung zu beheben
  api: {
    responseLimit: false
  }
}

export default nextConfig
