/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { hostname: "*.public.blob.vercel-storage.com" },
      { hostname: "tkyy9tub5efxttep.public.blob.vercel-storage.com" },
      { hostname: "4mkwknnmlp45gfn8.public.blob.vercel-storage.com" },
      { hostname: "rm9cehwjzivcimqc.public.blob.vercel-storage.com" },
      { hostname: "qms1staoyjyffvwr.public.blob.vercel-storage.com" },
    ],
  },
  compress: true,
}

export default nextConfig
