#!/bin/bash
set -e # exit on error

cd packages/sst
pnpm build
cp package.json dist/package.json
# Remove the publishConfig lines from package.json (lines 2-5)
sed -i.bak -e '2,5d' dist/package.json
cp README.md dist/README.md
# Remove any existing package
rm -f sst-*.tgz
pnpm pack