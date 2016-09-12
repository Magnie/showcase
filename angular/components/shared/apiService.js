app.factory('call_api', ['$http', function ($http) {
    return function(config) {
        var method = 'GET';
        if (config['data']) {
            var request = $http.post(config['url'], angular.toJson(config['data']));
        } else {
            var request = $http.get(config['url']);
        }
        request.then(
            function successCallback(resp) {
                if (config['success']) {
                    config['success'](resp);
                }
            },
            function errorCallback(resp) {
                if (config['error']) {
                    config['error'](resp);
                }
            }
        );
    };
}]);
