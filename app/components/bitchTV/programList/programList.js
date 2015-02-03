angular.module('BitchTV').directive('bitchTvProgramList', function (ChannelService, ProgramService, WaitingService) {
    return {
        restrict: 'E',
        templateUrl: 'components/bitchTV/programList/programList.html',
        link: function(scope, element, attrs) {
            WaitingService.start();
            ProgramService.getForDate(attrs.dateCode, function(programs) {
                scope.programs = programs;
                WaitingService.stop();
            });
            scope.getChannelLogoSrc = ChannelService.getChannelLogoSrc;
        }
    };
});