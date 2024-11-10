import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disables ESLint checks during build process
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optionally, you can disable type checking in production as well
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  // You can also define any additional custom configurations here
  webpack(config) {
    // Example: You can modify the webpack configuration if needed
    return config;
  },
};

export default nextConfig;
