import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Recommended for Studio + styled-components v6
  compiler: { styledComponents: true },
  transpilePackages: [
    "sanity",
    "@sanity/ui",
    "next-sanity",
    "@sanity/vision",
    "styled-components"
  ],
  // If you already had other options, add them back here as needed
};

export default nextConfig;