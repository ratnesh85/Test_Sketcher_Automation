const basePage = require("../../../utils/basePage");
const fs = require("fs").promises;
const { faker } = require('@faker-js/faker');
class HomePage extends basePage {
    text_homePageVisible = "//div[@class='features_items']/h2[contains(text(), 'Features Items')]";
    text_subscription = "//h2[contains(text(),'Subscription')]";
    button_scrollUp = "//a[@id='scrollUp']";
    text_fullFledged = "//h2[contains(text(),'Full-Fledged practice website for Automation Engineers')]";
    textbox_nameOnCard = "//input[@name='name_on_card']";
    textbox_cardNumber = "//input[@name='card_number']";
    textbox_cvc = "//input[@name='cvc']";
    textbox_expirationMonth = "//input[@name='expiry_month']";
    textbox_expirationYear = "//input[@name='expiry_year']";
    button_payAndConfirmOrder = "//button[@data-qa='pay-button']";
    text_successMessage = "//div[contains(text(),'Your order has been placed successfully!')]";
    text_orderConfirmMessage = "//p[contains(text(),'Congratulations! Your order has been confirmed!')]";
    button_downloadInvoice = "//a[@class='btn btn-default check_out']";
    text_invoiceDownloaded = "//div[@class='col-sm-9 col-sm-offset-1']";


    filePath;

    async verifyHomePageVisible() {
        await this.waitForSelector(this.text_homePageVisible, 10000);
        return await this.isVisible(this.text_homePageVisible);
    }

    async scrollToBottomPage() {
        await this.scrollToBottom();
    }

    async verifySubscriptionVisible() {
        return await this.isVisible(this.text_subscription);
    }

    async clickScrollUpButton() {
        await this.click(this.button_scrollUp);
    }

    async verifyFullFledgedTextVisible() {
        return await this.getInnerText(this.text_fullFledged);
    }

    async enterPaymentDetails() {
        await this.enterValue(this.textbox_nameOnCard, faker.person.fullName());
        await this.enterValue(this.textbox_cardNumber, faker.finance.creditCardNumber());
        await this.enterValue(this.textbox_cvc, faker.finance.creditCardCVV());
        await this.enterValue(this.textbox_expirationMonth, "12");
        await this.enterValue(this.textbox_expirationYear, "2025");
    }

    async clickPayAndConfirmOrderButton() {
        await this.click(this.button_payAndConfirmOrder);
    }

    async verifySuccessMessageVisible() {
        try {
            await this.waitForSelector(this.text_successMessage, 3000);
            return await this.isVisible(this.text_successMessage);
        } catch (error) {
            await this.waitForSelector(this.text_orderConfirmMessage, 10000);
            return await this.isVisible(this.text_orderConfirmMessage);
        }
        
    }

    async clickDownloadInvoiceButton() {
        this.filePath = await this.downoladFile(this.button_downloadInvoice);
    }

    async verifyInvoiceDownloaded() {
        try{
            await fs.access(this.filePath);
            return true;
        }catch(error){
            console.log(error);
            return false;
        }
    }
}

module.exports = HomePage;
