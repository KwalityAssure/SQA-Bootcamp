var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework:'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // capabalities: {
    // browsername: 'Chrome'
    //},
     specs: ['../specs/proCommerceSpec.js'],

     onPrepare: function(){

        browser.driver.manage().window().maximize();
    
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath:'../ReportFolder/screenshots'
          })
        );
    
    
    
      }
};