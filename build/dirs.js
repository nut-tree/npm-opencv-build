"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var utils_1 = require("./utils");
var rootDir = path.resolve(__dirname, '../');
var opencvRoot = path.join(rootDir, 'opencv');
var opencvSrc = path.join(opencvRoot, 'opencv');
var opencvContribSrc = path.join(opencvRoot, 'opencv_contrib');
var opencvContribModules = path.join(opencvContribSrc, 'modules');
var opencvBuild = path.join(opencvRoot, 'build');
var opencv3rdParty = path.join(opencvBuild, '3rdparty');
var opencvInclude = path.join(opencvBuild, 'include');
var opencvLibDir = utils_1.isWin() ? path.join(opencvBuild, 'lib/Release') : path.join(opencvBuild, 'lib');
var opencv3rdPartyLibDir = utils_1.isWin() ? path.join(opencv3rdParty, 'lib/Release') : path.join(opencv3rdParty, 'lib');
var opencvBinDir = utils_1.isWin() ? path.join(opencvBuild, 'bin/Release') : path.join(opencvBuild, 'bin');
var autoBuildFile = path.join(opencvRoot, 'auto-build.json');
exports.dirs = {
    rootDir: rootDir,
    opencvRoot: opencvRoot,
    opencvSrc: opencvSrc,
    opencvContribSrc: opencvContribSrc,
    opencvContribModules: opencvContribModules,
    opencvBuild: opencvBuild,
    opencv3rdParty: opencv3rdParty,
    opencvInclude: opencvInclude,
    opencvLibDir: opencvLibDir,
    opencv3rdPartyLibDir: opencv3rdPartyLibDir,
    opencvBinDir: opencvBinDir,
    autoBuildFile: autoBuildFile
};
