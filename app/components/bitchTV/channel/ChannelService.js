angular.module('BitchTV').factory('ChannelService', function (ProgramService, ChannelsResource, Constants) {
    return {
        getChannelLogoSrc: function(channel) {
            if(channel && channel.icon) {
                var split = channel.icon.src.split('/');
                var logoImageName = split[split.length - 1];
                return Constants.logosPath + logoImageName;
            }
        },

        get: function(channelId, callback) {
            ChannelsResource.get({id: channelId}, function (channel) {
                ProgramService.get(channelId, function (programs) {
                    channel.programs = programs;
                    callback(channel);
                });
            });
        }
    };
});