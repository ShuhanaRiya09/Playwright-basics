// @ts-nocheck
const { test, expect } = require('@playwright/test');

test(' Select Dropdown', async ({ page }) => {
   // test.slow();
    await page.goto('https://login.salesforce.com/');

  
   const checkBox = page.locator("//input[@type='checkbox']");
   await checkBox.click();
   await expect(checkBox).toBeChecked();

   await page.goto('https://training.rcvacademy.com/test-automation-practice-page');
   await page.locator('#java').click();
   await page.locator("//input[@type='radio']").nth(2).click();


   


});