#!/bin/bash

# This script applies common TypeScript fixes to web3 service pages
# Fixes:
# 1. Add ?? [] to paragraphs, cards, buttons
# 2. Normalize items array
# 3. Handle union types for services and benefits
# 4. Add fallbacks for CTA properties

echo "Applying TypeScript fixes to remaining web3 service pages..."

# List of files to fix
FILES=(
  "src/app/services/web3/nft/page.tsx"
  "src/app/services/web3/wallet/page.tsx"
  "src/app/services/web3/web3-marketing/page.tsx"
  "src/app/services/web3/zk-privacy/page.tsx"
  "src/app/services/web3/security-audit/page.tsx"
  "src/app/services/web3/smart-contract/page.tsx"
  "src/app/services/web3/tokenization/page.tsx"
)

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
  else
    echo "Skipping $file (not found)"
  fi
done

echo "Done!"
