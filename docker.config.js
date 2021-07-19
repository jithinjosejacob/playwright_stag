// playwright.config.js

module.exports = {
    timeout: 35000,
    retries: 0,
    reporter: 'list',
    workers: 5,
    projects: [
      {
        // Desktop Chromium
        name: 'DesktopChromium',
        use: {
          browserName: 'chromium',
          headless: true,
          // Can be "chrome", "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc. Test against chrome channel.
          channel: 'chrome',
        },
      },
    ],
  };