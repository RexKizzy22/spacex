/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "nextjs.org",
        protocol: "https",
        pathname: "**",
      },
      {
        hostname: "www.prisma.io",
        protocol: "https",
        pathname: "**",
      },
      {
        hostname: "tailwindcss.com",
        protocol: "https",
        pathname: "**",
      },
      {
        hostname: "www.apollographql.com",
        protocol: "https",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
