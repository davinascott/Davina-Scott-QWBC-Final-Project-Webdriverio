const authenticationPage = require("../pageobjects/authentication.page");
const galleryPage = require("../pageobjects/product.page");
const sortData = require("../data/sort.data");


describe('Sort: ', async () => {

    beforeEach('Navigate to landing page and press sign in button', async () => {
        await authenticationPage.open();
        await authenticationPage.btnSignInOrRegister.click();
        await expect(browser).toHaveUrlContaining("https://dev-mlluudmotpwoldtv.us.auth0.com/login?");
        await expect(authenticationPage.btnSubmit).toBeExisting();
        await expect(authenticationPage.btnSubmitText).toHaveTextContaining('LOG IN');
        await authenticationPage.authenticate('test1@tester.com','Password1');
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
        await galleryPage.firstProductLink.scrollIntoView();
    });

    afterEach('Sign out of application', async () => {
        await galleryPage.signOutBtn.waitForExist();
        await galleryPage.signOutBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app");
    });

    it('Products can be sorted in ascending order (A to Z) by product name', async () => {
        await galleryPage.sortDropDown.waitForExist();
        await galleryPage.sortDropDown.selectByVisibleText(sortData[0].selection);
        await $$('//p[@class="chakra-text css-1n64n71"]').forEach(async (element,index) => {
            await expect(element).toHaveTextContaining(sortData[0].results[index]);
        });
        //await galleryPage.sortDropDown.clearValue();
    });

    it('Products can be sorted by category', async () => {
        await galleryPage.categoryDropDown.waitForExist();
        await galleryPage.categoryDropDown.selectByVisibleText(sortData[1].selection);
        await $$('//p[@class="chakra-text css-1n64n71"]').forEach(async (element,index) => {
            await expect(element).toHaveTextContaining(sortData[1].results[index]);
        });
        //await galleryPage.categoryDropDown.clearValue();
    });

    it('Has a reset button visible', async () => {
        await galleryPage.resetBtn.waitForExist();
        await expect(galleryPage.resetBtn).toHaveTextContaining('Reset');
    });

});