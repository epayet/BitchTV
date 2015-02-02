angular.module('BitchTV', [
    'ngRoute',
    'ngResource',
    'ui.bootstrap',
    'BitchTV.plugins'
])
    .config(function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'views/home.html'});
        $routeProvider.otherwise({redirectTo: '/home'});
    })
    .constant('Constants', {});

angular.module('BitchTV.plugins', []);