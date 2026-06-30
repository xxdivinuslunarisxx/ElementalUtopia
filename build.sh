#!/bin/sh

curl -sSL https://dot.net/v1/dotnet-install.sh > dotnet-install.sh
chmod +x dotnet-install.sh

./dotnet-install.sh -c 10.0 -InstallDir ./dotnet

echo "=== START PUBLISH ==="

./dotnet/dotnet publish -c Release

echo "=== PUBLISH DONE ==="
echo "OUTPUT FOLDER CONTENTS:"
ls -R publish

echo "FINAL WWWROOT:"
ls -R publish/wwwroot

echo "=== CHECKING BLazor OUTPUT ==="
find publish -name "blazor.boot.json"
find publish -name "*.wasm" | head
find publish -name "index.html"