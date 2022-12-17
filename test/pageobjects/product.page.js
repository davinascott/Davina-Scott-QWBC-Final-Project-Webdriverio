
const Page = require('./page');

class ProductPage extends Page {
    /**
     * Defines all relevant page selectors
     */
    get storeTitle() {
        return $('//*[@id="logo"]');
    }
    get productHeading() {
        return $('//*[@class="chakra-heading css-1jhlc8u"]');
    }

    get sortDropDown() {
        return $('//*[@id="sort"]');
    }

    get searchBox() {
        return $('//*[@id="search"]');
    }

    get categoryDropDown() {
        return $('//*[@id="category"]');
    }

    get resetBtn() {
        return $('//*[@id="reset"]');
    }

    get firstProductLink() {
        return $('//*[@id="product-0"]/div[1]');
    }

    get firstProductIncreaseBtn() {
        return $('//*[@id="product-0-increase"]');
    }

    get firstProductDecreaseBtn() {
        return $('//*[@id="product-0-decrease"]');
    }

    get firstProductAddToCartBtn() {
        return $('//*[@id="product-0"]/button');
    }

    get secondProductAddtocartBtn() {
            return $('//*[@id="product-1"]/button');
    }

    get signOutBtn() {
        return $('//*[@id="top-sign-out"]')
    }

    get contactBtn() {
        return $('//*[@id="top-contact"]')
    }

    get productTitleList() {
        return $('(//p[@class="chakra-text css-1n64n71"])');
    }

    get productPageFavoritesBtn() {
        return $('(//*[@class="css-1m8iww1"])[1]')
    }

    get starColorWhite() {
        return $('(//*[@id="add-to-favorite"])[1]')
    }

    get starColorYellow() {
        return $('(//*[@id="remove-from-favorite"])[1]')
    }

    get favoritestopbtn() {
        return $('//*[@id="top-favorite"]');
    }


    /**
     * Defines all page methods
     */

    async productIntoView(elem) {
        await elem.scollintoview();
    }

    async partialSearch(term){
        await this.searchBox.setValue(term);
    }

    async clickProductpageFavorite() {
        await this.productPageFavoritesBtn.click();
    }
}

module.exports = new ProductPage();