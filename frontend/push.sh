#!/usr/bin/env bash

set -ex

pushd frontend
./build.sh
docker push sentientmonkey/hello-frontend
popd
