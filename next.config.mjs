/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Specific trusted domains
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "png.pngtree.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sfs.com.tr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.pngkey.com",
        pathname: "/**",
      },

      // ✅ Optional: Allow all HTTPS images (use carefully)
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
