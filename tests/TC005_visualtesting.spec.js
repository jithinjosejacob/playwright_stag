// Test Cases for Visual Testing.
const { test, expect } = require('@playwright/test');

// Verify that web page is visually correct.
test('Visual regression test', async ({ page }) => {
    await page.goto('https://help.afterpay.com/hc/en-au');
    expect(await page.screenshot()).toMatchSnapshot('home.png', { threshold: 0.2 });
})