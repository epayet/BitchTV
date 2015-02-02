angular.module('BitchTV').factory('HelloService', function () {
    return {
        sayHello: function (name) {
            return 'Hello ' + name;
        }
    };
});