describe('Users Management', function() {
    it('Open Angularjs WEbsite', function() {

        browser.waitForAngularEnabled(false);

        browser.get('https://www.google.com/');
        
    element(by.name("q")).sendKeys('Angular websites').then(function(){
    browser.sleep(10000);  
     element(by.css("input[class='gNO89b']")).click();
    browser.sleep(10000);   
    })    
    

    });
});