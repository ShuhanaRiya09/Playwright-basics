// @ts-check
const { test, expect } = require('@playwright/test');

test(' Select Dropdown', async ({ page }) => {
    test.slow();
    await page.goto('https://freelance-learn-automation.vercel.app/signup');

  
    // Select the country from the dropdown
    await page.locator('#state').selectOption({ label: "Goa" });
    await page.locator('#hobbies').selectOption(['Playing','Swimming']);


});