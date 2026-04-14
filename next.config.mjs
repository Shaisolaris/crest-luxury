/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/crest-luxury',
  assetPrefix: '/crest-luxury/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
