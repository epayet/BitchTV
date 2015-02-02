angular.module('BitchTV').directive('bitchTvChannel', function (ChannelsResource, ChannelService) {
    return {
        restrict: 'E',
        templateUrl: 'components/bitchTV/channel/channel.html',
        link: function(scope, element, attrs) {
            var channelId = attrs.channelId;
            //scope.channel = ChannelsResource.get({id: channelId});
            ChannelsResource.get({id: channelId}, function(channel) {
                scope.channel = channel;
            });
            scope.getChannelLogoSrc = ChannelService.getChannelLogoSrc;
        }
    };
});