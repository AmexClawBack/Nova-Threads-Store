import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: { styledComponents: true },
  transpilePackages: [
    "sanity",
    "next-sanity",
    "@sanity/ui",
    "@sanity/vision",
    "@sanity/icons",
    "styled-components"
  ],
};

export default nextConfig;