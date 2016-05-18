(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("homeController", [homeController]);

    function homeController(authService, $location) {
        var vm = this;
        vm.greeting ="Hello World";
        vm.learns = ['angular.js', "d3.js", 'bootstrap'];
        vm.name = "Heemi Fazeree";
        vm.message = "Acah Acah Angular";
        vm.showMessage = function(arg) {
            console.log('message change' + arg);
        }

        vm.toolTipOptions = {
            animation: {
                open: {
                    effects: "fade:in",
                    duration: 1000
                }
            },
            filter: "td:nth-child(2)",
            position: "top",
            content: function (e) {
                var grid = e.target.closest(".k-grid").getKendoGrid();
                var dataItem = grid.dataItem(e.target.closest("tr"));
                return dataItem.LastName;

            },
            show: function (e) {
                this.popup.element[0].style.width = "300px";
            }
        }

        vm.mainGridOptions = {
            dataSource: {
                type: "odata",
                transport: {
                    read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
                },
                pageSize: 5,
                serverPaging: true,
                serverSorting: true
            },
            sortable: true,
            pageable: true,
            dataBound: function () {
                this.expandRow(this.tbody.find("tr.k-master-row").first());
            },
            columns: [{
                field: "FirstName",
                title: "First Name",
                width: "120px"
            }, {
                field: "LastName",
                title: "Last Name",
                width: "120px"
            }, {
                field: "Country",
                width: "120px"
            }, {
                field: "City",
                width: "120px"
            }, {
                field: "Title"
            }]
        };


    }

})();