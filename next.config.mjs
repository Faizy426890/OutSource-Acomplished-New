/** @type {import('next').NextConfig} */
const nextConfig = {
 async redirects() {
  return [
    {
      source: '/',
      destination: 'https://www.growedgex.com',
      permanent: true,
    },
  ];
}
};

export default nextConfig;
