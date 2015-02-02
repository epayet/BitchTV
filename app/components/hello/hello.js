angular.module('BitchTV').directive('hello', function (HelloService) {
    return {
        restrict: 'E',
        templateUrl: 'components/hello/hello.html',
        link: function(scope, element, attrs) {
            scope.name = attrs.name;
            scope.sayHello = function(name) {
                alert(HelloService.sayHello(name));
            }
        }
    };
});