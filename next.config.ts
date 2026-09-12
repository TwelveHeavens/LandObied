import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.15", "10.99.91.175", "172.18.0.1", "10.126.178.175"],
  output: "standalone",
};

export default nextConfig;
