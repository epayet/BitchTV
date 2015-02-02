angular.module('BitchTV').factory('ChannelsResource',
    function(ResourceFactory, Config) {
        var resourcesInfo = {
            route : "/channels",
            idField : 'id',
            apiUrl : 'api/channels.json'
        };
        return ResourceFactory.createResource(resourcesInfo);
    });