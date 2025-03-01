import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
  stories: ["../ui/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
};

export default config;
