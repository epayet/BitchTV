angular.module('BitchTV').directive('bitchTvProgram', function (ProgramService, ProgramDetailsModal) {
    return {
        restrict: 'E',
        templateUrl: 'components/bitchTV/program/program.html',
        scope: {program: '=', channelIcon: '@'},
        link: function(scope, element, attrs) {
            var programDetailsModal = new ProgramDetailsModal(scope.program);

            scope.openProgramDetailsModal = function() {
                programDetailsModal.open();
            };

            scope.getProgramImgSrc = function () {
                return ProgramService.getProgramImgSrc(scope.program, scope.channelIcon);
            };

            scope.$watch('program', function (newValue) {
                //console.log(newValue);
                if(newValue) {
                    scope.start = getDayMonthYearByPrograms(scope.program.start) + ' at ' + getHoursMinutesByPrograms(scope.program.start);
                    scope.stop  = getDayMonthYearByPrograms(scope.program.stop) + ' at ' + getHoursMinutesByPrograms(scope.program.stop);
                }
            });
        }
    };

    function getDayMonthYearByPrograms(jsonDate)
    {
        jsonDate = jsonDate.toString();

        var dateYear = jsonDate.substring(0, 4);
        var dateMonth = jsonDate.substring(4,6);
        var dateDay = jsonDate.substring(6,8);

        var dateReturn = dateDay+'/'+dateMonth+'/'+dateYear;
        return dateReturn;
    }

    /*
     * Return a valid hour
     */

    function getHoursMinutesByPrograms(jsonDate)
    {
        jsonDate = jsonDate.toString();

        var dateHour = jsonDate.substring(8,10);
        var dateMinute = jsonDate.substring(10,12);

        var dateReturn = dateHour + ':' + dateMinute;
        return dateReturn;
    }
});