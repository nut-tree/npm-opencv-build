"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dirs_1 = require("./dirs");
exports.opencvRepoUrl = 'https://github.com/opencv/opencv.git';
exports.opencvContribRepoUrl = 'https://github.com/opencv/opencv_contrib.git';
exports.opencvModules = [
    'core',
    'imgcodecs',
    'imgproc',
];
exports.cmakeVsCompilers = {
    '10': 'Visual Studio 10 2010',
    '11': 'Visual Studio 11 2012',
    '12': 'Visual Studio 12 2013',
    '14': 'Visual Studio 14 2015',
    '15': 'Visual Studio 15 2017'
};
exports.cmakeArchs = {
    'x64': ' Win64',
    'ia32': '',
    'arm': ' ARM'
};
exports.defaultCmakeFlags = [
    "-DCMAKE_INSTALL_PREFIX=" + dirs_1.dirs.opencvBuild,
    '-DCMAKE_BUILD_TYPE=Release',
    '-DBUILD_EXAMPLES=OFF',
    '-DBUILD_DOCS=OFF',
    '-DBUILD_TESTS=OFF',
    '-DBUILD_PERF_TESTS=OFF',
    '-DBUILD_JAVA=OFF',
    '-DCUDA_NVCC_FLAGS=--expt-relaxed-constexpr',
    '-DBUILD_opencv_apps=OFF',
    '-DBUILD_opencv_aruco=OFF',
    '-DBUILD_opencv_bgsegm=OFF',
    '-DBUILD_opencv_bioinspired=OFF',
    '-DBUILD_opencv_ccalib=OFF',
    '-DBUILD_opencv_datasets=OFF',
    '-DBUILD_opencv_dnn_objdetect=OFF',
    '-DBUILD_opencv_dpm=OFF',
    '-DBUILD_opencv_fuzzy=OFF',
    '-DBUILD_opencv_hfs=OFF',
    '-DBUILD_opencv_java_bindings_generator=OFF',
    '-DBUILD_opencv_js=OFF',
    '-DBUILD_opencv_img_hash=OFF',
    '-DBUILD_opencv_line_descriptor=OFF',
    '-DBUILD_opencv_optflow=OFF',
    '-DBUILD_opencv_phase_unwrapping=OFF',
    '-DBUILD_opencv_python3=OFF',
    '-DBUILD_opencv_python_bindings_generator=OFF',
    '-DBUILD_opencv_reg=OFF',
    '-DBUILD_opencv_rgbd=OFF',
    '-DBUILD_opencv_saliency=OFF',
    '-DBUILD_opencv_shape=OFF',
    '-DBUILD_opencv_stereo=OFF',
    '-DBUILD_opencv_stitching=OFF',
    '-DBUILD_opencv_structured_light=OFF',
    '-DBUILD_opencv_superres=OFF',
    '-DBUILD_opencv_surface_matching=OFF',
    '-DBUILD_opencv_ts=OFF',
    '-DBUILD_opencv_xobjdetect=OFF',
    '-DBUILD_opencv_xphoto=OFF',
    // Custom config
    '-DBUILD_opencv_calib3d=OFF',
    '-DBUILD_opencv_dnn=OFF',
    '-DBUILD_opencv_features2d=OFF',
    '-DBUILD_opencv_flann=OFF',
    '-DBUILD_opencv_gapi=OFF',
    '-DBUILD_opencv_video=OFF',
    '-DBUILD_opencv_videoio=OFF',
    '-DBUILD_SHARED_LIBS=OFF',
    '-DBUILD_opencv_world=ON',
    '-DBUILD_PNG=ON',
    '-DBUILD_TIFF=ON',
    '-DBUILD_JASPER=ON',
    '-DBUILD_JPEG=ON',
    '-DBUILD_ZLIB=ON',
    '-DBUILD_OPENEXR=ON',
    '-WITH_JPEG=ON',
    '-WITH_PNG=ON',
    '-WITH_JASPER=ON',
    '-WITH_TIFF=ON',
    '-DWITH_VTK=OFF'
];
