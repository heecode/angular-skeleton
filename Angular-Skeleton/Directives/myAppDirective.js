﻿(function() {
    "use strict";
    var app = angular.module("myApp");

    app.directive("helloWorld", [helloWorld]);

    function helloWorld() {
        return {
            scope: true,
            restrict: 'AE',
            replace: true,
            template: '<h3>Hello World from Directives</h3>'
        };
    };

    app.directive("helloWorldTemplate", [helloWorldTemplate]);

    function helloWorldTemplate() {
        return {
            scope: true,
            restrict: 'AEC',
            replace: true,
            templateUrl: 'Views/HelloWorld.html'
        };
    };

    app.directive("helloWorldBinding", [helloWorldBinding]);
    function helloWorldBinding() {
        return {
            //scope: {
            //    message: '=messageAttr',
            //    showMessage : '&showMessage'
            //},
            restrict: 'AEC',
            replace: true,
            templateUrl: 'Views/HelloWorldBinding.html',
            link : function(scope, elem, attrs) {
                scope.$watch('homeController.message', function (value) {
                    console.log('message changed');
                });

                scope.clearMessage = function() {
                    scope.homeController.message = '';
                }
            }
        };
    };

    app.directive("helloWorldBindingIsolate", [helloWorldBindingIsolate]);
    function helloWorldBindingIsolate() {
        return {
            scope: {
                message: '=messageAttr',
                showMessage: '&showMessageAttr'
            },
            restrict: 'AEC',
            replace: true,
            templateUrl: 'Views/HelloWorldIsolate.html',
            link: function (scope, elem, attrs) {
                scope.$watch('message', function (value) {
                    scope.showMessage({ arg: 'sample argument' });
                });

                scope.clearMessage = function () {
                    scope.message = '';//

                }
            }
        };
    };

    app.directive("inputPositive", function () {
        return {
            restrict: "C",
            link: function (scope, element) {
                element.bind("keypress", function (e) {
                    var code = e.charCode || e.keyCode;
                    if (code === 45) { e.preventDefault(); }

                });
            }
        }
    });

    //app.directive("hcChart", [ hcChart]);
    //function hcChart() {
    //    return {
    //        restrict: 'E',
    //        template: '<div></div>',
    //        scope: {
    //            options: '='
    //        },
    //        link: function (scope, element) {
    //           Highcharts.chart(element[0], scope.options);
    //        }
    //    };
    //};

    // this.getTotal = function() { throw new Error("Not implemented"); };
})();

