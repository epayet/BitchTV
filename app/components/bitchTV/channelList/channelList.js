angular.module('BitchTV').directive('bitchTvChannelList', function (ChannelsResource, ChannelService) {
    return {
        restrict: 'E',
        templateUrl: 'components/bitchTV/channelList/channelList.html',
        link: function(scope, element, attrs) {
            scope.channels = ChannelsResource.query();
            scope.getChannelLogoSrc = ChannelService.getChannelLogoSrc;
        }
    };
});