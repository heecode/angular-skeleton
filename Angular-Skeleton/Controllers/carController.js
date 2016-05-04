﻿(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("carController", ["CarService", carController]);

    //app.controller("carController", [ carController]);

    function carController(CarService) {
        var vm = this;

        vm.getCarByPlateNo = function () {
            vm.car = searchCarByPlateNo(vm.plateNo);
           // vm.car = CarService.GetCarByPlateNo(vm.plateNo);
        };

        var searchCarByPlateNo = function(plateNo) {
            CarService.GetCarByPlateNo(plateNo).then(function (results) {
                //vm.car = results.data;
                //vm.cars = [];
                vm.cars.push(results.data);
            }, function (reason) {
                console.log(reason);
            });
        }

        var loadCars = function () {
            vm.rawContext = "";
            CarService.GetCars().then(function (results) {
                vm.cars = results.data;
           }, function (reason) {
               console.log(reason);
            });
        }
        loadCars();

    }



})();