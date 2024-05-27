Feature: API Test for https://testapi.io/api/RMSTest/ibltest

Scenario: Verify the response format
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response should be in JSON format


Scenario: Verify the "duration" field is a positive integer
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the "duration" field in "episode" should be a positive integer for every item

Scenario: Verify the "category" field is not null
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the "category" field in "episode" should not be null for any item

Scenario: Verify the presence of "availability" field
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the "availability" field in "episode" should be present