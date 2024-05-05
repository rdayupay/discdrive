/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/shop/products',
        permanent: false,
      },
    ];
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
