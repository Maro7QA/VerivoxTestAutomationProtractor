#Feature: Filtering Computers
 # As a user
  #I should be able to filter computers by name
  #In order to convenient table usage

  #Scenario: Filter finds computers by name
   # Given the site "http://computer-database.herokuapp.com/computers" is opened
   # When I add "ASCI Purple" in the search field
   # And I click the filter button
   # Then I should see "Displaying 1 to 1 of 1" in the result
   # And I should see "ASCI Purple" in the Computer name field
   # And I should see "01 Jan 2005" in the Introduced field
   # And I should see "-" in the Discontinued field
   # And I should see "IBM" in the Company field

 # Scenario: No results matching
  #  Given the site "http://computer-database.herokuapp.com/computers" is opened
   # When I add "wdecscds" in the search field
   # And I click the filter button
   # Then I should see "Nothing to display" message

 # Scenario: User can switch between pages
   # Given the site "http://computer-database.herokuapp.com/computers" is opened
   # When I click Next button
   # Then url should be "http://computer-database.herokuapp.com/computers?p=1"
   # When I click Previous button
   # Then url should be "http://computer-database.herokuapp.com/computers"





