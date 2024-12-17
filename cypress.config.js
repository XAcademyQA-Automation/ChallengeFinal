const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Mi Reporte Challenger",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],
  },
  video: true,
  screenshotOnRunFailure: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
});
