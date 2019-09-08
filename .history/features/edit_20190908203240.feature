#Feature: Editing Computers
 # As a user
  #I should be able to edit computers from the table
  #In order to convenient table usage

  #Scenario: User can edit computers and result is correct
   # Given the site "http://computer-database.herokuapp.com/computers" is opened
   # When I add "Super Puper" in the search field
   # And I click the filter button
    #And I should see "Super Puper" in the Computer name field
    #When I click "Super Puper" in the Table
    #And I clear not empty fields
    #When I fill in Computer name field with "Super Puper"
    #And I fill in Introduced date field with "2000-05-29"
    #And I fill in Discontinued date field with "2018-05-29"
    #And I select RCA company
    #And I click Save this computer button
    #Then I should see the following message "Done! Computer Super Puper has been updated"
    #When I add "Super Puper" in the search field
    #And I click the filter button
    #And I should see "Super Puper" in the Computer name field
    #And I should see "29 May 2000" in the Introduced field
    #And I should see "29 May 2018" in the Discontinued field
    #And I should see "RCA" in the Company field
