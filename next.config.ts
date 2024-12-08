import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.narailerkagoj.com",
      }
    ],
  },
};

export default nextConfig;
