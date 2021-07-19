// Test Cases for Playwright Inspector.
const { test, expect } = require('@playwright/test');

// Test Case to view Playwright Inspector.
test('Playwright Inspector test', async ({ page }) => {
    await page.goto('https://help.afterpay.com/hc/en-au');
    const name = await page.innerText('h1.visibility-hidden');
    expect(name).toBe('Afterpay');
    // Added page.pause to show the Playwright Debugger
    await page.pause();
    await page.click(`//a[contains(text(),'Get in touch')]`, { force: true });
    await page.click(`//h2[contains(text(),'I need help with a refund / return')]`, { force: true })
});