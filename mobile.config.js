// mobile.config.js

const { devices } = require('@playwright/test');

module.exports = {
  timeout: 40000,
  workers: 5,
  projects: [
    // iPhone 11 Pro tests use WebKit browser.
    {
      name: 'iPhone11Pro',
      use: {
        browserName: 'webkit',
        headless: false,
        ...devices['iPhone 11 Pro'],
      },
    },

    // Galaxy tests use Chromium browser.
    {
      name: 'GalaxyNote3',
      use: {
        browserName: 'chromium',
        headless: false,
        ...devices['Galaxy Note 3 landscape'],
      },
    },

  ],
};