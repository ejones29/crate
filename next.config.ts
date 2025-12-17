import { dirname } from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Specifies the absolute path to the root directory for Turbopack
  turbopack: {
    root: dirname(__filename),
  },
};

export default nextConfig;
