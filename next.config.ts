import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Thirdweb pulls in @coinbase/cdp-sdk which has broken peer deps (@x402/svm etc.)
  // Mark them as external so they never get bundled at all.
  serverExternalPackages: [
    "@coinbase/cdp-sdk",
    "@base-org/account",
  ],
};

export default nextConfig;
