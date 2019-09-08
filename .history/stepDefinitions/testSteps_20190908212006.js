var compPage = require('../pages/CompPage');
var addEditPage = require('../pages/AddEditPage');
var homepage = require('../pages/homepage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

this.Given(/^the site "([^"]*)" is opened$/, function (site, callback) {
    browser.waitForAngularEnabled(false);
    browser.get(site)
   // browser.driver.manage().window().maximize()
      .then(callback);
});

this.When(/^I add "([^"]*)" in the search field$/, function (task, callback) {
    compPage.searchField.sendKeys(task)
//    browser.driver.sleep(2000)
        .then(callback);
});

this.When(/^I click the filter button$/, function (callback) {
    compPage.filterBtn.click()
//    browser.driver.sleep(2000)
        .then(callback);
});

this.Then(/^I should see "([^"]*)" in the result$/, function (result, callback) {
    expect(compPage.result.getText()).to.eventually.equal(result)
        .and.notify(callback);
});

this.Then(/^I should see "([^"]*)" in the Computer name field/, function (computer, callback) {
    var tableData = element.all(by.css(".zebra-striped"));

    // get rows
    var rows = tableData.all(by.tagName("tr"));

    // get cell values
    var cells = rows.all(by.tagName("td"));

    expect(cells.get(0).getText()).to.eventually.equal(computer);
    browser.driver.sleep(2000)
        .then(callback);
    });

    this.Then(/^I should see "([^"]*)" in the Introduced field/, function (introduced, callback) {
        var tableData = element.all(by.css(".zebra-striped"));

        // get rows
        var rows = tableData.all(by.tagName("tr"));

        // get cell values
        var cells = rows.all(by.tagName("td"));

        expect(cells.get(1).getText()).to.eventually.equal(introduced);
        browser.driver.sleep(2000)
            .then(callback);
    });

    this.Then(/^I should see "([^"]*)" in the Discontinued field$/, function (discontinued, callback) {
        var tableData = element.all(by.css(".zebra-striped"));

        // get rows
        var rows = tableData.all(by.tagName("tr"));

        // get cell values
        var cells = rows.all(by.tagName("td"));

        expect(cells.get(2).getText()).to.eventually.equal(discontinued);
        browser.driver.sleep(2000)
            .then(callback);
    });

    this.Then(/^I should see "([^"]*)" in the Company field$/, function (company, callback) {
        var tableData = element.all(by.css(".zebra-striped"));

        // get rows
        var rows = tableData.all(by.tagName("tr"));

        // get cell values
        var cells = rows.all(by.tagName("td"));

        expect(cells.get(3).getText()).to.eventually.equal(company);
        browser.driver.sleep(2000)
            .then(callback);
    });

this.Given(/^I click Add a new computer button$/, function (callback) {
    compPage.addBtn.click()
        .then(callback);
    });

this.Then(/^url should be "([^"]*)"$/, function (url, callback) {
    expect(browser.getCurrentUrl()).to.eventually.equal(url)
        .and.notify(callback);
    });

this.When(/^I fill in Computer name field with "([^"]*)"$/, function (name, callback) {
    addEditPage.compName.sendKeys(name);
    browser.driver.sleep(2000)
        .then(callback);
    });

this.When(/^I fill in Introduced date field with "([^"]*)"$/, function (date, callback) {
    addEditPage.introduced.sendKeys(date);
    browser.driver.sleep(2000)
        .then(callback);
    });

this.When(/^I fill in Discontinued date field with "([^"]*)"$/, function (date, callback) {
    addEditPage.discontinued.sendKeys(date);
    browser.driver.sleep(2000)
       .then(callback);
    });


this.When(/^I select IBM company$/, function (callback) {
    addEditPage.company.element(by.css('[value="13"]')).click();
    browser.driver.sleep(2000)
        .then(callback);
    });

this.When(/^I select RCA company$/, function (callback) {
        addEditPage.company.element(by.css('[value="3"]')).click();
        browser.driver.sleep(2000)
            .then(callback);
    });

this.When(/^I click Save this computer button$/, function (callback) {
    addEditPage.saveComp.click();
    browser.driver.sleep(2000)
        .then(callback);
    });

this.When(/^I click Cancel button$/, function (callback) {
    addEditPage.cancelBtn.click();
    browser.driver.sleep(2000)
        .then(callback);
    });

this.Then(/^I should see the following message "([^"]*)"$/, function (message, callback) {
    expect(compPage.successMessage.getText()).to.eventually.equal(message);
    browser.driver.sleep(2000)
        .then(callback);
    });

this.Then(/^I should see missed field error$/, function (callback) {
    expect(addEditPage.missedFieldError.isDisplayed());
    browser.driver.sleep(2000)
        .then(callback);
    });

this.Then(/^I should see "([^"]*)" message$/, function (message, callback) {
    expect(compPage.nothToDisplay.getText()).to.eventually.equal(message);
    browser.driver.sleep(2000)
        .then(callback);
    });

this.When(/^I click "([^"]*)" in the Table$/, function (computer, callback) {
    compPage.compInTheTable.click();
    browser.driver.sleep(2000)
        .then(callback);
    });

this.When(/^I click Delete this computer button$/, function (callback) {
    addEditPage.deleteBtn.click();
    browser.driver.sleep(2000)
        .then(callback);
    });

    this.When(/^I clear not empty fields$/, function (callback) {
    addEditPage.compName.clear();
    addEditPage.introduced.clear();
    addEditPage.discontinued.clear();
    browser.driver.sleep(2000)
        .then(callback);
    });

this.When(/^I click Next button$/, function (callback) {
    compPage.nextBtn.click();
    browser.driver.sleep(2000)
        .then(callback);
    });

    this.When(/^I click Previous button$/, function (callback) {
    compPage.prevBtn.click();
    browser.driver.sleep(2000)
        .then(callback);
    });

    this.When(/^I select cellphone section$/, function (callback) {
        homepage.cellPhone.click();
        browser.driver.sleep(2000)
            .then(callback);
        });


};