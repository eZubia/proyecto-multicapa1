var demoApp = angular.module('demoApp', []);

demoApp.controller('SimpleController', ['$scope', function ($scope) {
    $scope.customers =[{name:'Nombre', city:'Ciudad3'}, {name:'Nombre1', city:'Ciudad2'},
        {name:'Nombre2', city:'Ciudad1'}, {name:'Nombre3', city:'Ciudad'}]
}]);