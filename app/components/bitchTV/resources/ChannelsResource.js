angular.module('BitchTV').factory('ChannelsResource',
    function(ResourceFactory, Config) {
        var resourcesInfo = {
            route : "/channels.json",
            idField : 'id',
            apiUrl : 'api'
        };
        return ResourceFactory.createResource(resourcesInfo);
    });