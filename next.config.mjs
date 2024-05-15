import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  compiler: {
    emotion: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
};

const withMDX = mdx({});

export default withMDX(nextConfig);
