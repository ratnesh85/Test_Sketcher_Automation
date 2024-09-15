Feature: Automation test for products

Scenario: Search Product
    Then Verify that home page is visible successfully
    When Click on Products button
    Then Verify user is navigated to ALL PRODUCTS page successfully
    When Enter product name in search input and click search button
    Then Verify SEARCHED PRODUCTS is visible
    And Verify all the products related to search are visible
