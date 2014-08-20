var app = angular.module('nms', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/login.html',
    }).when('/login', {
    }).otherwise({ redirectTo: '/' });
    
});
