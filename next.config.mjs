// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/__/auth/:path(.*)",
        destination: "https://srifoton-2024.firebaseapp.com/__/auth/:path*",
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
