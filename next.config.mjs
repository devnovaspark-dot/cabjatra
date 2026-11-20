/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/book-online-taxi-in-cuttack",
        destination: "/book-online-taxi-in-kataka",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
