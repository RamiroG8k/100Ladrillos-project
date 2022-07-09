import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServerConfig: {
      port: 3000,
      open: true,
      https: false,
      openBrowser: true,
    }, 
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
