angular.module('BitchTV').directive('bitchTvMenu', function ($location) {
    return {
        restrict: 'E',
        templateUrl: 'components/bitchTV/menu/menu.html',
        link: function(scope, element, attrs) {
            scope.search = function(keyword) {
                $location.path('/search/' + keyword);
            };
        }
    };
});
