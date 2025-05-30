import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Temporarily disable strict mode for debugging hydration issues
  reactStrictMode: false,
  
  // Configure webpack to handle SSR better
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Client-side specific configuration
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase to 10MB (adjust as needed)
    },
  },
};

export default nextConfig;
