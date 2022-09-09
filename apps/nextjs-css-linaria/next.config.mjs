import withLinaria from "next-linaria";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    concurrentFeatures: true,
  },
};

export default withLinaria(nextConfig);
