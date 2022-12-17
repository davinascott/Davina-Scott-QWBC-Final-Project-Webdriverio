const authenticationPage = require("../pageobjects/authentication.page");
const galleryPage = require("../pageobjects/product.page");
const detailPage = require("../pageobjects/detail.page");
const cartPage = require("../pageobjects/cart.page");


describe('Cart: ', async () => {

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
        //await browser.url('https://ui-automation-camp.vercel.app/products');
        await galleryPage.signOutBtn.waitForExist();
        await galleryPage.signOutBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app");
    });

    it('Should be able to increase the quantity of a cart item', async () => {
        await expect(galleryPage.firstProductAddToCartBtn).toBeExisting();
        await galleryPage.firstProductAddToCartBtn.click();
        await browser.url('https://ui-automation-camp.vercel.app/products#/cart');
        await cartPage.cartFirstProductContainer.waitForExist();
        await expect(cartPage.firstItemQuantity).toHaveTextContaining("1");
        await cartPage.inreaseItem();
        await expect(cartPage.firstItemQuantity).toHaveTextContaining("2");
    });

    it('Should have the checkout button visible', async () => {
        await browser.url('https://ui-automation-camp.vercel.app/products#/cart');
        await cartPage.cartFirstProductContainer.waitForExist();
        await expect(cartPage.firstItemQuantity).toHaveTextContaining("2");
        await cartPage.checkOutBtn.waitForExist();
        await expect(cartPage.checkOutBtnTextCont).toHaveTextContaining("Checkout");
    });

    it('Should be able to remove item from cart', async () => {
        await browser.url('https://ui-automation-camp.vercel.app/products#/cart');
        await cartPage.cartFirstProductContainer.waitForExist();
        await expect(cartPage.firstItemQuantity).toHaveTextContaining("2");
        await cartPage.cartFirstRemoveButton.waitForExist();
        await cartPage.cartFirstRemoveButton.click();
        await cartPage.emptyCartMessage.waitForExist();
        await expect(cartPage.emptyCartMessage).toHaveTextContaining("Your cart is empty.");
        await browser.url('https://ui-automation-camp.vercel.app/products');
    });

});