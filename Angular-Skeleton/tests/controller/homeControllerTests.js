/// <reference path="../../scripts/angular.js" />
/// <reference path="../../scripts/angular-mocks.js" />
/// <reference path="../../scripts/angular-route.js" />
/// <reference path="../../scripts/angular-animate.js" />
/// <reference path="../../scripts/angular-toastr.js" />
/// <reference path="../../scripts/app/app.js" />
/// <reference path="../../Controllers/homeController.js" />

describe('Controller: HomeController', function () {
    beforeEach(module('myApp'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.grade', function () {
        var controller;

        beforeEach(function () {
            controller = $controller('homeController', {});
        });

        it('default name should be Heemi Fazeree', function () {
            //controller.name = 'longerthaneightchars';
           // controller.grade();
            expect(controller.name).toEqual('Heemi Fazeree');
        });
    });
});

