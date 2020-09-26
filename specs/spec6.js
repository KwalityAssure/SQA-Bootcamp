describe('Users Management', function() {
    it('Open Angularjs WEbsite', function() {

        browser.get('https://juliemr.github.io/protractor-demo/');
      
      element(by.model('first')).sendKeys('3');
      element(by.model('second')).sendKeys('7');

      element(by.id('gobutton')).click();

      //element(by.css("td[class='ng-binding']")).getText().then(function(result){

      //  console.log(result);
      //});

      //tagname[attributes'value']
      //don't use xpass :)
      //console.log(element(by.css("h2[class='ng-binding']")).getText());
      browser.sleep(10000);
      
      element(by.repeater("result in memory")).element(by.css("td:nth-child(2)")).getText().then(function(result){

        console.log(result);
      });
    });
  });