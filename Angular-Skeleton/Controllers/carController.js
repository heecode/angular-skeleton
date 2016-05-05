(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("carController", ["CarService", "notificationService", carController]);

    function carController(CarService, notificationService) {
        var vm = this;

        var searchCarByPlateNo = function (plateNo) {
            CarService.GetCarByPlateNo(plateNo).then(function (results) {
                vm.cars = [];
                vm.cars.push(results.data[0]);
            }, function (reason) {
                console.log(reason);
            });
        }

        var saveCar = function () {
            var carContext = {
                plateNo: vm.plateNo,
                owner: vm.owner,
                carType: vm.carType
            };
            vm.context = carContext;
            CarService.Save(vm.context).then(function (results) {
               vm.cars.push(carContext);
                notificationService.success("Saved", "Success");
            }, function (reason) {
                notificationService.error(reason);
            });
        }

        var loadCars = function () {
            vm.rawContext = "";
            CarService.GetCars().then(function (results) {
                vm.cars = results.data;
                notificationService.success("Data Load","Success");
           }, function (reason) {
               notificationService.error(reason);
            });
        }


        vm.save = function () {
            saveCar();
        }

        vm.getCarByPlateNo = function () {
            vm.car = searchCarByPlateNo(vm.plateNo);

        };

        loadCars();

    }



})();