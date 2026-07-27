/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // `@splinetool/react-spline` ships ESM-only with an `import`-only exports map,
  // which webpack's server pass cannot resolve on its own.
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],

  // Barrel files like `lucide-react` otherwise pull the whole icon set into the
  // client graph; this rewrites imports down to the icons actually used.
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  compiler: {
    // Strip console noise from production bundles (keep errors/warnings).
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Don't advertise the framework version.
  poweredByHeader: false,
};

export default nextConfig;
