// Test Cases for Cross Browser Testing
const { test, expect } = require('@playwright/test');

// This will run tests across Chromium, Firefox and Webkit.
test('Cross browser test', async ({ page }) => {
  await page.goto('https://help.afterpay.com/hc/en-au');
  const name = await page.innerText('h1.visibility-hidden');
  expect(name).toBe('Afterpay');
  // Wait for 5 seconds for demo
  //await page.waitForTimeout(5000);
});