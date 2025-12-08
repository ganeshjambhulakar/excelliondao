/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for optimized production builds
  // Disabled for Vercel (Vercel handles deployment differently)
  // Enable for custom server deployments
  output: process.env.VERCEL ? undefined : (process.env.DISABLE_STANDALONE === 'true' ? undefined : 'standalone'),
  
  // Production optimizations
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Security headers (additional to Express helmet)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
  
  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Experimental features disabled for Vercel compatibility
  // optimizeCss requires 'critters' package and can cause build issues
  // experimental: {
  //   optimizeCss: true,
  // },
  
  // Webpack configuration to reduce memory usage
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Reduce memory usage for client-side builds
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
      };
    }
    return config;
  },
};

export default nextConfig;
