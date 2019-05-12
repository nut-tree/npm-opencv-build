#!/usr/bin/env bash
set -e

brew install cmake opencv@3
brew link --force opencv@3
brew unlink tesseract
