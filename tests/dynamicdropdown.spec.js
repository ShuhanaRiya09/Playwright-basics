// @ts-nocheck
const { test, expect } = require('@playwright/test');

test(' Select Dropdown', async ({ page }) => {
   // test.slow();
    await page.goto('https://www.yatra.com/');

  
   const departFrom = page.locator('#BE_flight_origin_city');
   await departFrom.clear({delay:1000});
   await departFrom.pressSequentially('Delhi',{delay:1000});
   console.log(await departFrom.inputValue()); // Check value after filling

   // Use isVisible to check for the dropdown options
   const dropdownVisible = await page.locator('.viewport').isVisible();
    
   if (dropdownVisible) {
       // Click the dropdown option for 'New York (JFK)' if visible
       await page.locator(".viewport").getByRole('listitem').filter({ hasText: 'New York (JFK)' }).click();
       
       // Validate the selection
       const selectedValue = await departFrom.inputValue();
       console.log('Selected Value:', selectedValue);
       expect(selectedValue).toContain('Delhi'); // Validate the input
   } else {
       console.log('Dropdown options are not visible.');
   }
   
});