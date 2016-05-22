'use strict';
var app = angular.module("myApp");
app.controller('indexController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {


    $scope.logOut = function () {
        authService.logOut();
        $location.path('/Home');
    }

    $scope.index = {};
    $scope.index.selectDate = '';
    $scope.index.parentText = '';


    $scope.authentication = authService.authentication;

}]);