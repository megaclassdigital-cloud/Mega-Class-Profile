/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProduction ? 'https://mega-class-profile.vercel.app' : undefined,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.supabase.co' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/jasa-pembuatan-website',
        permanent: true, // 308 permanent redirect untuk SEO
      },
    ];
  },
};

module.exports = nextConfig;
