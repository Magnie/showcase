app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('app', {
        url: '/',
        redirectTo: 'app.home',
        views: {
            'navigation': {
                templateUrl: 'components/navigation/navigationView.html',
                controller: 'navigationController',
            },
            // 'footer': {
            //     templateUrl: 'components/home/homeView.html',
            // },
        },
    });
    
    $stateProvider.state('app.home', {
        url: 'home',
        views: {
            'content@': {
                templateUrl: 'components/home/homeView.html',
            },
        },
    });
    
    $stateProvider.state('app.experience', {
        url: 'experience',
        views: {
            'content@': {
                templateUrl: 'components/experience/experienceView.html',
            },
        },
    });
    
    $stateProvider.state('app.contact', {
        url: 'contact',
        views: {
            'content@': {
                templateUrl: 'components/contact/contactView.html',
            },
        },
    });
}]);
