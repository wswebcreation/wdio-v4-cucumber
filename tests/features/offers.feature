Feature: Is the Offers page working
  Scenario: Offers page loads successfully
    Given I use a web browser to navigate to the Hilton home page
    When I navigate to Offers
    Then the Offers page loads successfully

#Helpful Resouces:
#1. BDD 101 from Andy Night: https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/
