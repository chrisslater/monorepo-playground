Feature: Addition two numbers

    Scenario: Jeff requests the addition of two numbers
        Given Jeff uses 8 for the first param
        And he uses 33 for the second param
        When he makes a request to /api/add/8/33
        Then Jeff should see a response of 41