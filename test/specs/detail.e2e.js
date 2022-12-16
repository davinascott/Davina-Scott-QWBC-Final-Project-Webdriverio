const authenticationPage = require("../pageobjects/authentication.page");
const galleryPage = require("../pageobjects/product.page");
const detailPage = require("../pageobjects/detail.page");

describe('Product Detail: ', async () => {

    before('Navigate to landing page and press sign in button', async () => {
        await authenticationPage.open();
        await authenticationPage.btnSignInOrRegister.click();
        await expect(browser).toHaveUrlContaining("https://dev-mlluudmotpwoldtv.us.auth0.com/login?");
        // await expect(authenticationPage.btnSubmit).toBeExisting();
        await expect(authenticationPage.btnSubmit).toBeExisting();
        await expect(authenticationPage.btnSubmitText).toHaveTextContaining('LOG IN');
        await authenticationPage.authenticate('test1@tester.com','Password1');
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
        await galleryPage.firstProductLink.scrollIntoView();
        await galleryPage.firstProductLink.click();
    });

    after('Sign out of application', async () => {
        await galleryPage.signOutBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app");
    });

    it('Should display the Products Title', async () => {
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products/quality-hat-model");
        await expect(detailPage.productTitle).toBeExisting();
        await expect(detailPage.productTitle).toHaveTextContaining('Quality Fitted Hat'); 
    });

    it('Should display the Products Image', async () => {
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products/quality-hat-model");
        await expect(detailPage.productImage).toBeExisting();
    });

    it('Should display the Add To Cart button', async () => {
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products/quality-hat-model");
        await expect(detailPage.addTocartBtn).toBeExisting();
    });
});