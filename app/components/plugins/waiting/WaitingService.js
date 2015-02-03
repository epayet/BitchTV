angular.module('BitchTV.plugins').factory('WaitingService',
    function (blockUI) {
        return {
            start : function(message) {
                blockUI.start();
            },
            stop : function() {
                blockUI.stop();
            }
        }
    }
);