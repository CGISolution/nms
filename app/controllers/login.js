
function prompt ($scope, $log)
{
    $scope.alerts = [
        'Please enter your email',
        'Please enter a valid email',
        'Please enter your password'
    ];

    $scope.checkLoginForm = function ()
    {
        if (this.login.email.$dirty)
        {
           // $log.warn($scope.email);
        }
    };

    $scope.submitLogin = function (loginValid)
    {
        if (loginValid)
        {

        }
    };
}
