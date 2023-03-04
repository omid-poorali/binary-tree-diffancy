import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: 'http://127.0.0.1:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
