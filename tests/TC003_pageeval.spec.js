// Test Cases for Page Eval.
const { test, expect } = require('@playwright/test');

// Evaluating an expression.
test('Pageeval test', async ({ page }) => {
  await page.goto('https://help.afterpay.com/hc/en-au');
  let value = await page.evaluate(() => document.querySelector('h1.visibility-hidden').innerText);
  console.log("Page Eval Output - ",value);
  const name = await page.innerText('h1.visibility-hidden');
  console.log("CSS Selector Text - ",name);
  expect(name).toBe(value);
});

/* Clear Local and Session Storage
await page.evaluate(() => window.localStorage.clear());
await page.evaluate(() => window.sessionStorage.clear());
*/
