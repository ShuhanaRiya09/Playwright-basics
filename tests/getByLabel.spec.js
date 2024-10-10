// @ts-check
const { test, expect } = require('@playwright/test');

test ('Element selector by label', async({page}) =>{
    await page.goto('https://login.salesforce.com/');
   
   await page.getByLabel('Remember me').click();

});