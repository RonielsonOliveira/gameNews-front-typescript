import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
