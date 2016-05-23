(function () {
    "use strict";
    var app = angular.module("myApp");

    app.controller("kendoController", ["$scope",kendoController]);

    function kendoController($scope) {
        var vm = this;


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
        }
    };

        

        vm.getDate = function () {
            var date = $scope.index.selectDate;
            window.alert(date);
        }

        vm.xmlGridOptions = {
            DataSource:{
                transport: {
                    // specify the XML file to read. The same as read: { url: "books.xml" }
                    read: "Config/books.xml"
                },
                schema: {
                    // specify the the schema is XML
                    type: "xml",
                    // the XML element which represents a single data record
                    data: "/books/book",
                    // define the model - the object which will represent a single data record
                    model: {
                        // configure the fields of the object
                        fields: {
                            // the "title" field is mapped to the text of the "title" XML element
                            title: "title/text()",
                            // the "author" field is mapped to the text of the "author" XML element
                            author: "author/text()",
                            // the "url" field is mapped to the text of the "url" XML element
                            url: "url/text()",
                            // the "cover" field is mapped to the "id" attribute of the "book" XML element
                            //cover: "@cover"
                        }
                    }
                }

            }};
    

})();