const basePage = require("../../../utils/basePage");

class ProductsPage extends basePage {
    button_products = "//a[@href='/products']";
    header_allProducts = "//h2[contains(text(),'All Products')]";
    input_searchProduct = "//input[@id='search_product']";
    button_searchProduct = "//button[@id='submit_search']";
    header_searchedProducts = "//h2[contains(text(),'Searched Products')]";
    list_productItemDetailsName = "//div[@class='productinfo text-center']/p";
    button_viewCart = "//a[@href='/view_cart']";
    button_continueShopping = "//button[@class='btn btn-success close-modal btn-block']";
    button_firstProduct = '(//div[@class="single-products"])[1]';
    button_secondProduct = '(//div[@class="single-products"])[2]';
    button_addToCart = "(//div[@class='product-overlay']//a[contains(@class, 'add-to-cart')])";



    async clickProductsButton() {
        await this.click(this.button_products);
    }

    async searchProduct(productName) {
        await this.enterValue(this.input_searchProduct, productName);
        await this.click(this.button_searchProduct);
    }

    async verifyHomePageVisible() {
        return await this.isVisible(this.header_automationexercise);
    }

    async verifyAllProductsPageVisible() {
        await this.waitForSelector(this.header_allProducts, 10000);
        return await this.isVisible(this.header_allProducts);
    }

    async verifySearchedProductsVisible() {
        await this.waitForSelector(this.header_searchedProducts, 10000);
        return await this.isVisible(this.header_searchedProducts);
    }

    async verifySearchedProductName() {
        return await this.getInnerText(this.list_productItemDetailsName);
    }

    async hoverAndAddFirstProductToCart() {
        await this.hover(this.button_firstProduct);
        await this.click(this.button_addToCart + "[1]");
    }

    async hoverAndAddSecondProductToCart() {
        await this.hover(this.button_secondProduct);
        await this.click(this.button_addToCart + "[2]");
    }

    async clickContinueShoppingButton() {
        await this.click(this.button_continueShopping);
    }

    async clickViewCartButton() {
        await this.click(this.button_viewCart);
    }



    // async getTextAllProductsHeader() {
    //     await this.waitForSelector(this.header_allProducts, 10000);
    //     return await this.getInnerText(this.header_allProducts);
    // }

    // async getTextSearchedProductsHeader() {
    //     await this.waitForSelector(this.header_searchedProducts, 10000);
    //     return await this.getInnerText(this.header_searchedProducts);
    // }
}

module.exports = ProductsPage;