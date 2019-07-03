Feature: Hilton cross platform BDD scenario
    @ignore
    Scenario: As a customer I want to book a room
        Given I open the Hilton App
        When I login in as a valid user
        And I want to book a room
            | place                  | when      | for    | adults | kids | rates |
            | San Francisco, CA, USA | next week | 8 days | 2      | 2    | no    |
        Then I will be presented a confirmation
