import * as fs from 'fs';
import * as path from 'path';

import {opencvModules} from './constants';
import {dirs} from './dirs';
import {getLibsFactory} from './getLibsFactory';
import {isOSX, isWin} from './utils';
import { listFolder } from './listFolder';

export {opencvModules} from './constants';
export {isAutoBuildEnabled, linkStatic} from './env';
export const opencvInclude = dirs.opencvInclude;
export const opencvLibDir = dirs.opencvLibDir;
export const opencvBinDir = dirs.opencvBinDir;
export const opencvBuildDir = dirs.opencvBuild;
export const opencv3rdPartyDir = dirs.opencv3rdParty;
export const opencv3rdPartyLibsDir = dirs.opencv3rdPartyLibDir;
export const getLibs = getLibsFactory({isWin, isOSX, opencvModules, path, fs});
export const get3rdPartyLibs = listFolder(opencv3rdPartyLibsDir, isWin() ? "lib" : "a");

