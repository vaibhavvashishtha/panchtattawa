#!/bin/bash
# ============================================================
# Panchtattawa — One-time server setup script
# Run this on the Digital Ocean droplet as root (or with sudo)
# Usage: bash setup-server.sh
# ============================================================
set -e

APP_DIR="/var/www/panchtattawa"
REPO_URL="https://github.com/vaibhavvashishtha/panchtattawa.git"
DOMAIN="panchtattawa.untangleai.tech"

echo "==> Updating system packages..."
apt-get update -y && apt-get upgrade -y

echo "==> Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

echo "==> Node version: $(node -v)"
echo "==> npm version: $(npm -v)"

echo "==> Installing PM2..."
npm install -g pm2

echo "==> Installing Nginx..."
apt-get install -y nginx

echo "==> Cloning repository..."
mkdir -p /var/www
if [ -d "$APP_DIR" ]; then
  echo "    Directory exists — pulling latest..."
  cd "$APP_DIR" && git pull
else
  git clone "$REPO_URL" "$APP_DIR"
fi

echo "==> Installing dependencies..."
cd "$APP_DIR"
npm ci --legacy-peer-deps

echo ""
echo "==> !! ACTION REQUIRED: Create your .env.local file !!"
echo "    Copy .env.local.example and fill in your values:"
echo "    cp $APP_DIR/.env.local.example $APP_DIR/.env.local"
echo "    nano $APP_DIR/.env.local"
echo ""
read -p "Press ENTER once you have created .env.local to continue..."

echo "==> Building Next.js app..."
cd "$APP_DIR"
npm run build

echo "==> Starting app with PM2..."
pm2 start ecosystem.config.js
pm2 save
pm2 startup systemd -u root --hp /root | tail -1 | bash

echo "==> Configuring Nginx..."
cp "$APP_DIR/deploy/nginx.conf" "/etc/nginx/sites-available/$DOMAIN"
ln -sf "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/$DOMAIN"
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo ""
echo "============================================"
echo " Setup complete!"
echo " Site is running at: http://$DOMAIN"
echo ""
echo " Useful commands:"
echo "   pm2 status           — check app status"
echo "   pm2 logs panchtattawa — view logs"
echo "   bash $APP_DIR/deploy/update.sh — deploy new version"
echo "============================================"
