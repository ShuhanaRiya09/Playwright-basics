// @ts-check
const { test, expect } = require('@playwright/test');

test('List Demo', async ({ page }) => {
    await page.goto('https://training.rcvacademy.com/', { timeout: 60000 }); // 60 seconds

  // Corrected XPath for the dynamic text section
  const listSection = page.locator("(//div[@class='dynamic-text'])[1]");

  // Ensure the section is visible before checking for list items
  await expect(listSection).toBeVisible();

  // Expect 4 list items (li) within the section
  const listItems = listSection.locator('li');
  
  // Assert that there are 4 list items
  await expect(listItems).toHaveCount(4);
});



