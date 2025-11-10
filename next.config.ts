import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint checks on production build
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Skip TS errors (optional if needed)
  },
};

export default nextConfig;
