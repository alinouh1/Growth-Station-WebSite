#!/bin/bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOY_FOLDER="$ROOT_DIR/deploy-package"

cd "$ROOT_DIR"
npm run build

rm -rf "$DEPLOY_FOLDER/dist"
mkdir -p "$DEPLOY_FOLDER/dist"
cp -R "$ROOT_DIR/dist/." "$DEPLOY_FOLDER/dist/"
cp "$ROOT_DIR/server.mjs" "$DEPLOY_FOLDER/server.mjs"
cp "$ROOT_DIR/package.production.json" "$DEPLOY_FOLDER/package.json"

printf 'Deployment package is ready in %s\n' "$DEPLOY_FOLDER"
printf 'Upload dist/, server.mjs, and package.json. Then run npm install --production and npm start.\n'
