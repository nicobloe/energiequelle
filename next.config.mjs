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
    domains: ['placeholder.com', 'v0.blob.com', 'images.pexels.com', 'blob.v0.dev'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  poweredByHeader: false,
  compress: true,
  // Entferne experimentelle Features die Probleme verursachen könnten
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
