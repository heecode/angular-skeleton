/// <reference path="../../scripts/angular.js" />
/// <reference path="../../scripts/angular-mocks.js" />
/// <reference path="../../scripts/angular-route.js" />
/// <reference path="../../scripts/angular-animate.js" />
/// <reference path="../../scripts/angular-toastr.js" />
/// <reference path="../../scripts/app/app.js" />
/// <reference path="../../Controllers/calculatorController.js" />

describe('Controller: calculatorController', function () {
    beforeEach(module('myApp'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.grade', function () {
        var controller;

        beforeEach(function () {
            controller = $controller('calculatorController', {});
        });

        it('should be 12', function () {
            
            controller.salary = 3;
            controller.tax = 4;
            controller.getTotal();
            expect(controller.total).toEqual(12);
        });
    });
});

