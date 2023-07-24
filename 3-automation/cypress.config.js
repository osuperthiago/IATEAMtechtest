const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 60000,

  e2e: {
    //baseUrl: 'https://www.saucedemo.com/',
    specPatern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern : ['**/1-getting-started/*', '**/2-advanced-examples/*']
  }
})