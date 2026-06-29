#!/bin/sh

set -e

curl -sSL https://dot.net/v1/dotnet-install.sh > dotnet-install.sh
chmod +x dotnet-install.sh

./dotnet-install.sh -c 10.0 -InstallDir ./dotnet

mkdir -p out

./dotnet/dotnet publish -c Release -o out