app.controller('contactController', ['$scope', 'call_api', function($scope, call_api) {
    $scope.send_email = function() {
        var data = {
            'from': $scope.email_from,
            'name': $scope.email_name,
            'subject': $scope.email_subject,
            'body': $scope.email_body,
        };
        console.log(data);
        call_api({
            url: '/send/email',
            data: data,
        });
    };
}]);
