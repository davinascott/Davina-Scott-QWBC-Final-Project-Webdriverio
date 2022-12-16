//const { $ } = require('webdriverio/build/commands/browser');
const Page = require('./page');

class AuthenticationPage extends Page {
    /**
     * Defines all relevant page selectors
     */

    get btnSignInOrRegister() {
        return $('//*[@id="signInOrRegister"]')
    }

    get btnSubmit() {
        return $('//*[@id="1-submit"]')
    }
    //This is the span that contains the text of the btn
    get btnSubmitText() {
        return $('//*[@class="auth0-label-submit"]');
    }

    get inputEmail() {
        return $('//*[@id="1-email"]');
    }

    get inputPassword() {
        return $('//*[@id="1-password"]');
    }

    get btnForgetPassword() {
        return $('//*[@class="action remind"]');
    }

    get logInTab() {
        return $('//*[@class="auth0-lock-tabs"]/li[1]/a');
    }

    get SignUpTab() {
        return $('//*[@class="auth0-lock-tabs"]/li[2]');
        
    }

    get authenticationTabs() {
        return $('//*[@class="auth0-lock-tabs"]');
    }


     /**
     * Defines all page methods
     */

     // 

    async authenticate (email,password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new AuthenticationPage();