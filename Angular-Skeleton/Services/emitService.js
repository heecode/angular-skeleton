(function () {
    "use strict";
    var app = angular.module("myApp");

    var EmitService = function ($rootScope) {

        var emitService = {};
       

        var getEmit = (function (msg) {
            $rootScope.$emit('eventNameService', { message: msg });
        });

        var setBroadcast = (function (msg) {
            $rootScope.$broadcast('eventBroadcast', { message: msg });
        });

        var readEmit = function () {
            $rootScope.$on('eventNameService', function (event, args) {
               // $scope.parentMessage = args.message;
                return args.message;
        //console.log($scope.message);
    });

        }

        emitService.GetEmit = getEmit;
        emitService.ReadEmit = readEmit;
        emitService.SetBroadcast = setBroadcast;
        
        return emitService;

    }

    app.factory("emitService", ["$rootScope", EmitService]);
})();


