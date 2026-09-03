/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF first (best compression), fall back to WebP — both beat PNG on mobile
    formats: ["image/avif", "image/webp"],
  },

  compiler: {
    // Strip console.log calls from production bundles; keep console.error
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;
