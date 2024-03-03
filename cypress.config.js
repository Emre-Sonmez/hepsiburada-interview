const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  projectId: "ProjectId",
  video: true,
  videoCompression: true,
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  viewportHeight: 960,
  viewportWidth: 1536,
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    baseUrl: "https://www.hepsiburada.com",
    setupNodeEvents(on, config) {
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
