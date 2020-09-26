describe('Users Management', function() {
    
    function operator(a,b,o){


        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        if (o == 'add'){element(by.css("option:nth-child(1)")).click();}
        else if (o == 'div'){element(by.css("option:nth-child(2)")).click();}
        else if (o == 'mod'){element(by.css("option:nth-child(3)")).click();}
        else if (o == 'mul'){element(by.css("option:nth-child(4)")).click();}
        else if (o == 'min'){element(by.css("option:nth-child(5)")).click();};

        /*element.all(by.tagName('option')).each(function(result){

        result.getAttribute('value').then(function(values){
            if (values == o ){
                result.click();
            }
        });*/

        element(by.css("button[id='gobutton']")).click();

    };
    
    it('Open Angularjs WEbsite', function() {

      browser.get('https://juliemr.github.io/protractor-demo/');

      operator(1,2,'mul');
      operator(1,2,'div');
      operator(1,2,'min');
      operator(1,2,'mod');
      element.all(by.repeater('result in memory')).each(function(answer){
          answer.element(by.css('td:nth-child(3)')).getText().then(function(text){
            console.log('The result is: '+ text);
            
          });
      });

     /* element.all(by.repeater('result in memory')).get(2).element(by.css('td:nth-child(3)')).getText().then(function(ans){
            console.log(ans);

      });*/

      browser.sleep(10000);


    
    });
  });