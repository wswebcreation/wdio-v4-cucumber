Feature: Are the Cleaning Values of the Settings page of a property working as expected
  @hilton @pseudocode
  Scenario: Cleaning Values page renders data correctly for small property
    Given the user opens the Hilton mobile app
    When the user opens the Cleaning Values setting of the Memphis property
    Then the page will display the correct room types

#Helpful Resouces:
#1. BDD 101 from Andy Night: https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/
