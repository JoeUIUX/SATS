import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // ✅ Increase to 10MB (adjust as needed)
    },
  },
};

export default nextConfig;
