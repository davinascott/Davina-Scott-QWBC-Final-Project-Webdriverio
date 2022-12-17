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

    get cartFirstRemoveButton() {
        return $('(//*[@title="Remove item"])[1]')
    }

    get cartFirstIncrementBtn() {
        return $('(//*[@title="Increment quantity"])[1]')
    }

    get cartFirstDecrementButton() {
        return $('(//*[@title="Decrement quantity"])[1]')
    }

    get firstItemQuantity() {
        return $('(//*[@class="snipcart-item-quantity__quantity snipcart__font--std"]/span)[1]')
    }

    get checkOutBtn() {
        return $('//*[@class="snipcart-button-primary snipcart-base-button is-icon-right"]')
    }

    get checkOutBtnTextCont() {
        return $('//*[@class="snipcart-base-button__label"]')
    }

    get emptyCartMessage() {
        return $('//*[@class="snipcart-empty-cart__title snipcart__font--secondary snipcart__font--xlarge snipcart__font--bold"]');
    }

    async removeItem() {
        this.cartFirstRemoveButton.click();
    }

    async inreaseItem() {
        this.cartFirstIncrementBtn.click();
    }

    async decreaseItem() {
        this.cartFirstDecrementButton.click();
    }
}
module.exports = new CartPage();