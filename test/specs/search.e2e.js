const authenticationPage = require("../pageobjects/authentication.page");
const galleryPage = require("../pageobjects/product.page");
const contactPage = require("../pageobjects/contact.page");
const searchData = require("../data/search.data");


describe('Checkout: ', async () => {

    before('Navigate to landing page and press sign in button', async () => {
        await authenticationPage.open();
        await authenticationPage.btnSignInOrRegister.click();
        await expect(browser).toHaveUrlContaining("https://dev-mlluudmotpwoldtv.us.auth0.com/login?");
        await expect(authenticationPage.btnSubmit).toBeExisting();
        await expect(authenticationPage.btnSubmitText).toHaveTextContaining('LOG IN');
        await authenticationPage.authenticate('test1@tester.com','Password1');
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
        await galleryPage.firstProductLink.scrollIntoView();
    });

    after('Sign out of application', async () => {
        await galleryPage.signOutBtn.waitForExist();
        await galleryPage.signOutBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app");
    });

    it('Should be able to perform a partial word search', async () => {
        await galleryPage.searchBox.waitForExist();
        await galleryPage.partialSearch(searchData[0].searchterm);
        await $$('//p[@class="chakra-text css-1n64n71"]').forEach(async (element,index) => {
            await expect(element).toHaveTextContaining(searchData[0].results[index])
        });
    });

    it('Should be able to perform a full word search', async () => {
        await galleryPage.searchBox.waitForExist();
        await galleryPage.searchBox.clearValue();
        await galleryPage.partialSearch(searchData[1].searchterm);
        await $$('//p[@class="chakra-text css-1n64n71"]').forEach(async (element,index) => {
            await expect(element).toHaveTextContaining(searchData[1].results[index])
        });
    });

    it('Should not be able to use categories as search terms', async () => {
        await galleryPage.searchBox.waitForExist();
        await galleryPage.searchBox.clearValue();
        await galleryPage.partialSearch(searchData[2].searchterm);
        await expect(galleryPage.firstProductLink).not.toBeExisting();
    });

});