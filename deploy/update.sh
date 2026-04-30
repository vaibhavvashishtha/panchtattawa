#!/bin/bash
# ============================================================
# Panchtattawa — Deploy update script
# Run this on the server to pull latest code and rebuild
# Usage: bash /var/www/panchtattawa/deploy/update.sh
# ============================================================
set -e

APP_DIR="/var/www/panchtattawa"

echo "==> Pulling latest code..."
cd "$APP_DIR"
git pull origin main

echo "==> Installing dependencies..."
npm ci --legacy-peer-deps

echo "==> Building Next.js app..."
npm run build

echo "==> Restarting PM2..."
pm2 restart panchtattawa

echo ""
echo "Deploy complete! Site updated at http://panchtattawa.untangleai.tech"
pm2 status panchtattawa
