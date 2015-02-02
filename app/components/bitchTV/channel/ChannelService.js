angular.module('BitchTV').factory('ChannelService', function (Constants) {
    return {
        getChannelLogoSrc: function(channel) {
            if(channel && channel.icon) {
                var split = channel.icon.src.split('/');
                var logoImageName = split[split.length - 1];
                return Constants.logosPath + logoImageName;
            }
        }
    };
});