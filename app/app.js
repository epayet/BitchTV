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
    .constant('Constants', {
        logosPath: "assets/img/logos/"
    });

angular.module('BitchTV.plugins', []);