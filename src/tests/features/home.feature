Feature: Automation test for home

Scenario: Verify Scroll Up using Arrow button and Scroll Down functionality
    Then Verify that home page is visible successfully
    When Scroll down page to bottom
    Then Verify SUBSCRIPTION is visible
    And Click on arrow button
    Then Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' is visible

Scenario: Download Invoice after purchase order
    Then Verify that home page is visible successfully
    When Hover over first product and click Add to cart
    And Click on Cart button
    And Click Proceed To Checkout
    And Click on Register Login button
    Then Verify "New User Signup!" is visible
    When Enter name and email address
    And Click Signup button
    Then Verify that ENTER ACCOUNT INFORMATION is visible
    When Fill details: Title, Name, Email, Password, Date of birth
    And Select checkbox Sign up for our newsletter!
    And Select checkbox Receive special offers from our partners!
    And Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    And Click Create Account button
    Then Verify that ACCOUNT CREATED! is visible
    When Click Continue button
    Then Verify that Logged in as username is visible
    When Click on Cart button
    And Click Proceed To Checkout
    Then Verify details and review your order
    When Enter description in comment text area and click Place Order
    When Enter payment details: Name on Card, Card Number, CVC, Expiration date
    And Click Pay and Confirm Order button
    Then Verify success message 'Your order has been placed successfully!'
    And Click Download Invoice button and verify invoice is downloaded successfully
    When Click Continue button
    When Click Delete Account button
    Then Verify that "ACCOUNT DELETED!" is visible and click Continue button


    
