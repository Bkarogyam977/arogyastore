/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_KEY: '',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'healdiway.bkarogyam.com',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',
      },
    ],
    domains: [
      'main.bkarogyam.com',
      'bkarogyam.com',
      '127.0.0.1',
      'patient.bkarogyam.com',
    ],
  },
};

module.exports = nextConfig;
