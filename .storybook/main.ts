/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs"
  ],
  staticDirs: ['../src/assets'],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
