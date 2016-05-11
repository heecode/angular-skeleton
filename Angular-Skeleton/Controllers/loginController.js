(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("loginController", ['$location',  'authService', loginController]);

    function loginController($location,  authService) {
        var vm = this;
        vm.loginData = {
            userName: "",
            password: ""
        };

        vm.message = "";

        vm.login = function () {

            authService.login(vm.loginData).then(function (response) {

                $location.path('/cars');

            },
             function (err) {
                 vm.message = err.error_description;
             });
        };

    }

})();


