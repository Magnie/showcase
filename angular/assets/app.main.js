var app = angular.module("Showcase", [
    'ui.router', // Routes
    'ui.validate', // Validate
    'ngAnimate', // Animations
]);

app.run(['$rootScope', '$state', function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    
    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params, {location: 'replace'})
      }
    });
}]);
