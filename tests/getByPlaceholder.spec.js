// @ts-check
const { test, expect } = require('@playwright/test');

test ('Element Select by placeholder', async({page}) =>{
    await page.goto('https://www.saucedemo.com/');
   
    await page
    .getByPlaceholder('Username')
    .fill('locked_out_user');

});