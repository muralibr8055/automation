Feature: Test API Endpoint
Scenario: Verify GET request to API endpoint
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response should have status code 200
    And the response time should be less than 1000 milliseconds


Scenario: Verify attributes in response data
   Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
   Then the "id" attribute should not be null or empty for all 4 items present in the data array
   And the type attribute should be episode for all items


 Scenario: Verify the "title" field in "episode" is never null or empty
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the title field in episode should never be null or empty for any schedule item

 Scenario: Verify only one episode has "live" field in "episode" as true
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then only one episode in the list should have live field in episode as true

 Scenario: Verify transmission start before transmission end
   Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
   Then the transmission_start date for each item should be before the transmission_end date

 Scenario: Verify "Date" header in response
    Given I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response should have a Date header

Scenario Outline: Verify 404 error for non-existent resource
     Given I make a invalid GET request to "https://testapi.io/api/RMSTest/ibltest/<invalidId>"
     Then the status code should be 404
     And the error object should have properties details and http_response_code

     Examples:
    | invalidId |
    | 2023-09-11 |
