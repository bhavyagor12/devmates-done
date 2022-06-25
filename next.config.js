/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rules: [],
};

module.exports = nextConfig;

const withVideos = require("next-videos");

module.exports = withVideos();
