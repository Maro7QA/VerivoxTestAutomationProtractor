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


