
const Page = require('./page');

class CheckoutPage extends Page {
    get billingHeading() {
        return $('(//*[@class="snipcart__font--subtitle"])[1]');
    }

    get nameField() {
        return $('//*[@name="name"]');
    }

    get emailField() {
        return $('//*[@name="email"]');
    }

    get streetaddress() {
        return $('//*[@name="address1"]');
    }

    get aptStreet() {
        return $('//*[@name="address2"]');
    }

    get city() {
        return $('//*[@name="city"]');
    }

    get country() {
        return $('//*[@id="country_b6b4e18e-177d-40cd-82c4-86b07461e3ca"]');
    }

    get province() {
        return $('//*[@name="province"]');
    }

    get zipCode() {
        return $('//*[@name="postalCode"]');
    }

    get continueBtn() {
        return $('//*[@ class="snipcart-button-primary snipcart-submit snipcart-base-button is-icon-right"]');
    }

    get checkoutTotal() {
        return $('//*[@ class="snipcart-summary-fees__amount snipcart-summary-fees__amount--highlight snipcart__font--large"]');
    }

    get cardNumberField() {
        return $('//*[@id="card-number"]');
    }

    get expirydateField() {
        return $('//*[@id="expiry-date"]');
    }

    get cvvField() {
        return $('//*[@id="cvv"]');
    }

    get placeOrderBtn() {
        return $('//*[@type="submit"]')
    }

    get emailError() {
        return $('//*[@data-for="email"]');
        //This field is required
    }

    get streetaddressSelection() {
        return $('//*[@class="snipcart-typeahead__suggestion snipcart-typeahead__suggestion--option snipcart__font--bold"][2]');
    }

    get streetaddressSuggestionList() {
        return $('(//*[@class="snipcart-typeahead__suggestions"])[1]');
    }

    get successfullOrder() {
        return $('(//*[@class="snipcart__font--subtitle"])[1]');
    }

    get cardDetailsIframe() {
        return $('//*[@class="snipcart-payment-card-form snipcart-payment-card-form--loaded"]/iframe');
    }

    async autoFillBillingInfo(name,email,firstStreetInitial) {
        await this.nameField.setValue(name);
        await this.emailField.setValue(email);
        await this.streetaddress.setValue(firstStreetInitial);
        await this.streetaddressSuggestionList.waitForExist();
        await this.streetaddressSelection.click();
        await this.continueBtn.click();

    }

    async addCardInfo(cardNum,expiryDate,cvv) {
        await this.cardNumberField.setValue(cardNum);
        await this.expirydateField.setValue(expiryDate);
        await this.cvvField.setValue(cvv);
        await this.placeOrderBtn.click(); 
    }

}

module.exports = new CheckoutPage();