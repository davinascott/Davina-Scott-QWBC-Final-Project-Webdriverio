const authenticationPage = require("../pageobjects/authentication.page");
const galleryPage = require("../pageobjects/product.page");

describe('Product Gallery: ', async () => {

    before('Navigate to landing page and press sign in button', async () => {
        await authenticationPage.open();
        await authenticationPage.btnSignInOrRegister.click();
        await expect(browser).toHaveUrlContaining("https://dev-mlluudmotpwoldtv.us.auth0.com/login?");
        // await expect(authenticationPage.btnSubmit).toBeExisting();
        await expect(authenticationPage.btnSubmit).toBeExisting();
        await expect(authenticationPage.btnSubmitText).toHaveTextContaining('LOG IN');
        await authenticationPage.authenticate('test1@tester.com','Password1');
    });

    after('Sign out of application', async () => {
        await galleryPage.signOutBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app");
    });

    it('Should display the Products heading', async () => {
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
        await expect(galleryPage.productHeading).toBeExisting();
        await expect(galleryPage.productHeading).toHaveTextContaining('Products'); 
    });

    it('Should display the Sort Dropdown', async () => {
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
        await expect(galleryPage.sortDropDown).toBeExisting();
    });

    it('Should display the category Dropdown', async () => {
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
        await expect(galleryPage.categoryDropDown).toBeExisting();
    });

    it('Should display the Search Box', async () => {
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
        await expect(galleryPage.searchBox).toBeExisting();
    });

});