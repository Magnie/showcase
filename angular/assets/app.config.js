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
            'footer': {
                templateUrl: 'components/footer/footerView.html',
            },
        },
    });
    
    $stateProvider.state('app.home', {
        url: 'home',
        views: {
            'content@': {
                templateUrl: 'components/home/homeView.html',
            },
        },
        data: { pageTitle: 'Showcase + Home' }
    });
    
    $stateProvider.state('app.experience', {
        url: 'experience',
        views: {
            'content@': {
                templateUrl: 'components/experience/experienceView.html',
            },
        },
        data: { pageTitle: 'Showcase + Experience' }
    });
    
    $stateProvider.state('app.contact', {
        url: 'contact',
        views: {
            'content@': {
                templateUrl: 'components/contact/contactView.html',
                controller: 'contactController',
            },
        },
        data: { pageTitle: 'Showcase + Contact' }
    });
}]);
