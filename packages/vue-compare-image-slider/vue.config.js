module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
  },
  transpileDependencies: ["compare-image-slider"],
};
