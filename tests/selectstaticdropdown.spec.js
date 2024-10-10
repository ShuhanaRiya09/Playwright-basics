
// @ts-check
const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
  await page.goto('https://www.salesforce.com/form/signup/elf-v2-login/?d=70130000000Enus', { timeout: 60000 });

  // Select the country from the dropdown
  await page.locator('//*[@name="CompanyCountry"]').selectOption({ value: "US" });

});
