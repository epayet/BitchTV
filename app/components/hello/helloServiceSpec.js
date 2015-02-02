describe('helloService', function () {
    var HelloService;

    beforeEach(module('BitchTV'));

    beforeEach(inject(function (_HelloService_) {
        HelloService = _HelloService_;
    }));

    it('should say hello', function () {
        var hello = HelloService.sayHello('World');
        expect(hello).toBe('Hello World');
    });
});