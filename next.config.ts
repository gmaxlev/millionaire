import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['src/styles'],
    prependData: '@import "utils.scss";',
  },
};

export default nextConfig;
