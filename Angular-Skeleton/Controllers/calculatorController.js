(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("calculatorController", ["HelloService", calculatorController]);
   

    function calculatorController(HelloService) {
        var vm = this;

        
        
        vm.getTotal = function () {
            vm.total = vm.salary * vm.tax;
        };

        vm.hello = HelloService.SayHello('Heemi Hanif');
        vm.sayMyName = HelloService.SayMyName('Heemi Fazeree');
        // this.getTotal = function() { throw new Error("Not implemented"); };
    }



})();