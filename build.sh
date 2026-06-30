#!/bin/sh
set -e

rm -rf bin obj publish dotnet dotnet-install.sh

echo "=== INSTALLING DOTNET SDK ==="
curl -sSL https://dot.net/v1/dotnet-install.sh -o dotnet-install.sh
chmod +x dotnet-install.sh

./dotnet-install.sh -c 10.0 -InstallDir ./dotnet

export DOTNET_ROOT="$(pwd)/dotnet"
export PATH="$DOTNET_ROOT:$PATH"

echo "=== START PUBLISH ==="
./dotnet/dotnet publish -c Release -o publish --nologo

echo "=== PUBLISH DONE ==="

echo "=== NON-WASM FILES IN PUBLISH ==="
find publish -type f ! -name "*.wasm" ! -name "*.br" ! -name "*.gz"

echo "=== WWWROOT SUMMARY ==="
find publish/wwwroot -type f | grep -v "_framework"

echo "=== CHECKING BLazor OUTPUT ==="
find publish -name "blazor.boot.json" || true
find publish -name "*.wasm" | head -n 10 || true
find publish -name "index.html" || true