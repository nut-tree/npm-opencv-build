export { opencvModules } from './constants';
export { isAutoBuildEnabled, linkStatic } from './env';
export declare const opencvInclude: string;
export declare const opencvLibDir: string;
export declare const opencvBinDir: string;
export declare const opencvBuildDir: string;
export declare const opencvInstallDir: string;
export declare const getLibs: (libDir: string) => import("./types").OpencvModule[];
