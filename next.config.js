/** @type {import('next').NextConfig} */
const nextConfig = {
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