// @ts-check
const { test, expect } = require('@playwright/test');

test ('Element selector by alternative text', async({page}) =>{
    await page.goto('https://login.salesforce.com/');
   
   await page.getByAltText('Salesforce').click();

});