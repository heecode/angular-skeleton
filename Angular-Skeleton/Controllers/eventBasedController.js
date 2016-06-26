(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("eventBasedController", ["$scope", "$rootScope", "emitService", eventBasedController]);

    function eventBasedController($scope,$rootScope, emitService) {
        var vm = this;

        vm.handleClick = function (msg) {
            $scope.$emit('eventName', { message: msg });
        };

        vm.handleClickService = function (msg) {
            emitService.GetEmit(msg);
        };

        $scope.$on('eventBroadcast', function (event, args) {
            vm.childMessage = args.message;
          //  console.log($scope.message);
        });

        $rootScope.$on('eventBroadcast', function (event, args) {
            vm.childMessage = args.message;
            //  console.log($scope.message);
        });

    }

})();