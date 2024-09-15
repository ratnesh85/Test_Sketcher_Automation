Feature: Automation test for carts

Scenario: Verify Subscription in Cart page
    Then Verify that home page is visible successfully
    When Click on Cart button
    And Scroll down to footer
    And Verify text SUBSCRIPTION
    And Enter email address in input and click arrow button
    Then Verify success message You have been successfully subscribed! is visible
  
Scenario: Add product in cart
    Then Verify that home page is visible successfully
    When Click on Products button
    And Hover over first product and click Add to cart
    And Click Continue shopping button
    And Hover over second product and click Add to cart
    And Click view cart button
    Then Verify both products are added to cart
    Then Verify their prices, quantity and total price

