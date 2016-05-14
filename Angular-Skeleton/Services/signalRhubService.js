(function () {

    angular.module('myApp')
        .factory('SignalRHub', ['$rootScope', 'apiRouteService',
            function ($rootScope, apiRouteService) {

                return function (hubName) {
                    var connection = $.hubConnection(apiRouteService.getApiUrl);
                    var proxy = connection.createHubProxy(hubName);

                    connection.start().done(function () {
                        console.log("SignalR connection started");
                    });

                    return {
                        on: function (eventName, callback) {
                            proxy.on(eventName, function (result) {
                                console.log(eventName + " event received.");
                                $rootScope.$apply(function () {
                                    if (callback) {
                                        callback(result);
                                    }
                                });
                            });
                        }
                    };
                };

            }
        ]);

})();