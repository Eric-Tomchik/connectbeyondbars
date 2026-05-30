import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.convex.cloud",
      },
    ],
  },
  // Skip TS checking during Cloudflare builds — Convex _generated types
  // are produced by `npx convex dev` and not committed to git.
  // Type checking should run locally or in a separate CI step.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
