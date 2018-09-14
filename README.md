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


More to learn 
- # Protractor cheat sheet | Protractor short cuts |  Protractor help

1) To Control The We Browser :

- browser.get('yoururl'); // Load address, can also use '#yourpage'
- browser.navigate().back();
- browser.navigate().forward();
- browser.sleep(10000); // if your test is outrunning the browser
- browser.waitForAngular(); // if your test is outrunning the browser
- browser.getLocationAbsUrl() // get the current address
- browser.ignoreSynchronization = true; // If true, Protractor will not attempt to synchronize with the page before performing actions

2) Wait for some web element to become present/visible  :

 browser.wait(function() {
   return element(by.id('create')).isPresent();
 }, 5000);
 element(by.id('create')).click();

3) To Check The Visibility
- element(by.id('create')).isPresent() // Be careful with this: element is often present while it's not displayed...
- element(by.id('create')).isEnabled() //Enabled/disabled, as in ng-disabled...
- element(by.id('create')).isDisplayed() //Is element currently visible/displayed?

4) Finding ways for the HTML web elements  :

- element(by.id('user_name'))
- element(by.css('#myItem'))
- element(by.model('person.name')) // refers to ng-model directive
- element(by.binding('person.concatName')); // refers to ng-bind directive
- element(by.textarea('person.extraDetails'));
- element (by.input( 'username' ));
- element (by.input( 'username' )).clear();
- element(by.buttonText('Save'));
- element(by.partialButtonText('Save'));
- element(by.linkText('Save'));
- element(by.partialLinkText('Save'));
- element(by.css('[ng-click="cancel()"]')); 
- var dog = element(by.cssContainingText('.pet', 'Dog'));
- var allOptions = element.all(by.options('c c in colors')); //When ng-options is used with selectbox

5) Finding the collection of HTML web elements :

- var list = element.all(by.css('.items));
- var list2 = element.all(by.repeater('personhome.results'));
- var list3 = element.all(by.xpath('//div
- expect(list.count()).toBe(3);
- expect(list.get(0).getText()).toBe('First’)
- expect(list.get(1).getText()).toBe('Second’)
- expect(list.first().getText()).toBe('First’)
- expect(list.last().getText()).toBe('Last’)

6) Wasy to Send keystrokes :

- element(by.id('user_name').sendKeys("user1");
- sendKeys(protractor.Key.ENTER);
- sendKeys(protractor.Key.TAB);
- element(by.id('user_name')).clear()

7) Web element position handling :

 element(by.id('item1')).getLocation().then(function(location) {
  var x = location.x;
  var y = location.y;
 });

 element(by.id('item1')).getSize().then(function(size) {
  var width = size.width;
   var height = size.height;
 });

8) For the Jasmine Matchers :

- to(N­ot)­Be( null | true | false )
- to(N­ot)­Equ­al( value )
- to(N­ot)­Mat­ch( regex | string )
- toBe­Def­ine­d()
- toBe­Und­efi­ned()
- toBe­Nul­l()
- toBe­Tru­thy()
- toBe­Fal­sy()
- to(N­ot)­Con­tain( string )
- toBe­Les­sTh­an( number )
- toBe­Gre­ate­rTh­an( number )
- toBe­NaN()
- toBe­Clo­seTo( number, precision )
- toTh­row()




