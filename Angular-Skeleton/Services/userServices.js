(function () {
    "use strict";
    var app = angular.module("myApp");

    var UserService = function (apiRouteService, httpServices) {

        var userService = {};

        var getUsers = (function () {
            var uri = apiRouteService.getUriFor_usersController ;
            return httpServices.HttpGetService(uri);

        });

        var getUserByName = (function (name) {
            var uri = apiRouteService.getUriFor_usersController + "?name=" + name;;
            return httpServices.HttpGetService(uri);
        });

        userService.GetUsers = getUsers;
        userService.GetUserByName = getUserByName;

        return userService;

    }

    app.factory("UserService", ["apiRouteService", "httpServices", UserService]);
})();


