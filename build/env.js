"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("os");
var log = require('npmlog');
function isAutoBuildEnabled() {
    return !!process.env.OPENCV_ENABLE_AUTOBUILD;
}
exports.isAutoBuildEnabled = isAutoBuildEnabled;
function isInstallDisabled() {
    return !!process.env.OPENCV_DISABLE_INSTALL;
}
exports.isInstallDisabled = isInstallDisabled;
function buildWithCuda() {
    return !!process.env.OPENCV_BUILD_CUDA || false;
}
exports.buildWithCuda = buildWithCuda;
function isWithoutContrib() {
    return !!process.env.OPENCV_AUTOBUILD_WITHOUT_CONTRIB;
}
exports.isWithoutContrib = isWithoutContrib;
function autoBuildFlags() {
    return process.env.OPENCV_AUTOBUILD_FLAGS || '';
}
exports.autoBuildFlags = autoBuildFlags;
function parseAutoBuildFlags() {
    var flagStr = autoBuildFlags();
    if (typeof (flagStr) === 'string' && flagStr.length) {
        log.silly('install', 'using flags from OPENCV_AUTOBUILD_FLAGS:', flagStr);
        return flagStr.split(' ');
    }
    return [];
}
exports.parseAutoBuildFlags = parseAutoBuildFlags;
function opencvVersion() {
    return process.env.OPENCV_AUTOBUILD_VERSION || '3.4.6';
}
exports.opencvVersion = opencvVersion;
function numberOfCoresAvailable() {
    return os.cpus().length;
}
exports.numberOfCoresAvailable = numberOfCoresAvailable;
