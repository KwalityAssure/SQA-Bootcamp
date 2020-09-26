describe('Users Management', function() {
    it('Open Angularjs WEbsite', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
      
      element(by.model('first')).sendKeys('3');
      element(by.model('second')).sendKeys('7');

      element(by.id('gobutton')).click();

      element(by.css("button[id='gobutton']")).click();
      //tagname[attributes'value']
      //don't use xpass :)
      //console.log(element(by.css("h2[class='ng-binding']")).getText());
      browser.sleep(10000);

      expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('16');
// ng-model - ng-binding : ng means angular
    });
  });