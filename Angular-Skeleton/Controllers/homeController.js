(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("homeController", [homeController]);

    function homeController() {
        var vm = this;
        vm.greeting ="Hello World";
        vm.learns = ['angular.js', "d3.js", 'bootstrap'];
        vm.name = "Heemi Fazeree";
        vm.message = "Acah Acah Angular";
        vm.showMessage = function(arg) {
            console.log('message change' + arg);
        }

    }

})();