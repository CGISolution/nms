var app = angular.module('nms', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider, $provide, $logProvider){

    $logProvider.debugEnabled(true);

    $locationProvider
        .html5Mode(true)
        .hashPrevix = '!';

    $provide.decorator('$sniffer', function($delegate){
        $delegate.history = false;
        return $delegate;
    });


    $routeProvider.when('/', {
        templateUrl: 'views/login.html',
        controller:'prompt',
    }).when('/setup', {
        templateUrl: 'views/setup.html',
        controller:'setup'
    }).otherwise({ redirectTo: '/' });

});
