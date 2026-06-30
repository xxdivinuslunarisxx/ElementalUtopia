#!/bin/sh
set -eux

rm -rf bin obj output publish dotnet dotnet-install.sh

curl -sSL https://dot.net/v1/dotnet-install.sh > dotnet-install.sh
chmod +x dotnet-install.sh

./dotnet-install.sh -c 10.0 -InstallDir ./dotnet

./dotnet/dotnet --version
./dotnet/dotnet publish -c Release -o output

echo "=== CHECKING BLAZOR OUTPUT ==="
find output/wwwroot -maxdepth 3 -type f | sort | head -200
test -f output/wwwroot/index.html
test -f output/wwwroot/_framework/blazor.boot.json
find output/wwwroot/_framework -name "dotnet*.js" -print -quit