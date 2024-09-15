const { Then, When } = require('@cucumber/cucumber');
const ProductsPage = require('../pages/productspage');
const LoginPage = require("../pages/loginpage");
const {expect} = require("@playwright/test")


let productsPage = new ProductsPage();
let productName = "Blue Top";
let productPriceList = [];

When('Click on Products button', async function() {
    await productsPage.clickProductsButton();
});

Then('Verify user is navigated to ALL PRODUCTS page successfully', async function() {
    expect(await productsPage.verifyAllProductsPageVisible()).toBe(true);
});

When('Enter product name in search input and click search button', async function() {
    await productsPage.searchProduct(productName); // Replace 'product_name' with actual product name or parameterize it
});

Then('Verify SEARCHED PRODUCTS is visible', async function() {
    expect(await productsPage.verifySearchedProductsVisible()).toBe(true);
});

Then('Verify all the products related to search are visible', async function() {
    expect(await productsPage.verifySearchedProductName()).toBe(productName);
});

When('Hover over first product and click Add to cart', async () => {
    await productsPage.hoverAndAddFirstProductToCart();
});

When('Hover over second product and click Add to cart', async () => {
    await productsPage.hoverAndAddSecondProductToCart();
});

When('Click Continue shopping button', async () => {
    await productsPage.clickContinueShoppingButton();
});

When('Click view cart button', async () => {
    await productsPage.clickViewCartButton();
});
