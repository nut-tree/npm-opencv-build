import * as path from 'path';

import {isOSX, isWin} from './utils';

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

const installDir = isWin() ? path.resolve('/') : isOSX() ? path.resolve('/usr/local/opt') : path.resolve('/opt/');
const installedOpenCV = path.resolve(path.join(installDir, 'opencv-prebuilt'));

const installedOpencvBuild = path.join(installedOpenCV, 'build');
const installedOpencvInclude = path.join(installedOpenCV, 'include');
const installedOpencvLibDir = isWin() ? path.join(installedOpenCV, 'lib/Release') : path.join(installedOpenCV, 'lib');
const installedOpencvBinDir = isWin() ? path.join(installedOpenCV, 'bin/Release') : path.join(installedOpenCV, 'bin');

export const dirs = {
  rootDir,
  opencvRoot,
  opencvSrc,
  opencvContribSrc,
  opencvContribModules,
  opencvBuild,
  opencvInclude,
  opencvLibDir,
  opencvBinDir,
  autoBuildFile,
  installedOpenCV,
  installedOpencvBuild,
  installedOpencvInclude,
  installedOpencvLibDir,
  installedOpencvBinDir
};
