#!/usr/bin/env bash
set -euo pipefail

echo "==> 构建生产产物"
npm run build

echo "==> 清理旧的 gh-pages 临时仓库"
rm -rf .deploy
mkdir -p .deploy
cp -R dist/* .deploy/

echo "==> 推送到 gh-pages 分支"
cd .deploy
git init -q
git checkout -B gh-pages
git config user.email "shibuya-menu@users.noreply.github.com"
git config user.name "Deploy Bot"
git add -A
git commit -m "deploy: v$(node -e "console.log(require('../package.json').version)") $(date -u +%Y-%m-%dT%H:%M:%SZ)" --no-gpg-sign -q
git remote add origin https://github.com/jjj09128/shibuya-menu.git
git push -f origin gh-pages
cd ..
rm -rf .deploy

echo ""
echo "✅ 部署完成：https://jjj09128.github.io/shibuya-menu/"
echo "   (GitHub Pages 一般在 30 秒内刷新生效)"
