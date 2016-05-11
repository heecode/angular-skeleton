(function () {
    "use strict";
    var app = angular.module("myApp");

    var apiRouteService = function () {
        //var apiurl = "http://10.14.161.233:6060/dp.api";
        //var apiurl = "http://10.14.161.233:2468/dp.api";
        var apiurl = "http://localhost:32106/api/";

        //TODO :Controller from web api 
        return {
            getUriFor_usersController: apiurl + "/users",
            getUriFor_carsController: apiurl + "/cars",
            getUriFor_homeController: apiurl + "/homes",
            getUriFor_accountController: apiurl + "/account",
            getUriFor_tokenController: apiurl + "/token"
        };
    }

    app.factory("apiRouteService", [apiRouteService]);
})();