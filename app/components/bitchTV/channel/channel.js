angular.module('BitchTV').directive('bitchTvChannel', function (ChannelsResource, ChannelService) {
    return {
        restrict: 'E',
        templateUrl: 'components/bitchTV/channel/channel.html',
        link: function(scope, element, attrs) {
            var channelId = attrs.channelId;
            //scope.channel = ChannelsResource.get({id: channelId});
            ChannelService.get(channelId, function(channel) {
                scope.channel = channel;
                console.log(channel);
            });
            scope.getChannelLogoSrc = ChannelService.getChannelLogoSrc;
        }
    };
});