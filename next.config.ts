import type { NextConfig } from "next";
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/*": [
      "./content/experiments/**/*.json"
    ]
  }
};

export default nextConfig;