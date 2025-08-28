// import type { NextConfig } from "next";
import path from "path";

// const nextConfig: NextConfig = {
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
  // Uncomment the following lines if you want to enable TypeScript error suppression
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
