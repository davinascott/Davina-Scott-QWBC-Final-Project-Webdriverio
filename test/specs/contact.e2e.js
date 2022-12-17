const authenticationPage = require("../pageobjects/authentication.page");
const galleryPage = require("../pageobjects/product.page");
const contactPage = require("../pageobjects/contact.page");


describe('ContactPage: ', async () => {

    beforeEach('Navigate to landing page and press sign in button', async () => {
        await authenticationPage.open();
        await authenticationPage.btnSignInOrRegister.click();
        await expect(browser).toHaveUrlContaining("https://dev-mlluudmotpwoldtv.us.auth0.com/login?");
        await expect(authenticationPage.btnSubmit).toBeExisting();
        await expect(authenticationPage.btnSubmitText).toHaveTextContaining('LOG IN');
        await authenticationPage.authenticate('test1@tester.com','Password1');
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products");
        await expect(galleryPage.contactBtn).toBeExisting();
        await galleryPage.contactBtn.click();
    });

    afterEach('Sign out of application', async () => {
        await browser.url('https://ui-automation-camp.vercel.app/products');
        await galleryPage.signOutBtn.waitForExist();
        await galleryPage.signOutBtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app");
    });

    it('Should not be able to send message if required fields are blank', async () => {
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/contact");
        await contactPage.submitBtn.waitForExist();
        await contactPage.fillOutContactForm("sherry","Porter","","Test","This is a test");
        await contactPage.emailFieldError.waitForExist();
        await expect(contactPage.emailFieldError).toHaveTextContaining('Field is required!')
    });

    it('Should not be able to continue to payment if email format is incorrect', async () => {
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/contact");
        await contactPage.submitBtn.waitForExist();
        await contactPage.fillOutContactForm("sherry","Porter","ff","Test","This is a test");
        await contactPage.emailFieldError.waitForExist();
        await expect(contactPage.emailFieldError).toHaveTextContaining('Email is invalid')
    });

    it('Should redirect to linkedin if linkedin button is pressed', async () => {
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/contact");
        await contactPage.submitBtn.waitForExist();
        const parentHandle = await browser.getWindowHandle();
        await contactPage.linkedInLink.click();
        await browser.pause(5000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(5000);
        await expect(browser).toHaveUrlContaining("https://www.linkedin.com/company/qualityworks-consulting-group-llc");
        await browser.switchToWindow(parentHandle);
        await browser.pause(5000);
        //await expect(browser).toHaveUrlContaining("https://www.linkedin.com/company/qualityworks-consulting-group-llc/");
    });

});