// Test Cases for Playwright Inspector.
const { test, expect } = require('@playwright/test');

// Test Case to view Playwright Inspector.
test('Playwright Inspector test', async ({ page }) => {
    await page.goto('https://developers.afterpay.com/afterpay-online/docs/');
    // Add page.pause to show the Playwright Debugger incase command line option --debug is not used.
    //await page.pause();
    await page.click(`//a/span/span[contains(text(),'Test Environment (Sandbox)')]`);
    await page.click(`//a[contains(text(),'Sandbox API Endpoint')]`);
    expect(await page.innerText('h2')).toBe('Production');
});
