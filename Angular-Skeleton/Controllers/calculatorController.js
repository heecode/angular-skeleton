(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("calculatorController", [calculatorController]);

    function calculatorController() {
        var vm = this;
        
        vm.getTotal = function () {
            vm.total = vm.salary * vm.tax;
        };
       // this.getTotal = function() { throw new Error("Not implemented"); };
    }

})();