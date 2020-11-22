// next.config.js
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const config = {
  basePath: "/my-website",
  assetPrefix: "/my-website/",
};
module.exports = withPlugins([withImages()], config);
