/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ✅ Redirect non-www to www
      {
        source: "/:path*",
        has: [{ type: "host", value: "growedgex.com" }],
        destination: "https://www.growedgex.com/:path*",
        permanent: true,
      },
 
    ];
  },
};

export default nextConfig;
