#Feature: Deleting Computers
 # As a user
  #I should be able to delete computers from the table
  #In order to convenient table usage

  #Scenario: Filter finds computers by name
   # Given the site "http://computer-database.herokuapp.com/computers" is opened
    #When I add "Super Puper" in the search field
    #And I click the filter button
    #And I should see "Super Puper" in the Computer name field
    #When I click "Super Puper" in the Table
    #And I click Delete this computer button
    #Then I should see the following message "Done! Computer has been deleted"