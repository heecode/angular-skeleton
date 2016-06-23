(function () {
    "use strict";
    var app = angular.module("myApp");

    var CarService = function (apiRouteService, httpServices) {

        var carService = {};

        var getCars = (function () {
            var uri = apiRouteService.getUriFor_carsController;
            return httpServices.HttpGetService(uri);

        });

        var getCarByCarVM = (function (data) {
            var uri = apiRouteService.getUriFor_carsController_by_vm;
            return httpServices.HttpGetService(uri,data);
        });

        var getCarByPlateNo = (function (plateNo) {
            var uri = apiRouteService.getUriFor_carsController + "?PlateNo=" + plateNo;;
            return httpServices.HttpGetService(uri);
        });

        var update = (function(id, data) {
            var turi = uri + "/" + id + "?cache=" + moment();
            return httpServices.HttpPostService(turi, data);
        });

        var save = (function(data) {
            var uri = apiRouteService.getUriFor_carsController;
            return httpServices.HttpPostService(uri, data);
        });

        carService.GetCars = getCars;
        carService.GetCarByPlateNo = getCarByPlateNo;
        carService.Save = save;
        carService.Update = update;
        carService.GetCarByCarVM = getCarByCarVM;

        return carService;

    }

    app.factory("CarService", ["apiRouteService", "httpServices", CarService]);
})();


