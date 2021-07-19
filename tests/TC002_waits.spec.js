// Test Cases for Waits.
const { test, expect } = require('@playwright/test');

// Custom Waits -Page, Element Waits. And Sleep in Playwright.
test('Waits test', async ({ page }) => {
  // waitUntil can have three values - 'domcontentloaded', 'load', 'networkidle',defaults to load.
  await page.goto('https://help.afterpay.com/hc/en-au', { waitUntil: 'domcontentloaded' });
  // Element Level - state can have values 'attached','detached', 'hidden'.defaults to visible.
  await page.waitForSelector('h1.visibility-hidden', { state: 'attached' });
  const name = await page.innerText('h1.visibility-hidden');
  // Equivalent to Thread.sleep
  await page.waitForTimeout(10000);
  expect(name).toBe('Afterpay');
});