// mobile.config.js

const { devices } = require('@playwright/test');

module.exports = {
  timeout: 120000,
  workers: 5,
  projects: [
    // Galaxy S5 works with chromium browser.
    {
      name: 'GalaxyS5',
      use: {
        browserName: 'chromium',
        headless: false,
        ...devices['Galaxy S5'],
        locale: 'en-US',
        // Coordinated for MCG.
        geolocation: { longitude: 144.9826661, latitude: -37.8201745 },
        permissions: ['geolocation']
      },
    }
]
};