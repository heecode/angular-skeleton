(function () {
    "use strict";
    var app = angular.module("myApp");

    var CarService = function (apiRouteService, httpServices) {

        var carService = {};

        var getCars = (function () {
            var uri = apiRouteService.getUriFor_carsController;
            return httpServices.HttpGetService(uri);

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

        return carService;

    }

    app.factory("CarService", ["apiRouteService", "httpServices", CarService]);
})();


