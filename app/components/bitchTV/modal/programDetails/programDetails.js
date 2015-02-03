angular.module('BitchTV').factory('ProgramDetailsModal', function (ModalService) {
    var ProgramDetailsModal = function(program) {
        ModalService.call(this, {
            templateUrl: 'components/bitchTV/modal/programDetails/programDetails.html',
            scopeData: {
                program: program
            }
        });
    };

    ProgramDetailsModal.prototype = Object.create(ModalService.prototype);

    return ProgramDetailsModal;
});