const authenticationPage = require("../pageobjects/authentication.page");
const galleryPage = require("../pageobjects/product.page");
const detailPage = require("../pageobjects/detail.page");
const cartPage = require("../pageobjects/cart.page");
const checkoutPage = require("../pageobjects/checkout.page");


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
        await expect(galleryPage.firstProductAddToCartBtn).toBeExisting();
        await galleryPage.firstProductAddToCartBtn.click();
    });

    after('Sign out of application', async () => {
        await browser.url('https://ui-automation-camp.vercel.app/products');
        await galleryPage.signOutBtn.waitForExist();
        await galleryPage.signOutBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app");
    });

    it('Order total should displayed should be correct', async () => {
        await browser.url('https://ui-automation-camp.vercel.app/products#/cart');
        await cartPage.checkOutBtn.waitForExist();
        await cartPage.checkOutBtn.click();
        await expect(browser).toHaveUrlContaining('https://ui-automation-camp.vercel.app/products#/checkout');
        await checkoutPage.checkoutTotal.waitForExist();
        await expect(checkoutPage.checkoutTotal).toHaveTextContaining("30");
    });

    it('Should not be able to continue to payment if mandatory fields are blank', async () => {
        await expect(browser).toHaveUrlContaining('https://ui-automation-camp.vercel.app/products#/checkout');
        await checkoutPage.checkoutTotal.waitForExist();
        await checkoutPage.autoFillBillingInfo("Sreone Gimby","","f");
        await expect(checkoutPage.emailError).toHaveTextContaining("This field is required");
    });

    it('Should not be able to continue to payment if email format is incorrect', async () => {
        await expect(browser).toHaveUrlContaining('https://ui-automation-camp.vercel.app/products#/checkout');
        await checkoutPage.checkoutTotal.waitForExist();
        await checkoutPage.autoFillBillingInfo("Sreone Gimby","sffty","f");
        await expect(checkoutPage.emailError).toHaveTextContaining("Please provide a valid email address");
    });

    //The switch to frame function is currntly throwing an error.
    // it('Should be able to check out succesfully', async () => {
    //     const iframe = $('(//*[@class="snipcart-payment-card-form snipcart-payment-card-form--loaded"]/iframe)')
    //     await expect(browser).toHaveUrlContaining('https://ui-automation-camp.vercel.app/products#/checkout');
    //     await checkoutPage.checkoutTotal.waitForExist();
    //     await checkoutPage.autoFillBillingInfo("Sreone Gimby","serone@gmail.com","f");
    //     //await browser.pause(5000);
    //     //await expect(checkoutPage.cardDetailsIframe).toExist();
    //     await expect(iframe).toExist();
    //     await browser.switchToFrame(iframe);
    //     await checkoutPage.cardNumberField.waitForExist();
    //     await browser.setTimeout({ 'implicit': 10000 })
    //     await checkoutPage.addCardInfo("4242 4242 4242 4242","0726","123");
    //     await browser.switchToParentFrame()
    //     await expect(browser).toHaveUrlContaining('https://ui-automation-camp.vercel.app/products#/order');
    //     await expect(checkoutPage.successfullOrder).toHaveTextContaining('Thank you for your order')
    // });

});