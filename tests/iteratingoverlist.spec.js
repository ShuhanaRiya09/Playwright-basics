// @ts-check
const { test, expect } = require('@playwright/test');

test('List Demo', async ({ page }) => {
    await page.goto('https://training.rcvacademy.com/', { timeout: 60000 }); // 60 seconds

  // Corrected XPath for the dynamic text section
  const listSection = page.locator("(//div[@class='dynamic-text'])[1]");

  // Gather all list items
  const listItems = await listSection.getByRole('listitem').all();

   // Assert that there are 4 list items
   await expect(listItems).toHaveLength(4);  // Use toHaveLength for arrays



  // Log each list item's text content
    for (const listItem of listItems) {
        console.log(await listItem.textContent());
    }
  
});
