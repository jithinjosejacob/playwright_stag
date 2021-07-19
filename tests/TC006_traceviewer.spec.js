// Test Cases for TraceViewer.
const { test, expect } = require('@playwright/test');

// Debug Tests using Trace, helpful for debugging CI Issues.
test('Trace viewer test', async ({ page }) => {
    // Navigate to page and click on anchor link and then got to help with refund.
    await page.goto('https://help.afterpay.com/hc/en-au');
    await page.click(`//a[contains(text(),'Get in touch')]`, { force: true });
    await page.click(`//h2[contains(text(),'I need help with a refund / return')]`, { force: true })
    // Explicity putting a failing assertion to generate trace
    expect(await page.innerText('h3')).toBe('You failed');
    // To view trace, use the below command.
    // npx playwright show-trace test-results\tests-TC006_traceviewer-Trace-viewer-test-DesktopChromium\trace.zip
});