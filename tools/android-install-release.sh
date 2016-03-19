#/bin/bash

PATH_BASE=$(builtin cd $(dirname ${BASH_SOURCE:-$0})/.. && pwd)

cd $PATH_BASE/android && ./gradlew installRelease

