﻿(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("signupController", ['$location', '$timeout', 'authService', signupController]);

    function signupController($location, $timeout, authService) {
        var vm = this;
        vm.savedSuccessfully = false;
        vm.message = "";
        vm.registration = {
            userName: "",
            password: "",
            confirmPassword: ""
        };

        vm.signUp = function () {

            authService.saveRegistration(vm.registration).then(function (response) {

                vm.savedSuccessfully = true;
                vm.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
                startTimer();

            },
             function (response) {
                 var errors = [];
                 for (var key in response.data.modelState) {
                     for (var i = 0; i < response.data.modelState[key].length; i++) {
                         errors.push(response.data.modelState[key][i]);
                     }
                 }
                 $scope.message = "Failed to register user due to:" + errors.join(' ');
             });
        };

        var startTimer = function () {
            var timer = $timeout(function () {
                $timeout.cancel(timer);
                $location.path('/login');
            }, 2000);
        }

    }

})();


