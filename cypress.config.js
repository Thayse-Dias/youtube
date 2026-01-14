const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true, // 🎥 Gera vídeo da execução
  videosFolder: 'cypress/videos',

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'yyyy-mm-dd_HH-MM-ss'
  },

  e2e: {
    baseUrl: 'https://www.youtube.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',

    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',

    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,

    retries: {
      runMode: 1,
      openMode: 0
    },

    setupNodeEvents(on, config) {
      return config
    }
  }
})
