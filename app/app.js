angular.module('BitchTV', [
    'ngRoute',
    'ngResource',
    'ui.bootstrap',
    'BitchTV.plugins'
])
    .config(function($routeProvider) {
        $routeProvider.when('/channels', {templateUrl: 'views/channels.html'});
        $routeProvider.otherwise({redirectTo: '/channels'});
    })
    .constant('Constants', {});

angular.module('BitchTV.plugins', []);