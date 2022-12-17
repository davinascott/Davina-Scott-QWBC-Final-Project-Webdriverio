const Page = require('./page');

class ProductDetailPage extends Page {
    /**
     * Defines all relevant page selectors
     */
    get productTitle() {
        return $('//*[@class="chakra-stack css-egoftb"]/div/h2');
    }

    get productDescription() {
        return $('//*[@class="chakra-stack css-egoftb"]/p');
    }

    get productPrice() {
        return $('//*[@class="chakra-stack css-egoftb"]/div[2]/p[2]');
    }

    get productQuantity() {
        return $('//*[@class="chakra-stack css-egoftb"]/div[3]/input');
    }

    get productQuantityIncrementer() {
        return $('//*[@id="product-increase"]');
    }

    get productQuantityDecrementer() {
        return $('//*[@id="product-decrease"]');
    }

    get productImage() {
        return $('//*[@class="slide selected previous"]');
    }

    get addTocartBtn() {
        return $('//*[@id="add-to-cart"]');
    }

    get detailPageFavoritesBtn() {
        return $('(//*[@class="css-1m8iww1"])[1]')
    }

    get starColorWhite() {
        return $('(//*[@id="add-to-favorite"])[1]')
    }

    get starColorYellow() {
        return $('(//*[@id="remove-from-favorite"])[1]')
    }


    /**
     * Defines all page methods
     */
    async clickDetailPageFavorite() {
        await this.detailPageFavoritesBtn.click();
    }

}

module.exports = new ProductDetailPage();