cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-spinner-dialog.SpinnerDialog",
        "file": "plugins/cordova-plugin-spinner-dialog/www/spinner.js",
        "pluginId": "cordova-plugin-spinner-dialog",
        "merges": [
            "window.plugins.spinnerDialog"
        ]
    },
    {
        "id": "cordova-plugin-fileopener.FileOpener",
        "file": "plugins/cordova-plugin-fileopener/www/FileOpener.js",
        "pluginId": "cordova-plugin-fileopener",
        "clobbers": [
            "cordova.plugins.FileOpener"
        ]
    },
    {
        "id": "cordova-plugin-app-version.AppVersionPlugin",
        "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
        "pluginId": "cordova-plugin-app-version",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "com.jcjee.plugins.emailcomposer.EmailComposer",
        "file": "plugins/com.jcjee.plugins.emailcomposer/www/EmailComposer.js",
        "pluginId": "com.jcjee.plugins.emailcomposer",
        "clobbers": [
            "EmailComposer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.4",
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-statusbar": "2.2.0",
    "cordova-plugin-whitelist": "1.3.0",
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-x-socialsharing": "5.1.3",
    "cordova-plugin-splashscreen": "4.0.0",
    "cordova-plugin-spinner-dialog": "1.3.1",
    "cordova-plugin-fileopener": "1.0.5",
    "cordova-plugin-app-version": "0.1.9",
    "cordova-plugin-network-information": "1.2.1",
    "cordova-plugin-dialogs": "1.3.0",
    "com.jcjee.plugins.emailcomposer": "1.4.6"
};
// BOTTOM OF METADATA
});