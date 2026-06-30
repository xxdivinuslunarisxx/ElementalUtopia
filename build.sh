#!/bin/sh

set -e

rm -rf bin obj publish

echo "=== INSTALLING DOTNET SDK ==="
curl -sSL https://dot.net/v1/dotnet-install.sh -o dotnet-install.sh
chmod +x dotnet-install.sh

./dotnet-install.sh -c 10.0 -InstallDir ./dotnet

export DOTNET_ROOT=$(pwd)/dotnet
export PATH=$(pwd)/dotnet:$PATH

echo "=== START PUBLISH ==="

./dotnet/dotnet publish -c Release -o publish

echo "=== PUBLISH DONE ==="

echo "=== WWWROOT ==="
find publish/wwwroot -type f

echo "=== CHECKING BLazor OUTPUT ==="
find publish -name "blazor.boot.json" || true
find publish -name "*.wasm" | head || true
find publish -name "index.html" || true