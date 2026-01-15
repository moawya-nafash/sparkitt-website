import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sparkitt-website",
  assetPrefix: "/sparkitt-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
