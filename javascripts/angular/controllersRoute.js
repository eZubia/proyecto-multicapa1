var demoApp = angular.module('demoApp1', ['ngRoute']);

demoApp.config(['$routeProvider', function ($routeProvider) {
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
}]);

demoApp.controller('SimpleController', ['$scope', function ($scope) {
    $scope.customers =[{name:'Nombre', city:'Ciudad3'}, {name:'Nombre1', city:'Ciudad2'},
        {name:'Nombre2', city:'Ciudad1'}, {name:'Nombre3', city:'Ciudad'}]
    
    $scope.addCustomer = function () {
        $scope.customers.push($scope.newCustomer);
    };
}]);