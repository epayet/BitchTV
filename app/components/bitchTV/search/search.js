angular.module('BitchTV').directive('bitchTvSearch', function (SearchService, WaitingService) {
    return {
        restrict: 'E',
        templateUrl: 'components/bitchTV/search/search.html',
        scope: {'keywords': '@'},
        link: function(scope, element, attrs) {
            WaitingService.start();
            SearchService.search(scope.keywords, function (programs) {
                scope.programs = programs;
                WaitingService.stop();
            });
        }
    };
});