import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/media',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/media',
        permanent: false,
        basePath: false,
      },
      {
        source: '/contact',
        destination: '/media/contact',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
