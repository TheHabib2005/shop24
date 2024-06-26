/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  images: {
    domains: [
      "static-01.daraz.com.bd",
      "cdn.dummyjson.com",
      "https://devshopbd.com",
      "images.unsplash.com"
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false, //
  },
};

// export default nextConfig;
export default withPlaiceholder(nextConfig);