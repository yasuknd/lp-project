#!/bin/bash
cd "$(dirname "$0")/.."
zip -r ../lp-project.zip . \
  --exclude "*/node_modules/*" \
  --exclude "*/.git/*" \
  --exclude "*/dist/*" \
  --exclude "*/.DS_Store" \
  --exclude "*/__MACOSX/*" \
  --exclude "*/scripts/*"
echo "作成完了: ../lp-project.zip"
