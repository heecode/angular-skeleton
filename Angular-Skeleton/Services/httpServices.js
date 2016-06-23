(function () {

    var app = angular.module("myApp");

    var httpServices = function (apiRouteService, $http, $q) {

        var services = {};

        var httpGet = function (uri,data) {
            var deferred = $q.defer();

            var config = {
                params : data
            }

            var successfullGet = function (results) {
                deferred.resolve(results);
            };

            var failedGet = function (reason) {
                deferred.reject(reason);
            };

            $http.get(uri,config).then(successfullGet, failedGet);

            return deferred.promise;
        }

        var httpPost = function (uri, data) {
            var deferred = $q.defer();

            var successfullPost = function (results) {
                deferred.resolve(results);
            };

            var failedPost = function (reason) {
                deferred.reject(reason);
            };

            $http.post(uri, data).then(successfullPost, failedPost);

            return deferred.promise;
        };

        var httpDelete = function (uri) {
            var deferred = $q.defer();

            var successfullDelete = function (results) {
                deferred.resolve(results);
            };

            var failedDelete = function (reason) {
                deferred.reject(reason);
            };

            $http.delete(uri).then(successfullDelete, failedDelete);
            return deferred.promise;
        }

        var httpPut = function (uri, data) {
            var deferred = $q.defer();

            var successfullPut = function (results) {
                deferred.resolve(results);
            };

            var failedPut = function (reason) {
                deferred.reject(reason);
            };

            $http.put(uri, data).then(successfullPut, failedPut);

            return deferred.promise;
        };

        services.HttpGetService = httpGet;
        services.HttpPostService = httpPost;
        services.HttpDeleteService = httpDelete;
        services.HttpPutService = httpPut;
        return services;
    }

    app.factory("httpServices",
        ["apiRouteService", "$http", "$q",
            httpServices]);
})();