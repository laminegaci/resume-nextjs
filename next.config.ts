import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint checks on production build
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Skip TS errors (optional if needed)
  },
  images: {
    unoptimized: true, // 👈 disables Next.js image optimization
  },
};

export default nextConfig;
