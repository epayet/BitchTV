angular.module('BitchTV').directive('bitchTvJumbotron', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/bitchTV/jumbotron/jumbotron.html',
        link: function(scope, element, attrs) {
            scope.image = attrs.image;
            scope.title = attrs.title;
            scope.date = currentDate();
        }
    };

    function currentDate()
    {
        var today   = new Date();
        var year    = today.getFullYear();
        var month   = (today.getMonth())+1;
        var day     = today.getDate();
        var current = (day<10 ? '0':'') + day + "/" + (month<10 ? '0':'') + month + "/" + year;
        return current;
    }
});