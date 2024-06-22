/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static-01.daraz.com.bd",
      "cdn.dummyjson.com",
      "https://devshopbd.com",
      "localhost"
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false, //
  },
};

export default nextConfig;
