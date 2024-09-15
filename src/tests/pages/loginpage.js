const basePage = require("../../../utils/basePage");
const { faker } = require('@faker-js/faker');

class LoginPage extends basePage {
    link_signupLogin = "//a[@href='/login']";
    label_login = "//h2[contains(text(),'Login to your account')]";
    textbox_emailLogin   = "//input[@data-qa='login-email']";
    textbox_passwordLogin = "//input[@data-qa='login-password']";
    button_login = "//button[@data-qa='login-button']";
    textbox_name = "//input[@data-qa='signup-name']";
    textbox_emailSignup = "//input[@data-qa='signup-email']";
    textbox_signedUpname = "//input[@data-qa='name']";
    textbox_signedUpemail = "//input[@data-qa='email']";
    textbox_passwordSignup = "//input[@data-qa='password']";
    button_signup = "//button[@data-qa='signup-button']";
    radio_titleMr = "//input[@id='id_gender1']";
    radio_titleMrs = "//input[@id='id_gender2']";
    checkbox_newsletter = "//input[@id='newsletter']";
    checkbox_specialOffers = "//input[@id='optin']";
    label_logout = "//a[@href='/logout']";
    label_newUserSignup = "//h2[contains(text(),'New User Signup!')]";
    label_accountCreated = "//b[contains(text(),'Account Created!')]";
    label_customText = "//b[contains(text(),'value')]";
    label_loggedAs = "//*[contains(text(),'Logged in as')]";
    label_deleteAccount = "//a[@href='/delete_account']";
    label_accountDeleted = "//b[contains(text(),'Account Deleted!')]";
    dropdown_days = "//select[@id='days']";
    dropdown_months = "//select[@id='months']";
    dropdown_years = "//select[@id='years']";
    textbox_firstName = "//input[@id='first_name']";
    textbox_lastName = "//input[@id='last_name']";
    textbox_company = "//input[@id='company']";
    textbox_address = "//input[@id='address1']";
    textbox_address2 = "//input[@id='address2']";
    dropdown_country = "//select[@id='country']";
    textbox_state = "//input[@id='state']";
    textbox_city = "//input[@id='city']";
    textbox_zipcode = "//input[@id='zipcode']";
    textbox_mobileNumber = "//input[@id='mobile_number']";
    button_createAccount = "//button[@data-qa='create-account']";
    button_continue = "//a[@data-qa='continue-button']";

    async clickSignupLogin() {
        await this.click(this.link_signupLogin);
    }   
    async clickLogin() {
        await this.click(this.button_login);
    }
    async clickSignup() {
        await this.click(this.button_signup);
    }
    async clickDeleteAccount() {
        await this.click(this.label_deleteAccount);
    }   
    async clickCreateAccount() {
        await this.click(this.button_createAccount);
    }   
    async clickLogout() {
        await this.click(this.label_logout);
    }
    async clickContinue() {
        await this.click(this.button_continue);
    }  

    async enterEmailLogin(email) {
        await this.enterValue(this.textbox_emailLogin, email);
    }
    async enterPasswordLogin(password) {
        await this.enterValue(this.textbox_passwordLogin, password);
    }
    async enterName(name) {
        await this.enterValue(this.textbox_name, name);
    }   
    async enterEmailSignup() {
        let email = faker.internet.email();
        await this.enterValue(this.textbox_emailSignup, email);
        return email;
    }
    async enterPasswordSignup() {
        let password = faker.internet.password();
        await this.enterValue(this.textbox_passwordSignup, password);
        return password;
    }
    async enterName() {
        let name = faker.person.fullName();
        await this.enterValue(this.textbox_name, name);
        return name;
    }   
    async selectTitleMr() {
        await this.click(this.radio_titleMr);
    }
    async selectTitleMrs() {
        await this.click(this.radio_titleMrs);
    }
    async selectCheckboxNewsletter() {
        await this.click(this.checkbox_newsletter);
    }
    async selectCheckboxSpecialOffers() {
        await this.click(this.checkbox_specialOffers);
    }
    async enterFirstName(firstName) {
        await this.enterValue(this.textbox_firstName, firstName);
    }
    async enterLastName(lastName) {
        await this.enterValue(this.textbox_lastName, lastName);
    }
    async enterCompany(company) {
        await this.enterValue(this.textbox_company, company);
    }   
    async enterAddress(address) {
        await this.enterValue(this.textbox_address, address);
    }
    async enterAddress2(address2) {
        await this.enterValue(this.textbox_address2, address2);
    }
    async selectCountry(country) {
        await this.selectByVisibleText(this.dropdown_country, country);
    }   
    async enterState(state) {
        await this.enterValue(this.textbox_state, state);
    }
    async enterCity(city) {
        await this.enterValue(this.textbox_city, city);
    }
    async enterZipcode(zipcode) {
        await this.enterValue(this.textbox_zipcode, zipcode);     
    }
    async enterMobileNumber(mobileNumber) {
        await this.enterValue(this.textbox_mobileNumber, mobileNumber);
    }   
    async selectDays(days) {
        await this.selectByVisibleText(this.dropdown_days, days);
    }
    async selectMonths(months) {
        await this.selectByVisibleText(this.dropdown_months, months);
    }
    async selectYears(years) {
        await this.selectByVisibleText(this.dropdown_years, years);
    }   
    async getTextAccountCreated() {
        return await this.getInnerText(this.label_accountCreated);
    }
    async getTextLoggedAs() {
        let text = await this.getInnerText(this.label_loggedAs);
        return text.trim();
    }
    async getTextAccountDeleted() {
        return await this.getInnerText(this.label_accountDeleted);
    }   
    async getTextNewUserSignup() {
        await this.waitForSelector(this.label_newUserSignup, 10000);
        return await this.getInnerText(this.label_newUserSignup);
    } 
    async getTextLogin() {
        return await this.getInnerText(this.label_login);
    }
    async getTextDeleteAccount() {
        return await this.getInnerText(this.label_deleteAccount);
    }   
    async getTextLoggedAs() {
        return await this.getInnerText(this.label_loggedAs);
    }       
    async getTextSignedUpEmail() {
        await this.waitForSelector(this.textbox_signedUpemail, 10000);
        return await this.getAttribute(this.textbox_signedUpemail, 'value');
    }
    async getTextSignedUpName() {
        return await this.getAttribute(this.textbox_signedUpname, 'value');
    }


}

module.exports = LoginPage;