'use strict';
var app = angular.module("myApp");
app.controller('indexController', ['$scope', '$location', 'authService', '$rootScope', 'emitService', function ($scope, $location, authService, $rootScope, emitService) {


    $scope.logOut = function () {
        authService.logOut();
        $location.path('/Home');
    }

    $scope.index = {};
    $scope.index.selectDate = '';
    $scope.index.parentText = '';


    $scope.authentication = authService.authentication;

    $rootScope.$on('eventNameService', function (event, args) {
        $scope.parentMessage = args.message;
        //console.log($scope.message);
    });

    //$scope.parentMessage = emitService.readEmit;

    $scope.$on('eventName', function (event, args) {
        $scope.parentMessage = args.message;
        //console.log($scope.message);
    });

    $scope.handleClick = function (msg) {
        $scope.$broadcast('eventBroadcast', { message: msg });
    }; 

    $scope.handleClickService = function (msg) {
        emitService.SetBroadcast(msg)
    };


}]);