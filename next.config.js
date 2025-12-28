/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Optimize for faster development
  swcMinify: true,
  compiler: {
    removeConsole: false,
  },
  // Enable standalone output for Docker deployment
  output: 'standalone',
  // Reduce file system operations
  onDemandEntries: {
    // Keep pages in memory longer
    maxInactiveAge: 60 * 1000,
    // Reduce number of pages that can be kept in memory
    pagesBufferLength: 5,
  },
  // Use memory-based cache for development to avoid OneDrive file locking issues
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Use memory filesystem for webpack cache in development
      config.cache = {
        type: 'memory',
      };
    }
    return config;
  },
};

module.exports = nextConfig;








