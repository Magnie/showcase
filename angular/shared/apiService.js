app.factory('call_api', ['$http', function ($http) {
    return function(config) {
        var path = '/api';
        var method = 'GET';
        
        if (config['data']) {
            var request = $http.post(path + config['url'], angular.toJson(config['data']));
        } else {
            var request = $http.get(path + config['url']);
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
