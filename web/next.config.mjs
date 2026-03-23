import { legacyRedirects } from "./config/routes.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
