define(["require", "exports", 'app'], function (require, exports, app_1) {
    /**
     * Called from start.ts
     */
    function initialize() {
        var aString = 'hello, World!';
        console.log('app.ts string =' + aString);
        initializeCordova();
    }
    exports.initialize = initialize;
    /**
     * Waits for Cordova or if not on a device and cordova is not needed, don't wait and call onDeviceReady.
     */
    function initializeCordova() {
        //var deviceFamily = Windows.System.Profile.AnalyticsInfo.versionInfo.deviceFamily;
        if (!window.cordova) {
            onDeviceReady();
        }
        else {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
    }
    function onDeviceReady() {
        console.log('Cordova: on device ready');
        app_1.appExternalModuleTest();
    }
});
//# sourceMappingURL=index.js.map