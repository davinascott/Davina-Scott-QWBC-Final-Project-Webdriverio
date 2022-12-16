const authenticationPage = require("../pageobjects/authentication.page");
const galleryPage = require("../pageobjects/product.page");
const detailPage = require("../pageobjects/detail.page");
const cartPage = require("../pageobjects/cart.page");


describe('Add To Cart: ', async () => {

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
        //await browser.url('https://ui-automation-camp.vercel.app/products');
        await galleryPage.signOutBtn.waitForExist();
        await galleryPage.signOutBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app");
    });

    it('Should be able to add a single item to cart from product page', async () => {
        await expect(galleryPage.firstProductAddToCartBtn).toBeExisting();
        await galleryPage.firstProductAddToCartBtn.click();
        await browser.url('https://ui-automation-camp.vercel.app/products#/cart');
        await cartPage.cartFirstProductContainer.waitForExist();
        await cartPage.backToShoppingBtn.waitForExist();
        //await cartPage.backToShoppingBtn.toBeExisting();
        await cartPage.backToShoppingBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
    });

    it('Should be able to add multiple items to cart from product page', async () => {
        await galleryPage.firstProductAddToCartBtn.waitForExist();
        await galleryPage.firstProductAddToCartBtn.click();
        await cartPage.closeCartBtn.waitForExist();
        await cartPage.closeCartBtn.click();
        await expect(galleryPage.secondProductAddtocartBtn).toBeExisting();
        await galleryPage.secondProductAddtocartBtn.click();
        await browser.url('https://ui-automation-camp.vercel.app/products#/cart');
        await cartPage.cartFirstProductContainer.waitForExist();
        await cartPage.cartSecondProductContainer.waitForExist();
        await cartPage.backToShoppingBtn.waitForExist();
        await cartPage.backToShoppingBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
    });

    it('Should be able to add single item to cart from product detail page', async () => {
        await galleryPage.firstProductAddToCartBtn.waitForExist();
        await galleryPage.firstProductLink.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products/quality-hat-model");
        await expect(detailPage.addTocartBtn).toBeExisting();
        await detailPage.addTocartBtn.click();
        await cartPage.closeCartBtn.waitForExist();
        await cartPage.closeCartBtn.click();
        await browser.url('https://ui-automation-camp.vercel.app/products#/cart');
        await cartPage.cartFirstProductContainer.waitForExist();
        await cartPage.backToShoppingBtn.waitForExist();
        await cartPage.backToShoppingBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");

    });

});