const authenticationPage = require("../pageobjects/authentication.page");
const productPage = require("../pageobjects/product.page");

describe('Authentication: ', async () => {

    beforeEach('Navigate to landing pae and press sign in button', async () => {
        await authenticationPage.open();
        await authenticationPage.btnSignInOrRegister.click();
        await expect(browser).toHaveUrlContaining("https://dev-mlluudmotpwoldtv.us.auth0.com/login?");
    });

    after('Sign out of application', async () => {
        await productPage.signOutBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app");
    });

    it('user should not be able to log in with invalid credenntials', async () => {
        await expect(authenticationPage.btnSubmit).toBeExisting();
        await expect(authenticationPage.btnSubmitText).toHaveTextContaining('LOG IN');
        await authenticationPage.authenticate('test123421@tester.com','Password176');
        await expect(authenticationPage.wrongEmailMessage).toBeExisting();
        await expect(authenticationPage.wrongEmailMessage).toHaveTextContaining('WRONG EMAIL OR PASSWORD.');
        await authenticationPage.inputEmail.clearValue();
        await authenticationPage.inputPassword.clearValue();
    });

    it('user should not be able to log in with invalid email format', async () => {
        await expect(authenticationPage.btnSubmit).toBeExisting();
        await expect(authenticationPage.btnSubmitText).toHaveTextContaining('LOG IN');
        await authenticationPage.authenticate('test','Password176');
        await expect(authenticationPage.emailErrorMessage).toBeExisting();
        await expect(authenticationPage.emailErrorMessage).toHaveTextContaining('Email is invalid');
        await authenticationPage.inputEmail.clearValue();
        await authenticationPage.inputPassword.clearValue();
    });

    it('user should be able to log in with valid credenntials', async () => {
        await expect(authenticationPage.btnSubmit).toBeExisting();
        await expect(authenticationPage.btnSubmitText).toHaveTextContaining('LOG IN');
        await authenticationPage.authenticate('test1@tester.com','Password1');
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
    });

});