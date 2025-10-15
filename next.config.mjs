/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect non-www to www (important for SEO + domain consistency)
      {
        source: "/:path*",
        has: [{ type: "host", value: "growedgex.com" }],
        destination: "https://www.growedgex.com/:path*",
        permanent: true,
      },
      // Redirect HTTP to HTTPS (Vercel usually does this automatically, but we include it for completeness)
      {
        source: "/(.*)",
        destination: "https://www.growedgex.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
