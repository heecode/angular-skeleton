(function () {
    "use strict";
    var app = angular.module("myApp");

    var apiRouteService = function () {
        //var apiurl = "http://10.14.161.233:6060/dp.api";
        //var apiurl = "http://10.14.161.233:2468/dp.api";
        var apiurl = "http://localhost:32106/";

        //TODO :Controller from web api 
        return {
            getUriFor_usersController: apiurl + "api/users",
            getUriFor_carsController: apiurl + "api/cars",
            getUriFor_homeController: apiurl + "api/homes",
            getUriFor_accountController: apiurl + "api/account",
            getUriFor_tokenController: apiurl + "token",
            getApiUrl : apiurl
        };
    }

    app.factory("apiRouteService", [apiRouteService]);
})();