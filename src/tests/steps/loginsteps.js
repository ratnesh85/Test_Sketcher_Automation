const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../pages/loginpage");
const {expect} = require("@playwright/test")

let loginPage = new LoginPage();
let emailSignup;
let nameSignup;
let nameLogin = process.env.NAME_LOGIN;
// Given("Navigate to url {string}", async function (url) {
//   await loginPage.navigateToUrl(url);
// });

// Then("Verify that home page is visible successfully", async function () {
//   expect(await loginPage.getTextHeaderAutomationExercise()).toBe("Full-Fledged practice website for Automation Engineers");
// });

When("Click on Signup Login button", async function () {
  await loginPage.clickSignupLogin();
});

Then("Verify {string} is visible", async function (text) {
  expect(await loginPage.getTextNewUserSignup()).toBe(text);
});

Then("Verify the {string} section is visible", async function (text) {
  expect(await loginPage.getTextLogin()).toBe(text);
});

When("Enter name and email address", async function () {
  emailSignup = await loginPage.enterEmailSignup();
  nameSignup  = await loginPage.enterName();
});

When("Enter a valid email address and password", async function () {
  await loginPage.enterEmailLogin("shukla.ratnesh@gmail.com");
  await loginPage.enterPasswordLogin("Test@1234");
});

When("Click Signup button", async function () {
  await loginPage.clickSignup();
});

When("Click the Login button", async function () {
  await loginPage.clickLogin();
});

Then("Verify that ENTER ACCOUNT INFORMATION is visible", async function () {
  expect(await loginPage.getTextSignedUpEmail()).toBe(emailSignup);
  expect(await loginPage.getTextSignedUpName()).toBe(nameSignup);
});

When("Fill details: Title, Name, Email, Password, Date of birth", async function () {
  await loginPage.selectTitleMr();
  passwordSignup = await loginPage.enterPasswordSignup();
  await loginPage.selectDays("1");
  await loginPage.selectMonths("September");
  await loginPage.selectYears("2010");
});

When("Select checkbox Sign up for our newsletter!", async function () {
  await loginPage.selectCheckboxNewsletter();
});

When("Select checkbox Receive special offers from our partners!", async function () {
  await loginPage.selectCheckboxSpecialOffers();
});

When("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", async function () {
  await loginPage.enterFirstName("John");
  await loginPage.enterLastName("Doe");
  await loginPage.enterCompany("TechSolutions");
  await loginPage.enterAddress("123 Main St");
  await loginPage.enterAddress2("Apt 4B");
  await loginPage.selectCountry("United States");
  await loginPage.enterState("California");
  await loginPage.enterCity("Los Angeles");
  await loginPage.enterZipcode("90001");
  await loginPage.enterMobileNumber("1234567890");
});

When('Click Create Account button', async function () {
  await loginPage.clickCreateAccount();
});

Then("Verify that ACCOUNT CREATED! is visible", async function () {
  expect(await loginPage.getTextAccountCreated()).toBe("Account Created!");
});

Then("Verify that Logged in as username is visible", async function () {
  expect(await loginPage.getTextLoggedAs()).toBe(" Logged in as "+nameSignup);
});

Then("Verify that Logged in as username is visible on the right side of the page", async function () {
  expect(await loginPage.getTextLoggedAs()).toBe(" Logged in as "+nameLogin);
});

Then("Verify that {string} is visible and click Continue button", async function (text) {
  expect(await loginPage.getTextAccountDeleted()).toBe("Account Deleted!");
  await loginPage.clickContinue();
});

When('Click Continue button', async function () {
  await loginPage.clickContinue();
});

When('Click Delete Account button', async function () {
  await loginPage.clickDeleteAccount();
});

