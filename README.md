# protractor-cucumber-framework

Preconditions:
- Protractor is a Node.js program. To run, you will need to have Node.js installed from https://nodejs.org/en/ Check the version of Node.js you have by running node --version

- Install the Protractor using the node! installation guide found on ( https://www.protractortest.org )

- Also You will need to have the Java Development Kit (JDK) installed to run the standalone Selenium Server. Check this by running java -version from the command line

Steps:
1. Clone this repository in Your Projects folder (or any other directory): 
C:\Users\YOUR-NAME\AppData\Roaming\npm\node_modules\protractor\protractor-cucumber-framework

2. Install all necessary packages using npm: Run command to get all necessary packages: 

npm install

3. Write your tests in features/ folder

4. Write your step definitions in stepDefinitions/ folder

5. This framework uses Page Object pattern, so move your locators to separate pages in pages/ folder

6. Run your tests by following command:
 
webdriver-manager update

webdriver-manager start

npm test


Optimization tips :
1) To run on multiple browser make change in the line number 9 - config\config.js file
  multiCapabilities: [{
  browserName: 'firefox'
  }, {
  browserName: 'chrome'  }]
  
2) Protractor API Docs found on the https://www.protractortest.org/#/api

3) Basic tutorial found on the 
https://www.protractortest.org/#/tutorial
https://docs.cucumber.io/
http://www.chaijs.com/api/

4) Use https://www.npmjs.com/package/elementor to make your life easy

5) All E2E tests are executed on the website : computer-database.herokuapp com/computers.






