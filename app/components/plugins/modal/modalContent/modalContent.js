angular.module('BitchTV.plugins').directive('modalContent', function () {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'components/plugins/modal/modalContent/modalContent.html',
        link: function (scope, element, attrs) {

        }
    };
});