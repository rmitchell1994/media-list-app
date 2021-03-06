Feature: Authentication Journeys

    Scenario: Should sign up user successfully
        Given I visit the "sign-up" page
        When I enter my email address and "valid" password
        Then I should see the "Signed In" message

    Scenario: Should display error message when user has not signed in correctly
        Given I visit the "sign-up" page
        When I enter my email address and "invalid" password
        Then I should see a "sign-up" Error message
    
    Scenario: Should take user to signed in page when successfully logged in
        Given I visit the "login" page as an existing user
        When I enter "valid" login details
        Then I should see the "Signed In" message
    
    Scenario: Should display an error message when a user unsuccessfully logs in
        Given I visit the "login" page as an existing user
        When I enter "invalid" login details
        Then I should see a "login" Error message

    Scenario: Should successfully log a user out
        Given I visit the "home" page as a signed in user
        When I click the logout button
        Then I should see the "Prospect Page" message

    Scenario: Should successfully update a users password
        Given I visit the "account" page as a signed in user
        When I type in an "updated" password
        Then I should see a "Success" message

    Scenario: Should successfully update a users password
        Given I visit the "account" page as a signed in user
        When I type in an "incorrect" password
        Then I should see a "Error" message

    Scenario: Should successfully delete a users account
        Given I visit the "account" page as a signed in user
        When I select the delete account button
        Then I should see the "Prospect Page" message
