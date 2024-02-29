const { defineConfig } = require("cypress");
const fs = require("fs");
const customIndexFunction = require("./index.js");

module.exports = defineConfig({
  videoUploadPath: "cypress/videos",
  video: true,
  videoCompression: true,
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      customIndexFunction(on, config); // `index.js` dosyasında tanımlanan özel işlevi çağırın
      return config;
    },
  },
});
