const autoPreprocess = require("svelte-preprocess");

module.exports = {
  stories: ["../stories/**/*.stories.ts"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/preset-typescript",
  ],
  webpackFinal: async (config) => {
    config.module.rules = [
      {
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        loader: require.resolve("file-loader"),
        options: {
          name: "static/media/[name].[hash:8].[ext]",
          esModule: false,
        },
      },
      {
        test: /\.svelte$/,
        use: {
          loader: require.resolve("svelte-loader"),
          options: {
            preprocess: autoPreprocess(),
          },
        },
      },
    ];

    return config;
  },
};
