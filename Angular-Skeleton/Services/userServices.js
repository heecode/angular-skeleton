(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('userServices', userServices);

    userServices.$inject = ['$http'];

    function userServices($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();