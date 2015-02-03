angular.module('BitchTV').factory('ProgramService', function (ProgramsResource) {
    var programs;

    return {
        get: function(channelId, callback) {
            getPrograms(function (programs) {
                var channelPrograms = [];
                for(var i=0; i<programs.length; i++) {
                    if(channelId == programs[i].channel) {
                        channelPrograms.push(programs[i]);
                    }
                }
                callback(channelPrograms);
            });
        },

        getProgramImgSrc: function(program, channelIcon) {
            if(program.icon)
                return program.icon.src;
            else {
                return channelIcon;
            }
        }
    };

    function getPrograms(callback) {
        if(!programs) {
            ProgramsResource.query(function(_programs_) {
                programs = _programs_;
                callback(programs);
            });
        } else {
            callback(programs)
        }
    }
});