describe('Users Management', function() {
    it('Open Angularjs WEbsite', function() {

      browser.get('https://juliemr.github.io/protractor-demo/');
      
      element(by.model('first')).sendKeys('3');
      element(by.model('second')).sendKeys('7');

      element(by.model('operator')).element(by.css("option:nth-child(4)")).click();
      element(by.css("button[id='gobutton']")).click();

    //element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();
    //element(by.css("button[id='gobutton']")).click();

      browser.sleep(10000);
    });
  });