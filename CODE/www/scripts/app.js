/**
 * Used to demonstrate external module is loading and function is called.
 */
define(["require", "exports"], function (require, exports) {
    function appExternalModuleTest() {
        console.log('testmodules called in testExternalModules');
        console.log('jQuery version = ' + $().jquery);
    }
    exports.appExternalModuleTest = appExternalModuleTest;
});
//# sourceMappingURL=app.js.map