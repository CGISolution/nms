var app = angular.module('nms', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/login.html',
    }).when('/login', {
    }).otherwise({ redirectTo: '/' });
    
});
