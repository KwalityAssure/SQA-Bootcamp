var using = require('jasmine-data-provider');
const { browser } = require('protractor');

describe('ProCommerce', function() {

  var proCommerceData = require("../data/proCommerceData.js");
  var proCommercePage = require("../pages/proCommercePage.js");

    using(proCommerceData.test,function(test,description){

      it('Fill out form', function() {
        browser.get('https://rahulshettyacademy.com/angularpractice/');
      
        proCommercePage.name(test.name);
        proCommercePage.email.sendKeys(test.email);
        proCommercePage.pass.sendKeys(test.pass);
        proCommercePage.check.click();
        proCommercePage.genderm.click();
        proCommercePage.employstatstud.click();
        proCommercePage.dateofbirth.sendKeys(test.datebirth);
        proCommercePage.submit.click();  
        browser.sleep(10000);
      });
  });
});