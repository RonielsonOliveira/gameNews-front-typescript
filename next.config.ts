import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  target: "serverless",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
