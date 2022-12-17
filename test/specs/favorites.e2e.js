const authenticationPage = require("../pageobjects/authentication.page");
const galleryPage = require("../pageobjects/product.page");
const detailPage = require("../pageobjects/detail.page");
const favoritePage = require("../pageobjects/favorites.page");


describe('Favourites: ', async () => {

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

    it('Should be able to add a product to favourites from the product page', async () => {
        await galleryPage.productPageFavoritesBtn.waitForExist();
        await galleryPage.clickProductpageFavorite();
        await expect(galleryPage.starColorYellow).toBeExisting();
    });

    it('Should be able to remove a product to favourites from the product page', async () => {
        await galleryPage.productPageFavoritesBtn.waitForExist();
        await galleryPage.clickProductpageFavorite();
        await expect(galleryPage.starColorWhite).toBeExisting();
    });

    it('Should be able to add a product from favourites from the detail page', async () => {
        await expect(galleryPage.firstProductAddToCartBtn).toBeExisting();
        await galleryPage.firstProductLink.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products/quality-hat-model")
        await detailPage.detailPageFavoritesBtn.waitForExist();
        await detailPage.clickDetailPageFavorite();
        await expect(detailPage.starColorYellow).toBeExisting();
        await browser.url('https://ui-automation-camp.vercel.app/products');
    });

    it('Should be able to remove a product from favourites from the detail page', async () => {
        await expect(galleryPage.firstProductAddToCartBtn).toBeExisting();
        await galleryPage.firstProductLink.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/products/quality-hat-model")
        await detailPage.detailPageFavoritesBtn.waitForExist();
        await detailPage.clickDetailPageFavorite();
        await expect(detailPage.starColorWhite).toBeExisting();
        await browser.url('https://ui-automation-camp.vercel.app/products');
        
    });

    it('Should be able to remove a product from favourites from the favorites page', async () => {
        await galleryPage.productPageFavoritesBtn.waitForExist();
        await galleryPage.clickProductpageFavorite();
        await expect(galleryPage.starColorYellow).toBeExisting();
        await galleryPage.favoritestopbtn.click();
        await expect(browser).toHaveUrlContaining("https://ui-automation-camp.vercel.app/favorites")
        await favoritePage.favouritesHeading.waitForExist();
        await expect(favoritePage.favouritesHeading).toHaveTextContaining('Favorites');
        await favoritePage.favoritesRemoveBtn.click();
        await favoritePage.emptyFavoritesMessage.waitForExist();
        await expect(favoritePage.emptyFavoritesMessage).toHaveTextContaining('No favorites added!');
        await browser.url('https://ui-automation-camp.vercel.app/products');
    });

});