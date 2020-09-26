describe('Users Management', function() {
    it('Open Angularjs WEbsite', function() {

      browser.get('https://juliemr.github.io/protractor-demo/');
      
      element(by.model('first')).sendKeys('3');
      element(by.model('second')).sendKeys('7');
      element(by.css("button[id='gobutton']")).click();

      element(by.model('first')).sendKeys('6');
      element(by.model('second')).sendKeys('10');
      element(by.css("button[id='gobutton']")).click();

      element(by.model('first')).sendKeys('7');
      element(by.model('second')).sendKeys('8');
      element(by.css("button[id='gobutton']")).click();

      //element.all(by.repeater('result in memory')).count().then(function(result){
      //console.log(result);
      //});

      element.all(by.css('.ng-scope td')).each(function(answer){
          answer.getText().then(function(text){
              console.log(text);
          });
      });

      element(by.repeater("result in memory")).element(by.css('td:nth-child(3)'))


      browser.sleep(10000);
    });
  });