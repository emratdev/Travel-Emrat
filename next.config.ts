import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath:
    process.env.NODE_ENV === "production" ? process.env.NEXT_APP_BASE_URL : "",
  output: "standalone",
 reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost:3000",
      },
    ],
  },
};
export default nextConfig;
