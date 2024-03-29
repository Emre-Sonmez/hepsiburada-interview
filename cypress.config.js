const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  projectId: "xjisxd",
  video: true,
  videoCompression: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  electronWebSecurity: false,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  viewportHeight: 960,
  viewportWidth: 1536,
  reporter: 'cypress-mochawesome-reporter',
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on, config);
      on("after:spec", (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === "failed")
          );
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video);
          }
        }
      });
    },
  },
});
