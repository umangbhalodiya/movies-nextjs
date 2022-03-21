/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com", "example2.com"],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
