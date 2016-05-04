(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("carController", ["CarService", carController]);


    function carController(CarService) {
        var vm = this;

        vm.getCarByPlateNo = function () {
            vm.car = CarService.getCarByPlateNo(vm.plateNo);
        };

        vm.cars = CarService.getCars();

    }



})();