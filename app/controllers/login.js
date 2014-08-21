
function index ($scope, $log)
{
    //$scope.alerts = [];
    $scope.alerts = [{ type: 'warning', msg: 'Test' }];

    $log('Test log');

    $scope.removeAlert = function (index)
    {
        $scope.alerts.splice(index, 1);
    };

}
