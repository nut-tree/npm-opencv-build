import * as os from 'os';

const log = require('npmlog');

export function isAutoBuildEnabled() {
    return !!process.env.OPENCV_ENABLE_AUTOBUILD
}

export function buildWithCuda(): boolean {
    return !!process.env.OPENCV_BUILD_CUDA || false;
}

export function isWithContrib() {
    return !!process.env.OPENCV_AUTOBUILD_WITH_CONTRIB;
}

export function autoBuildFlags(): string {
    return process.env.OPENCV_AUTOBUILD_FLAGS || '';
}

export function parseAutoBuildFlags(): string[] {
    const flagStr = autoBuildFlags()
    if (typeof (flagStr) === 'string' && flagStr.length) {
        log.silly('install', 'using flags from OPENCV_AUTOBUILD_FLAGS:', flagStr)
        return flagStr.split(' ')
    }
    return []
}

export function opencvVersion() {
    return process.env.OPENCV_AUTOBUILD_VERSION || '3.4.6'
}

export function numberOfCoresAvailable() {
    return os.cpus().length
}
