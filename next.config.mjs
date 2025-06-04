import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    google_api_kit: process.env.GOOGLE_API_KIT,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
  webpack: (config) => {
    config.module.exprContextCritical = false;
    return config;
  }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
