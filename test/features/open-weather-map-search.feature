Feature: Validating and searching Open Weather Maps (dot) org 

    As a user on the Open Weather Maps Home-page
    I want to perform certain tests
    Because test automation is required for regression e2e scenarios

    Background:
        Given I am on the Open Weather Maps home page

    Scenario: Validating all labels on the page
        When The page gets loaded successfully
        Then I should see all the lables correctly displayed on the page

    Scenario: Searching weather for an invalid city on the page
        When The page gets loaded successfully
        And I enter "abc" into the city search box
        And I click the search button
        Then I should see the error message on the page

    Scenario: Searching weather for an valid city on the page
        When The page gets loaded successfully
        And I enter "New Delhi" into the city search box
        And I click the search button
        Then I should see that "New Delhi","IN" is displayed on the page

    Scenario: Searching weather for an valid city on the page and valdating displayed data against REST API
        When The page gets loaded successfully
        And I enter "Delhi" into the city search box
        And I click the search button
        Then I should validate that "Delhi","IN" is displayed on the page via REST API

