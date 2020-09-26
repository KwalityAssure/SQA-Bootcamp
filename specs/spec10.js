describe('Users Management', function() {
    
    function add(s,k){

        element(by.model('first')).sendKeys(s);
        element(by.model('second')).sendKeys(k);
        element(by.css("button[id='gobutton']")).click();
        
    };
    
    it('Open Angularjs WEbsite', function() {

      browser.get('https://juliemr.github.io/protractor-demo/');

      add(5,8);
      add(3,7);
      add(2,3);

      element.all(by.repeater('result in memory')).each(function(answer){
          answer.element(by.css('td:nth-child(3)')).getText().then(function(text){
            console.log(text);
            
          });
      });

      element.all(by.repeater('result in memory')).get(2).element(by.css('td:nth-child(3)')).getText().then(function(ans){
            console.log(ans);

      });

      browser.sleep(10000);

    });
  });