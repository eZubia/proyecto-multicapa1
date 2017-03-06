var demoApp = angular.module('demoApp1', ['ngRoute']);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller:'SimpleController',
            templateUrl:'Partials/View1.html'
        })
        .when('/ruta', {
            controller:'SimpleController',
            templateUrl:'Partials/View2.html'
        })
        .otherwise({redirectTo:'/'});
});

demoApp.factory('customerFactory', function () {
    var customers =[{name:'Nombre', city:'Ciudad3'}, {name:'Nombre1', city:'Ciudad2'},
        {name:'Nombre2', city:'Ciudad1'}, {name:'Nombre3', city:'Ciudad'}];

    var factory = {};
    factory.getCustomers = function () {
        return customers;
    };

    return factory;
});
demoApp.controller('SimpleController', ['$scope', 'customerFactory', function ($scope, customerFactory) {
    $scope.customers = customerFactory.getCustomers();
    
    $scope.addCustomer = function () {
        $scope.customers.push($scope.newCustomer);
    };
}]);