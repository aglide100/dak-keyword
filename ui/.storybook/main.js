module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    // "../src/components/**/*.stories.mdx",
    // "../src/components/**/*.stories.@(js|jsx|ts|tsx)",

    "../src/components/**/**/*.stories.mdx",
    "../src/components/**/**/*.stories.@(js|jsx|ts|tsx)",

    // "../src/components/**/**/**/*.stories.mdx",
    // "../src/components/**/**/**/*.stories.@(js|jsx|ts|tsx)",

    // "../src/components/**/**/**/**/*.stories.mdx",
    // "../src/components/**/**/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
  ],
};
