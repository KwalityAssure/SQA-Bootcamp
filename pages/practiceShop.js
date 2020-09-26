const { browser } = require("protractor");

function proShopPage(){

    this.addIphone = function(){
        element.all(by.css("button[class='btn btn-info']")).get(0).click();
    }
    this.addSamsung = function(){
        element.all(by.css("button[class='btn btn-info']")).get(1).click();
    }
    this.addNokia = function(){
        element.all(by.css("button[class='btn btn-info']")).get(2).click();
    }
    this.addBlackberry =function(){
        element.all(by.css("button[class='btn btn-info']")).get(3).click();
    }
    this.checkout1 = element(by.css('button[class="navbar-toggler"]')).click().then(function(){

        element(by.css("a[class='nav-link btn btn-primary']")).click();
    });
    
}

module.exports = new proShopPage();

