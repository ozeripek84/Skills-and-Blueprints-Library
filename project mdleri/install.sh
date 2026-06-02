#!/bin/bash
# DOA Webinar Slash Commands Installer
# Tüm 145+ komutu .claude/commands/'a yükler

set -e

KOMUTLAR_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR=".claude/commands"

echo "🚀 DOA Webinar Slash Commands kuruluyor..."

# .claude/commands/ klasörü oluştur
mkdir -p "$TARGET_DIR"

# Kategori bazlı kopyala (namespace korunsun)
COUNT=0
for category in "$KOMUTLAR_DIR"/*/; do
  if [[ -d "$category" ]]; then
    cat_name=$(basename "$category")
    [[ "$cat_name" == "node_modules" ]] && continue

    mkdir -p "$TARGET_DIR/$cat_name"
    for cmd_file in "$category"*.md; do
      if [[ -f "$cmd_file" ]]; then
        filename=$(basename "$cmd_file")
        [[ "$filename" == "README.md" ]] && continue
        cp "$cmd_file" "$TARGET_DIR/$cat_name/$filename"
        ((COUNT++))
      fi
    done
  fi
done

echo "✅ $COUNT slash command yüklendi"
echo ""
echo "Kullanım:"
echo "  Claude Code'u açtıktan sonra '/' yazın"
echo "  Tüm komutlar autocomplete'te görünür"
echo ""
echo "Örnek:"
echo "  /web-saas:saas-mvp"
echo "  /ai-chatbot:llm-chatbot"
echo "  /otomasyon:lead-capture"
echo ""
echo "🎉 Hadi başla!"
