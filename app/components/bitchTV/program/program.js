angular.module('BitchTV').directive('bitchTvProgram', function (ProgramService, ProgramDetailsModal, DateUtilService) {
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
                if(newValue) {
                    scope.start = DateUtilService.getDayMonthYearByPrograms(scope.program.start) + ' at ' + DateUtilService.getHoursMinutesByPrograms(scope.program.start);
                    scope.stop  = DateUtilService.getDayMonthYearByPrograms(scope.program.stop) + ' at ' + DateUtilService.getHoursMinutesByPrograms(scope.program.stop);
                }
            });
        }
    };
});