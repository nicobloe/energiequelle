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
    unoptimized: true,
  },
  poweredByHeader: false,
  compress: true,
  // Deaktiviere Build-Tracing um das Problem zu umgehen
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
      ],
    },
  },
  // Reduziere die Anzahl der zu verfolgenden Dateien
  outputFileTracing: false,
}

export default nextConfig
