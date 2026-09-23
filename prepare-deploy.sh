#!/bin/bash

# Deployment Preparation Script for Growth Station
# This script prepares files for Hostinger deployment

echo "🚀 Preparing files for deployment..."

# Create deployment folder
DEPLOY_FOLDER="deploy-package"
rm -rf $DEPLOY_FOLDER
mkdir -p $DEPLOY_FOLDER

# Copy build folder
echo "📦 Copying build folder..."
cp -r build $DEPLOY_FOLDER/

# Copy production package.json
echo "📝 Copying production package.json..."
cp package.production.json $DEPLOY_FOLDER/package.json

# Copy .env.example
echo "⚙️  Copying environment example..."
cp .env.example $DEPLOY_FOLDER/.env.example

# Create .gitignore for deployment
echo "🔒 Creating .gitignore..."
cat > $DEPLOY_FOLDER/.gitignore << EOL
node_modules/
.env
*.log
EOL

echo "✅ Deployment package ready in: $DEPLOY_FOLDER"
echo ""
echo "📋 Next steps:"
echo "1. Upload the contents of $DEPLOY_FOLDER to Hostinger"
echo "2. On Hostinger, run: npm install --production"
echo "3. Start the server: pm2 start build/server/index.js --name growth-station"
echo ""
echo "📁 Files to upload:"
ls -lh $DEPLOY_FOLDER/
