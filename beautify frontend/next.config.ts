import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase to 10MB (adjust as needed)
    },
  },
  // Force Next.js dev server to use localhost instead of 127.0.0.1
  async headers() {
    return []
  },
  // Configure dev server options
  webpack: (config, { dev, isServer }) => {
    return config
  }
};

export default nextConfig;
