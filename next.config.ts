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
    // 画像最適化の設定
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1年キャッシュ
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
      // 2027新卒 鈑金塗装職LP: クリーンURL(/entry/...)を /media 配下の実体へ誘導
      // ※このアプリは basePath:'/media' のため実体は /media/entry/... に配信される
      {
        source: '/entry/gulliver/newgraduate',
        destination: '/media/entry/gulliver/newgraduate',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
