const {getPackageVersion, readVersionInfo} = require("./build/setupOpencv");
const {dirs} = require("./build/dirs");
const log = require('npmlog');

try {
    const versionInfo = readVersionInfo();
    const packageVersion = getPackageVersion();
    if (versionInfo === packageVersion) {
        log.info("Found existing installation of OpenCV");
        log.info(`The package '${getPackageVersion()}' installed to '${dirs.opencvInstallRoot}' can be removed.`);
    }
} catch (e) {
    log.info("Version info check failed, skipping.");
}
