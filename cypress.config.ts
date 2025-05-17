import { defineConfig } from "cypress";

import getCompareSnapshotsPlugin from "cypress-image-diff-js/plugin";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return getCompareSnapshotsPlugin(on, config);
    },
    baseUrl: "https://alison.com/",
    retries: {
      runMode: 2,    
      openMode: 0  
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    video: true,
    videoCompression: 32,
    defaultCommandTimeout: 8000,
  },
});
