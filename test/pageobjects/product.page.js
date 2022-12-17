
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


    /**
     * Defines all page methods
     */

    async productIntoView(elem) {
        elem.scollintoview();
    }
}

module.exports = new ProductPage();