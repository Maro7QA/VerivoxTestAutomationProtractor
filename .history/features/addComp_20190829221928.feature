Feature: Adding Computer to table
  As a user
  I should be able to add computers to table
  In order to manage tables

  Scenario: Computer is added to the table successfully
    Given the site "http://computer-database.herokuapp.com/computers" is opened
    And I click Add a new computer button
    Then url should be "http://computer-database.herokuapp.com/computers/new"
    When I fill in Computer name field with "Super Puper"
    And I fill in Introduced date field with "2018-01-18"
    And I select IBM company
    And I click Save this computer button
    Then I should see the following message "Done! Computer Super Puper has been created"


  Scenario: User canceled adding computer to the table
    Given the site "http://computer-database.herokuapp.com/computers" is opened
    And I click Add a new computer button
    Then url should be "http://computer-database.herokuapp.com/computers/new"
    When I fill in Computer name field with "Super Puper"
    And I click Cancel button
    Then url shoud be "http://computer-database.herokuapp.com/computers"


  Scenario: User missed required field
    Given the site "http://computer-database.herokuapp.com/computers" is opened
    And I click Add a new computer button
    Then url should be "http://computer-database.herokuapp.com/computers/new"
    When I fill in Introduced date field with "2010-01-18"
    And I fill in Discontinued date field with "2018-01-18"
    And I select IBM company
    And I click Save this computer button
    Then I should see missed field error


  Scenario: User put wrong data types
    Given the site "http://computer-database.herokuapp.com/computers" is opened
    And I click Add a new computer button
    Then url should be "http://computer-database.herokuapp.com/computers/new"
    When I fill in Introduced date field with "18-01-2010"
    And I fill in Discontinued date field with "ededede"
    And I select IBM company
    And I click Save this computer button
    Then I should see missed field error