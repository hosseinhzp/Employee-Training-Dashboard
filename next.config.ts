import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: 'concurrent',
  },
}

module.exports = nextConfig
