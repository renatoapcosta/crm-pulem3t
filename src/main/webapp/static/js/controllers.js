/**
 * Created by pulem3t on 06.03.16.
 */
'use strict';

var crmControllers = angular.module('crmControllers', []);

crmControllers.controller('StartViewCtrl', ['$scope',
    function StartViewCtrl($scope) {
        $scope.mainViewName = "partials/start.html";
    }
]);
crmControllers.controller('ProductViewCtrl', ['$scope', 'ProductsList',
    function ProductViewCtrl($scope, ProductsList) {
        $scope.mainViewName = "partials/products.html";
       ProductsList.get({},
            function success(response) {
                $scope.productsList = response[0];
            },
            function error(errorResponse) {
                console.log("Error:" + JSON.stringify(errorResponse));
            }
        );
    }
]);
crmControllers.controller('OrdersViewCtrl', ['$scope', 'OrdersList',
    function OrdersViewCtrl($scope, OrdersList) {
        $scope.mainViewName = "partials/orders.html";
        OrdersList.get({},
            function success(response) {
                $scope.ordersList = response[0];
            },
            function error(errorResponse) {
                console.log("Error:" + JSON.stringify(errorResponse));
            }
        );
    }
]);
crmControllers.controller('CustomersViewCtrl', ['$scope', 'CustomersList', 'AddCustomer',
    function CustomersViewCtrl($scope, CustomersList, AddCustomer) {
        $scope.mainViewName = "partials/customers.html";
        $scope.addCustomer = function(firstNameAdd, lastNameAdd, addressAdd) {
            AddCustomer.add({firstName: firstNameAdd, lastName: lastNameAdd, address: addressAdd},
                function success(response){
                    getCustomers();
                }
            );
        };
        var getCustomers = function() {CustomersList.get({},
                function success(response) {
                    $scope.customersList = response[0];
                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
            );
        };
        getCustomers();
    }
]);
crmControllers.controller('VendorsViewCtrl', ['$scope', 'VendorsList',
    function VendorsViewCtrl($scope, VendorsList) {
        $scope.mainViewName = "partials/vendors.html";
        VendorsList.get({},
            function success(response) {
                $scope.vendorsList = response[0];
            },
            function error(errorResponse) {
                console.log("Error:" + JSON.stringify(errorResponse));
            }
        );
    }
]);