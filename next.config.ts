import type { NextConfig } from "next";
import("@opennextjs/cloudflare").then((m) =>  m.initOpenNextCloudflareForDev()
);

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/*": [
      "./content/experiments/**"
    ],
  },
};

export default nextConfig;