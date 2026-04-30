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

echo "==> Installing build tools (required for native Node modules)..."
apt-get install -y build-essential python3 git

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

echo "==> Generating .env.local from template..."
cp "$APP_DIR/.env.local.example" "$APP_DIR/.env.local"

# Auto-fill required values
NEXTAUTH_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('base64'))")
sed -i "s|NEXTAUTH_URL=http://localhost:3000|NEXTAUTH_URL=http://$DOMAIN|g" "$APP_DIR/.env.local"
sed -i "s|NEXTAUTH_SECRET=|NEXTAUTH_SECRET=$NEXTAUTH_SECRET|g" "$APP_DIR/.env.local"
sed -i "s|NEXT_PUBLIC_SITE_URL=http://localhost:3000|NEXT_PUBLIC_SITE_URL=http://$DOMAIN|g" "$APP_DIR/.env.local"

echo ""
echo "==> .env.local created with auto-generated NEXTAUTH_SECRET."
echo "    If you have YouTube/S3/Supabase keys, add them now:"
echo "    nano $APP_DIR/.env.local"
echo ""
read -p "Press ENTER to continue (or edit .env.local first)..."

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
echo "   pm2 status             — check app status"
echo "   pm2 logs panchtattawa  — view logs"
echo "   bash $APP_DIR/deploy/update.sh — deploy new version"
echo "============================================"
