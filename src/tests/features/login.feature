Feature: Automation test for login

Scenario: Register a new user
    Then Verify that home page is visible successfully
    When Click on Signup Login button
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
    When Click Delete Account button
    Then Verify that "ACCOUNT DELETED!" is visible and click Continue button

Scenario: Successful User Login and Account Deletion
  Then Verify that home page is visible successfully
  When Click on Signup Login button
  Then Verify the "Login to your account" section is visible
  When Enter a valid email address and password
  And Click the Login button
  Then Verify that Logged in as username is visible on the right side of the page



