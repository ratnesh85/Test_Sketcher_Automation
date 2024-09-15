const { Given, When, Then } = require("@cucumber/cucumber");
const HomePage = require("../pages/homepage");
const { expect } = require("@playwright/test");

let homePage = new HomePage();

Then("Verify that home page is visible successfully", async function () {
  const isHomePageVisible = await homePage.verifyHomePageVisible();
  expect(isHomePageVisible).toBe(true);
});

When("Scroll down page to bottom", async function () {
  await homePage.scrollToBottom();
});

Then("Verify SUBSCRIPTION is visible", async function () {
  expect(await homePage.verifySubscriptionVisible()).toBe(true);
});

When("Click on arrow button", async function () {
  await homePage.clickScrollUpButton();
});

Then("Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' is visible", async function () {
    expect(await homePage.verifyFullFledgedTextVisible()).toBe("Full-Fledged practice website for Automation Engineers");
});

When("Enter payment details: Name on Card, Card Number, CVC, Expiration date", async function () {
  await homePage.enterPaymentDetails();
});

When("Click Pay and Confirm Order button", async function () {
  await homePage.clickPayAndConfirmOrderButton();
});

Then("Verify success message {string}", async function (message) {
  expect(await homePage.verifySuccessMessageVisible()).toBeTruthy();
});

Then("Click Download Invoice button and verify invoice is downloaded successfully", async function () {
  await homePage.clickDownloadInvoiceButton();
  expect(await homePage.verifyInvoiceDownloaded()).toBe(true);
});


