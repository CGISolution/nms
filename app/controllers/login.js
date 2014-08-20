
function index ($scope)
{
    $scope.alerts = [];
    //$scope.alerts = [{ type: 'warning', msg: 'Test' }];

    $scope.removeAlert = function (index)
    {
        $scope.alerts.splice(index, 1);
    };
}
