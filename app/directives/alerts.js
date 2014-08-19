
app.directive('alert', function (){
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'views/alerts.html',
        link: function (scope, el, attrs){
        
        }
    }
});
