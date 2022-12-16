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


    /**
     * Defines all page methods
     */

}

module.exports = new ProductDetailPage();