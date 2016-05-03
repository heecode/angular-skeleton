(function () {
    "use strict";
    var app = angular.module("myApp");

    var Service = function ($timeout) {

        var helloService = {};
        var sayHello = (function (name) {
            $timeout(function () {
                alert('Hello ' + name);
            }, 2000);

        });

        var sayMyName = (function (name) {
            return 'Hello  Wei ' + name;
        });

        helloService.SayHello = sayHello;
        helloService.SayMyName = sayMyName;

        return helloService;

    }

    app.factory("Service", ["$timeout", Service]);
})();


