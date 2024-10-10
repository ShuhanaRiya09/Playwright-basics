// @ts-check
const { test, expect } = require('@playwright/test');

test('User Login and Add Item to Cart', async ({ page }) => {
  
        // Navigate to the application
        await page.goto('https://www.saucedemo.com/', { timeout: 60000 });

        // Fill in login details
        await page.getByPlaceholder('Username').fill("standard_user");
        await page.getByPlaceholder('Password').fill("secret_sauce");

        // Click the login button
        await page.getByRole('button').click();

        // Add item to cart
        const locator = page.locator(".inventory_item")
            .filter({ has: page.getByRole('link', { name: 'Sauce Labs Backpack' }) })
            .getByRole('button', { name: "Add to cart" })
            .click();

        // Assert that the item has been added to the cart
        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
        
    } );
