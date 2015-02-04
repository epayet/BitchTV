angular.module('BitchTV').factory('SearchService', function (ProgramsResource, BasicSearchService) {
    return {
        search: function(keywords, callback) {
            ProgramsResource.query(function (programs) {
                var results = BasicSearchService.searchFor(keywords, programs);
                callback(results);
            });
        }
    };
});