import assert from "node:assert";
import { dirname } from "node:path";
import type { NextConfig } from "next";

console.log(process.env.BLOB_BASE_URL);
assert(process.env.BLOB_BASE_URL, "you must have defined BLOB_BASE_URL");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(`${process.env.BLOB_BASE_URL}/**`)],
  },
  // Specifies the absolute path to the root directory for Turbopack
  turbopack: {
    root: dirname(__filename),
  },
};

export default nextConfig;
