
const Page = require('./page');

class ContactPage extends Page {
    get firstNameField() {
        return $('//*[@id="firstName"]')
    }

    get lastNameField() {
        return $('//*[@id="lastName"]')
    }

    get emailField() {
        return $('//*[@id="email"]')
    }

    get emailFieldError() {
        return $('(//div[@class="chakra-form__error-message css-170ki1a"])')
    }

    get subjectField() {
        return $('//*[@id="subject"]')
    }

    get messageField() {
        return $('//*[@id="message"]')
    }

    get submitBtn() {
        return $('//*[@class="chakra-button css-vs0e4t"]')
    }

    get linkedInLink() {
        return $('(//*[@aria-label="Call Segun"])[2]')
    }

    async fillOutContactForm(firstName,Lastname,email,subject,message) {
        this.firstNameField.setValue(firstName);
        this.lastNameField.setValue(Lastname);
        this.emailField.setValue(email);
        this.subjectField.setValue(subject);
        this.messageField.setValue(message);
        this.submitBtn.click();
    }
}
module.exports = new ContactPage();