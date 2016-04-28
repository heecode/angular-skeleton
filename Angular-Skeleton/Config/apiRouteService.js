(function () {
    "use strict";
    var dataProcessingApp = angular.module("myApp");

    var apiRouteService = function () {
        //var apiurl = "http://10.14.161.233:6060/dp.api";
        //var apiurl = "http://10.14.161.233:2468/dp.api";
        var apiurl = "http://localhost:7431";

        //TODO :Controller from web api 
        return {
            getUriFor_usersController: apiurl + "/users",
            getUriFor_homeController: apiurl + "/homes"
        };
    }

    dataProcessingApp.factory("apiRouteService", [apiRouteService]);
})();