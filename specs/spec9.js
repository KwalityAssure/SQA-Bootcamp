describe('Users Management', function() {
    it('Open Angularjs WEbsite', function() {

  var add =['10','16','15'];
        var index = 0;      
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
      element.all(by.repeater('result in memory')).each(function(answer){
          answer.element(by.css('td:nth-child(3)')).getText().then(function(text){
              
            console.log(text);
            
          });
      });

      browser.sleep(10000);
    });
  });
