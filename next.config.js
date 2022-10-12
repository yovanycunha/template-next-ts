const withImages = require('next-images');
const withFonts = require('nextjs-fonts');

module.exports = withImages(
  withFonts({
    sassOptions: {
      cssModules: true,
      includePaths: ['./src'],
    },
    images: {
      domains: [],
      deviceSizes: [360, 375, 768, 1024, 1440],
      disableStaticImages: true,
      formats: ['image/webp'],
    },
    pageExtensions: ['page.tsx'],
    fileExtensions: ['jpg', 'jpeg', 'png', 'webp'],
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
    env: {
      STAGE: process.env.STAGE,
    },
  })
);
