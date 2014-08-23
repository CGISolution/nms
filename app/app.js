var app = angular.module('nms', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider, $logProvider){

    $logProvider.debugEnabled(true);
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/login.html',
        controller:'prompt',
    }).when('/login', {
        
    }).when('/:setup', {
        templateUrl: 'views/setup.html',
        controller:'setup'
    }).otherwise({ redirectTo: '/' });

});
