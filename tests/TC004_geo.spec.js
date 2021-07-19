// Test Cases for GeoLocation.
const { test } = require('@playwright/test');

// Run test from a specific location.
// This test uses geo.config.js
test('Geo location test', async ({ page }) => {
  // Open up google maps and click on Your Location button to verify that we are on MCG.
  await page.goto('https://maps.google.com');

  // For Demo Purpose pause here and show the features.
  await page.pause();

  // Verify that we are actually on MCG, by clicking on your location.
  await page.click(`//button[@aria-label='Your Location']`);
  // Wait for specific network request to complete
  await page.waitForRequest(/.*preview/);
  //await page.screenshot({ path: 'mcg-pixel4.png' });

  await page.click(`//input[@aria-label='Search Google Maps']`);
  await page.type(`//input[@aria-label='Search Google Maps']`, 'hungryjacks', { delay: 100 });
  await page.keyboard.press('Enter');
  // Wait for specific network request to complete
  await page.waitForRequest(/.*preview/);
});
