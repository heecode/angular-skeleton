(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("carController", ["CarService", "notificationService", "$uibModal", "SignalRHub", carController]);

    function carController(CarService, notificationService, $uibModal, SignalRHub) {
        var vm = this;

        var carHub = SignalRHub('carHub');
        carHub.on('getCars', function () {
            loadCars();
        });

        var searchCarByPlateNo = function (plateNo) {
            CarService.GetCarByPlateNo(plateNo).then(function (results) {
                vm.cars = [];
                vm.cars.push(results.data[0]);
            }, function (reason) {
                console.log(reason);
            });
        }
        
       var saveCar = function (carContext) {

           if (carContext == null) {
                carContext = {
                   plateNo: vm.plateNo,
                   owner: vm.owner,
                   carType: vm.carType
               };
           }
           vm.context = carContext;
            CarService.Save(vm.context).then(function (results) {
              // vm.cars.push(carContext);
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

        var openModal = function (template) {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: template,
                controller: 'CarInstanceCtrl',
                size: 'lg'

            });

            modalInstance.result.then(function (carContext) {
                saveCar(carContext);
            }, function () {
                // $log.info('Modal dismissed at: ' + new Date());
            });
        };


        vm.save = function () {
            saveCar();
        }

        vm.open = function () {
            openModal('saveCar.html');
        }

        vm.openTemplate = function () {
            openModal('Views/Car.html');
        }

        vm.getCarByPlateNo = function () {
            vm.car = searchCarByPlateNo(vm.plateNo);

        };

        loadCars();

    }

    app.controller("CarInstanceCtrl", ["$scope", "$uibModalInstance", CarInstanceCtrl]);

    function CarInstanceCtrl($scope,$uibModalInstance) {
       
        $scope.ok = function () {
            var carContext = {
                plateNo: $scope.plateNo,
                owner: $scope.owner,
                carType: $scope.carType
            };
            $uibModalInstance.close(carContext);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        
    }




})();