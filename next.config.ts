import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Uncomment the following lines if you want to enable TypeScript error suppression
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
