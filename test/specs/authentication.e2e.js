const authenticationPage = require("../pageobjects/authentication.page");
const productPage = require("../pageobjects/product.page");

describe('Authentication: ', async () => {

    beforeEach('Navigate to landing pae and press sign in button', async () => {
        await authenticationPage.open();
        await authenticationPage.btnSignInOrRegister.click();
        await expect(browser).toHaveUrlContaining("https://dev-mlluudmotpwoldtv.us.auth0.com/login?");
    });

    afterEach('Sign out of application', async () => {
        await productPage.signOutBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app");
    });

    it.only('user should only be able to log in with valid credenntials', async () => {
        await expect(authenticationPage.btnSubmit).toBeExisting();
        await expect(authenticationPage.btnSubmitText).toHaveTextContaining('LOG IN');
        await authenticationPage.authenticate('test1@tester.com','Password1');
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
    });

    it('user should only be able to sign up with a valid credentials', async () => {
        await expect(authenticationPage.btnSubmit).toBeExisting();
        //await expect(authenticationPage.SignUpTab).toBeExisting();
        // await authenticationPage.authenticationTabs.$$('li')[2].$('a').click();
        await expect(authenticationPage.btnSubmitText).toHaveTextContaining('SIGN UP');
        await authenticationPage.authenticate('test2@tester.com','Password1');
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
    });

});