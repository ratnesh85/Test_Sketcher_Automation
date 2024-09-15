const { faker } = require("@faker-js/faker");
const basePage = require("../../../utils/basePage");

class CartsPage extends basePage {
    button_cart = "//a[@href='/view_cart']";
    text_subscription = "//h2[contains(text(),'Subscription')]";
    input_email_subscription = "//input[@id='susbscribe_email']";
    button_subscribe = "//button[@id='subscribe']";
    message_success_subscription = "//div[@class='alert-success alert']";
    table_row = "//tr[@id]";
    table_column_price = "//td[@class='cart_price']/p";
    table_column_quantity = "//td[@class='cart_quantity']/button";
    table_column_totalPrice = "//td[@class='cart_total']/p";
    button_proceedToCheckout = "//a[@class='btn btn-default check_out']";
    button_registerLogin = "//div[@id='checkoutModal']//a[@href='/login']";
    input_description = "//div[@id='ordermsg']/textarea";
    button_placeOrder = "//a[contains(text(),'Place Order')]";
    label_addressDetails = "//h2[text()='Address Details']";
    label_reviewOrder = "//h2[text()='Review Your Order']";

    async clickCartButton() {
        await this.click(this.button_cart);
    }

    async scrollToFooter() {
        await this.scrollToBottom();
    }

    async verifySubscriptionText() {
        return await this.getInnerText(this.text_subscription);
    }

    async enterEmailAndSubscribe(email) {
        await this.enterValue(this.input_email_subscription, email);
        await this.click(this.button_subscribe);
    }

    async verifySuccessMessage() {
        await this.waitForSelector(this.message_success_subscription, 10000);
        return await this.getInnerText(this.message_success_subscription);
    }

    async getTableRowCount() {
        let tableRowList = await this.getTextsInList(this.table_row);
        return tableRowList.length;
    }

    async getTableColumnPrice() {
        return await this.getTextsInList(this.table_column_price);
    }

    async getTableColumnQuantity() {
        return await this.getTextsInList(this.table_column_quantity);
    }

    async getTableColumnTotalPrice() {
        return await this.getTextsInList(this.table_column_totalPrice);
    }

    async clickProceedToCheckout() {
        await this.click(this.button_proceedToCheckout);
    }

    async clickRegisterLoginButton() {
        await this.click(this.button_registerLogin);
    }

    async enterDescriptionAndPlaceOrder() {
        await this.enterValue(this.input_description, faker.lorem.paragraph());
        await this.click(this.button_placeOrder);
    }

    async getAddressDetailsText() {
        return await this.getInnerText(this.label_addressDetails);
    }

    async getReviewOrderText() {
        return await this.getInnerText(this.label_reviewOrder);
    }
}

module.exports = CartsPage;
