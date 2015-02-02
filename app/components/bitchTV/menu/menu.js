angular.module('BitchTV').directive('bitchTvMenu', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/bitchTV/menu/menu.html',
        link: function(scope, element, attrs) {
            scope.name = attrs.name;
            scope.sayHello = function(name) {
                alert(HelloService.sayHello(name));
            }
        }
    };
});