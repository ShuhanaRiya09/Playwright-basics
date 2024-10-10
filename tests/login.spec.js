// @ts-check
const { test, expect } = require('@playwright/test');

test ('Login to the application', async({page}) =>{
    await page.goto('https://login.salesforce.com/', { timeout: 60000 });
    //ParaBank | Welcome | Online Banking
    await page.locator("xpath  = //*[@id = 'username']").fill("ShuhanaRiya09");
    await page.locator("css = #password").fill("Riya");
    await page.locator("xpath  = //*[@id = 'Login']").click();
    const locator = page.locator("xpath  = //*[@id = 'error']");
    await expect(locator).toHaveText("Please check your username and password. If you still can't log in, contact your Salesforce administrator.");
 
 
});