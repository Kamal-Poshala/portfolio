import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the on-screen Next.js dev indicator ("N" badge, bottom-left in dev).
  devIndicators: false,

  // Turbopack's on-disk cache served a stale stylesheet (old globals.css) both in
  // `next dev` and on Vercel, so new CSS never reached the page. Always rebuild it.
  experimental: {
    turbopackFileSystemCacheForBuild: false,
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
