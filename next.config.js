// next.config.js
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
module.exports = withPlugins([
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
      imagesPublicPath: "/my-website/_next/static/images/",
    },
  ],
  withImages(),
  {
    basePath: "/my-website",
    assetPrefix: "/my-website/",
  },
]);
