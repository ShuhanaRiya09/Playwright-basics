// @ts-check
const { test, expect } = require('@playwright/test');

test ('Get Element By text', async({page}) =>{
    await page.goto('https://login.salesforce.com/', { timeout: 60000 });
   
   await page.getByText('Forgot Your Password?').click();

    // Assert that an element unique to the password recovery page is visible
    const heading = await page.getByText('Having trouble logging in?'); // Adjust text based on the actual heading on the page
    await expect(heading).toBeVisible();
  

 
});