module.exports = {
  stories: [
    // Paths to the story files
    "../pages/*.stories.mdx",
    "../pages/*.stories.js",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        "sass-loader",
      ],
    })

    return config
  },
};
