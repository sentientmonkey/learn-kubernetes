#!/usr/bin/env bash

set -ex

pushd backend
./build.sh
docker push sentientmonkey/hello
popd
