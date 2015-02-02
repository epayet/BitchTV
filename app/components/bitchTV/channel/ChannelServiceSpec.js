describe('ChannelService', function () {
    var ChannelService;

    beforeEach(module('BitchTV'));

    beforeEach(inject(function (_ChannelService_) {
        ChannelService = _ChannelService_;
    }));

    describe('getChannelLogoSrc', function () {
        it('should get the log img src', function () {
            var channel = {
                "icon": {
                    "src": "http://localhost:3000/assets/api/logos/logo0.gif"
                }
            };
            var logoSrc = ChannelService.getChannelLogoSrc(channel);
            expect(logoSrc).toBe("assets/img/logos/logo0.gif");
        });
    });
});