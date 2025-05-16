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
  // Verschiebe skipTrailingSlashRedirect aus experimental auf die oberste Ebene
  skipTrailingSlashRedirect: true,
  experimental: {
    // Entferne esmExternals, da es nicht empfohlen wird
  }
}

export default nextConfig
