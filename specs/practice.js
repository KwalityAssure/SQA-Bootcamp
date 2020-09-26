//var using = require('jasmine-data-provider');
const { ExpectedConditions, browser } = require('protractor');

describe('Practice Website', function() {

    //pages
    var practicePage = require ('../pages/practicePage');
    var proShopPage = require ('../pages/practicePage');

    //data
    var practiceData = require ('../data/practiceData.js');
    
    //browser.get('https://rahulshettyacademy.com/angularpractice/');
    browser.get('https://rahulshettyacademy.com/angularpractice/shop');

    browser.sleep(1000000);

    //element(by.css("a[class='nav-link']")).click();
            proShopPage.addIphone.click();
            proShopPage.checkout1();
            browser.sleep(10000);         
    // using(practiceData.data, function (dataSet, description) {

    //     it('Submitting ProtoCommerce Screen', function() {

    //         

    //         practicePage.name(dataSet.name);
    //         practicePage.email(dataSet.email);
    //         practicePage.password(dataSet.password);
    //         practicePage.enableCheckbox();
    //         practicePage.selectGender(dataSet.gender);
    //         practicePage.employmentStatus(dataSet.eStatus);
    //         practicePage.enterBirthday(dataSet.bday);
    //         practicePage.clickSubmitButton();
    //         practicePage.assertSuccessMessage(dataSet.successMessage);
    //         practicePage.message(dataSet.InvalidMessage);

           
    //     });

    // });

});
  
  