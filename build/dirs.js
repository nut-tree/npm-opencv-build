"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var utils_1 = require("./utils");
var env_1 = require("./env");
var os_1 = require("os");
var rootDir = path.resolve(__dirname, '../');
var opencvRoot = path.join(rootDir, 'opencv');
var opencvSrc = path.join(opencvRoot, 'opencv');
var opencvContribSrc = path.join(opencvRoot, 'opencv_contrib');
var opencvContribModules = path.join(opencvContribSrc, 'modules');
var opencvBuild = path.join(opencvRoot, 'build');
var opencvInclude = path.join(opencvBuild, 'include');
var opencvLibDir = utils_1.isWin() ? path.join(opencvBuild, 'lib/Release') : path.join(opencvBuild, 'lib');
var opencvBinDir = utils_1.isWin() ? path.join(opencvBuild, 'bin/Release') : path.join(opencvBuild, 'bin');
var autoBuildFile = path.join(opencvRoot, 'auto-build.json');
var installDir = os_1.homedir();
var installedOpenCV = path.resolve(path.join(installDir, 'opencv-prebuilt'));
var installedOpencvBuild = path.join(installedOpenCV, 'build');
var installedOpencvInclude = path.join(installedOpencvBuild, 'include');
var installedOpencvLibDir = utils_1.isWin() ? path.join(installedOpencvBuild, 'lib/Release') : path.join(installedOpencvBuild, 'lib');
var installedOpencvBinDir = utils_1.isWin() ? path.join(installedOpencvBuild, 'bin/Release') : path.join(installedOpencvBuild, 'bin');
exports.dirs = {
    rootDir: rootDir,
    opencvRoot: opencvRoot,
    opencvInstallRoot: installedOpenCV,
    opencvSrc: opencvSrc,
    opencvContribSrc: opencvContribSrc,
    opencvContribModules: opencvContribModules,
    opencvBuild: env_1.isAutoBuildEnabled() ? opencvBuild : installedOpencvBuild,
    opencvInclude: env_1.isAutoBuildEnabled() ? opencvInclude : installedOpencvInclude,
    opencvLibDir: env_1.isAutoBuildEnabled() ? opencvLibDir : installedOpencvLibDir,
    opencvBinDir: env_1.isAutoBuildEnabled() ? opencvBinDir : installedOpencvBinDir,
    autoBuildFile: autoBuildFile
};
