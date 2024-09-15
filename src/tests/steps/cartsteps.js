const { Given, When, Then } = require("@cucumber/cucumber");
const CartsPage = require("../pages/cartspage");
const {expect} = require("@playwright/test");

let cartsPage = new CartsPage();


When("Click on Cart button", async function () {
  await cartsPage.clickCartButton();
  await cartsPage.reloadPage();
});

When("Scroll down to footer", async function () {
  await cartsPage.scrollToFooter();
});

When("Verify text SUBSCRIPTION", async function () {
  const subscriptionText = await cartsPage.verifySubscriptionText();
  expect(subscriptionText).toBe("Subscription");
});

When("Enter email address in input and click arrow button", async function () {
  const testEmail = "test@example.com"; // You might want to generate a random email or use an environment variable
  await cartsPage.enterEmailAndSubscribe(testEmail);
});

Then("Verify success message You have been successfully subscribed! is visible", async function () {
  const successMessage = await cartsPage.verifySuccessMessage();
  expect(successMessage).toBe("You have been successfully subscribed!");
});

Then("Verify both products are added to cart", async function () {
    expect(await cartsPage.getTableRowCount()).toBe(2);
});

Then("Verify their prices, quantity and total price", async function () {
    let prices = await cartsPage.getTableColumnPrice();
    let quantities = await cartsPage.getTableColumnQuantity();
    let totalPrices = await cartsPage.getTableColumnTotalPrice();
    for (let i = 0; i < await cartsPage.getTableRowCount(); i++) {     
        let price = parseFloat(prices[i].replace("Rs.", "").trim());
        let quantity = parseInt(quantities[i]);
        let totalPrice = parseFloat(totalPrices[i].replace("Rs.", "").trim());        
        expect(price * quantity).toBe(totalPrice);    
    }
});

When("Click Proceed To Checkout", async function () {
  await cartsPage.clickProceedToCheckout();
});

When("Click on Register Login button", async function () {
  await cartsPage.clickRegisterLoginButton();
});

When("Enter description in comment text area and click Place Order", async function () {
  await cartsPage.enterDescriptionAndPlaceOrder();
});

Then("Verify details and review your order", async function () {
  expect(await cartsPage.getAddressDetailsText()).toBe("Address Details");
  expect(await cartsPage.getReviewOrderText()).toBe("Review Your Order");
});

  
