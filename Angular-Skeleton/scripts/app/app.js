(function () {
    "use strict";
    var dataProcessingApp = angular.module("myApp",
    ["ngRoute", "ngAnimate", "toastr", "LocalStorageModule", "angular-loading-bar", "ui.bootstrap","kendo.directives"]);

    dataProcessingApp.config([
        "$routeProvider",
        function ($routeProvider) {

            $routeProvider
                .when("/Admin", {
                    templateUrl: "Views/Admin/Admin.html"
                })
                .when("/Admin/Users", {
                    templateUrl: "Views/Admin/Users.html",
                    controller: "userController",
                    controllerAs: "userController"
                });

            $routeProvider
                .when("/Home", {
                    templateUrl: "Views/Home.html",
                    controller: "homeController",
                    controllerAs: "homeController"
                }).when("/Register", {
                    templateUrl: "Views/Register.html",
                    controller: "registerController",
                    controllerAs: "registerController"
                }).when("/Calculator", {
                    templateUrl: "Views/Calculator.html",
                    controller: "calculatorController",
                    controllerAs: "calculatorController"
                }).when("/Car", {
                    templateUrl: "Views/Cars.html",
                    controller: "carController",
                    controllerAs: "carController"
                }).when("/login", {
                    templateUrl: "Views/Login.html",
                    controller: "loginController",
                    controllerAs: "loginController"
                }).when("/signup", {
                    templateUrl: "Views/Signup.html",
                    controller: "signupController",
                    controllerAs: "signupController"
                });


           
        }
    ]);

    dataProcessingApp.run(['authService', function (authService) {
        authService.fillAuthData();


    }]);

    dataProcessingApp.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });

})();