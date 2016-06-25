(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller( "eventBasedController", ["$scope",eventBasedController]);

    function eventBasedController($scope) {
        var vm = this;

        vm.handleClick = function (msg) {
            $scope.$emit('eventName', { message: msg });
        };

        $scope.$on('eventBroadcast', function (event, args) {
            vm.childMessage = args.message;
          //  console.log($scope.message);
        });

    }

})();