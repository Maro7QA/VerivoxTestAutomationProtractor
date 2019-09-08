exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 6000,
    allScriptsTimeout: 50000,
    specs: ['../features/*.feature'],
   // baseURL: 'http://computer-database.herokuapp.com/computers',
   baseURL: 'https://www.verivox.de/',
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    capabilities: {
        'browserName': 'chrome'
    },
    cucumberOpts: {
        require: '../stepDefinitions/*.js',
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    }
};