// playwright.config.js

module.exports = {
  timeout: 60000,
  retries: 0,
  reporter: 'list',
  workers: 5,
  use: {
    // off, on, retain-on-failure, on-first-retry
    trace: 'retain-on-failure',
    //baseURL: 'http://localhost:3000',
    headless: false
  },
  projects: [
    {
      // Desktop Chromium
      name: 'DesktopChromium',
      use: {
        browserName: 'chromium',
        //executablePath: 'C:\\Program Files (x86)\\Chrome.exe',
        // Can be "chrome", "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc. Test against chrome channel.
        channel: 'chrome',
      },
    },

    // Desktop Safari
    {
      name: 'DesktopSafari',
      use: {
        browserName: 'webkit',
        // WebKit and Firefox are only compatible with Playwright’s internal builds
        viewport: { width: 1200, height: 750 },
      }
    },

    // Desktop Firefox
    {
      name: 'DesktopFirefox',
      use: {
        browserName: 'firefox',
        // WebKit and Firefox are only compatible with Playwright’s internal builds
        viewport: { width: 800, height: 600 },
      }
    },
  ],
};
