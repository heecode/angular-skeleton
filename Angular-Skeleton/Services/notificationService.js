(function () {

    var dataProcessingApp = angular.module("myApp");

    var notificationService = function (toastr) {
        return toastr;
    }

    dataProcessingApp.factory("notificationService", ["toastr", notificationService]);
})();