#!/usr/bin/env bash
set -e

sudo apt-get update
# install tools for reading images from disk
sudo apt-get install libjpeg8-dev libtiff5-dev libjasper-dev libpng12-dev
# install video codecs
sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev
sudo apt-get install libxvidcore-dev libx264-dev
# install cmake
sudo apt-get install cmake
