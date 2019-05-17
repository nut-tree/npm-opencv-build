import * as fs from 'fs';
import * as path from 'path';

import {opencvModules} from './constants';
import {dirs} from './dirs';
import {getLibsFactory} from './getLibsFactory';
import {isOSX, isWin} from './utils';

export {opencvModules} from './constants';
export {isAutoBuildEnabled, isInstallDisabled} from './env';
export const opencvInclude = dirs.opencvInclude;
export const opencvLibDir = dirs.opencvLibDir;
export const opencvBinDir = dirs.opencvBinDir;
export const opencvBuildDir = dirs.opencvBuild;
export const opencvInstallDir = dirs.installedOpenCV;
export const installedOpenCV = dirs.installedOpenCV;
export const installedOpencvBuild = dirs.installedOpencvBuild;
export const installedOpencvInclude = dirs.installedOpencvInclude;
export const installedOpencvLibDir = dirs.installedOpencvLibDir;
export const installedOpencvBinDir = dirs.installedOpencvBinDir;
export const getLibs = getLibsFactory({isWin, isOSX, opencvModules, path, fs});
