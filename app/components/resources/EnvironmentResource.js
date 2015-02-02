angular.module('BitchTV').factory('EnvironmentResource',
    function(ResourceFactory, Config) {
        var resourcesInfo = {
            route : "/environment",
            idField : 'environment',
            apiUrl : Config.apiUrl
        };
        return ResourceFactory.createResource(resourcesInfo);
    });