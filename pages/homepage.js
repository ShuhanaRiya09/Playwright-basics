const {expect } = require('@playwright/test');

class HomePage

{

    constructor(page){

        this.page=page;
        this.menu="//img[@alt='menu']"
        this.manageoption="//span[text()='Manage']"
        this.logoutoption="//button[text()='Sign out']"
       
    }
    async logoutFromApplication(){

      
       await this.page.click(this.menu)
       await this.page.click(this.logoutoption)


    }

    async verifyManageOption(){

       // Corrected version
    const manageLocator = this.page.locator(this.manageoption);
    
    // Use 'expect' to assert visibility
    await expect(manageLocator).toBeVisible(); // Corrected assertion
    }



}
module.exports=HomePage;