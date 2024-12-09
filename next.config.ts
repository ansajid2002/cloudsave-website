import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ydbvalvesbck.demo-web.live",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },


};

export default nextConfig;
