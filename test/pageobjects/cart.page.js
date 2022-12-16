
const Page = require('./page');

class CartPage extends Page {

    get backToShoppingBtn() {
        return $('//*[@class="snipcart-cart-header"]/button');
    }

    get cartFirstProductContainer() {
        return $('//*[@class="snipcart-item-line"][1]');
    }

    get cartSecondProductContainer() {
        return $('//*[@class="snipcart-item-line"][2]');
    }

    get closeCartBtn() {
        return $('//*[@id="snipcart"]/div/div/div[2]/div/button');
    }
}
module.exports = new CartPage();