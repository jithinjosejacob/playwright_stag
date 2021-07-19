// Test Cases for TraceViewer.
const { test, expect } = require('@playwright/test');

// Debug Tests using Trace, helpful for debugging CI Issues.
test('Trace viewer test', async ({ page }) => {
    // Navigate to page and click on anchor link and then got to help with refund.
    await page.goto('https://developers.afterpay.com/afterpay-online/docs/');
    await page.click(`//a/span/span[contains(text(),'Test Environment (Sandbox)')]`)
    await page.click(`//a[contains(text(),'Sandbox API Endpoint')]`);
    // Explicity putting a failing assertion to generate trace.
    expect(await page.innerText('h2')).toBe('Development');
    // To view trace, use the below command.
    // npx playwright show-trace test-results\tests-TC006_traceviewer-Trace-viewer-test-DesktopChromium\trace.zip
});
