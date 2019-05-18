import * as path from 'path';

import {isWin} from './utils';

import {isAutoBuildEnabled} from "./env";
import {homedir} from "os";

const rootDir = path.resolve(__dirname, '../');
const opencvRoot = path.join(rootDir, 'opencv');
const opencvSrc = path.join(opencvRoot, 'opencv');
const opencvContribSrc = path.join(opencvRoot, 'opencv_contrib');
const opencvContribModules = path.join(opencvContribSrc, 'modules');
const opencvBuild = path.join(opencvRoot, 'build');
const opencvInclude = path.join(opencvBuild, 'include');
const opencvLibDir = isWin() ? path.join(opencvBuild, 'lib/Release') : path.join(opencvBuild, 'lib');
const opencvBinDir = isWin() ? path.join(opencvBuild, 'bin/Release') : path.join(opencvBuild, 'bin');
const autoBuildFile = path.join(opencvRoot, 'auto-build.json');

const installDir = homedir();
const installedOpenCV = path.resolve(path.join(installDir, 'opencv-prebuilt'));

const installedOpencvBuild = path.join(installedOpenCV, 'build');
const installedOpencvInclude = path.join(installedOpencvBuild, 'include');
const installedOpencvLibDir = isWin() ? path.join(installedOpencvBuild, 'lib/Release') : path.join(installedOpencvBuild, 'lib');
const installedOpencvBinDir = isWin() ? path.join(installedOpencvBuild, 'bin/Release') : path.join(installedOpencvBuild, 'bin');

export const dirs = {
  rootDir,
  opencvRoot,
  opencvInstallRoot: installedOpenCV,
  opencvSrc,
  opencvContribSrc,
  opencvContribModules,
  opencvBuild: isAutoBuildEnabled() ? opencvBuild : installedOpencvBuild,
  opencvInclude: isAutoBuildEnabled() ? opencvInclude : installedOpencvInclude,
  opencvLibDir: isAutoBuildEnabled() ? opencvLibDir : installedOpencvLibDir,
  opencvBinDir: isAutoBuildEnabled() ? opencvBinDir : installedOpencvBinDir,
  autoBuildFile
};
