import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable automatic scroll restoration - we handle it manually
  experimental: {
    scrollRestoration: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-00cafda969bc42d5aac5365b6609f526.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '*.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'pub-00cafda969bc42d5aac5365b6609f526.r2.dev',
      },
      {
        protocol: 'https',
        hostname: '*.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'cordova.apache.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'supabase.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'vercel.com',
      },
      {
        protocol: 'https',
        hostname: 'render.com',
      },
      {
        protocol: 'https',
        hostname: 'clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.auth0.com',
      },
      {
        protocol: 'https',
        hostname: 'jwt.io',
      },
      {
        protocol: 'https',
        hostname: 'oauth.net',
      },
      {
        protocol: 'https',
        hostname: 'ssl.com',
      },
      {
        protocol: 'https',
        hostname: 'www.passportjs.org',
      },
      {
        protocol: 'https',
        hostname: 'vitejs.dev',
      },
      {
        protocol: 'https',
        hostname: 'eslint.org',
      },
      {
        protocol: 'https',
        hostname: 'prettier.io',
      },
    ],
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],
    // Configure quality levels
    qualities: [75, 80, 85, 90, 95],
    // Optimize image loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
