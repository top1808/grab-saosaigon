/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    return config;
  },
  env: {
    GOOGLE_PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_SERVICE_PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY,
    SPREADSHEET_ID: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
    GMAIL_PASSWORD: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
    DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};

module.exports = nextConfig;
