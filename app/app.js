angular.module('BitchTV', [
    'ngRoute',
    'ngResource',
    'ui.bootstrap',
    'BitchTV.plugins'
])
    .config(function($routeProvider) {
        $routeProvider.when('/channels', {templateUrl: 'views/channels.html'});
        $routeProvider.when('/channel/:channelId', {templateUrl: 'views/channel.html', controller: 'DefaultController'});
        $routeProvider.otherwise({redirectTo: '/channels'});
    })
    .constant('Constants', {
        logosPath: "assets/img/logos/"
    });

angular.module('BitchTV.plugins', []);

angular.module('BitchTV').controller('DefaultController',
    function ($scope, $routeParams) {
        $scope.$routeParams = $routeParams;
    }
);