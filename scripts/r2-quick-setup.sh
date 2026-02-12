#!/bin/bash

# Cloudflare R2 Quick Setup Script
# This script helps you set up R2 and migrate from Cloudinary

echo "🚀 Cloudflare R2 Setup & Migration"
echo "=================================="
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ .env.local file not found!"
    exit 1
fi

# Check if R2 credentials are set
if ! grep -q "R2_ACCOUNT_ID" .env.local || ! grep -q "R2_ACCESS_KEY_ID" .env.local; then
    echo "⚠️  R2 credentials not found in .env.local"
    echo ""
    echo "Please add the following to your .env.local file:"
    echo ""
    echo "R2_ACCOUNT_ID=your_cloudflare_account_id"
    echo "R2_ACCESS_KEY_ID=your_r2_access_key_id"
    echo "R2_SECRET_ACCESS_KEY=your_r2_secret_access_key"
    echo "R2_BUCKET_NAME=altiora-images"
    echo "R2_PUBLIC_URL=https://images.yourdomain.com"
    echo ""
    echo "See R2_SETUP_GUIDE.md for detailed instructions."
    exit 1
fi

echo "✅ R2 credentials found in .env.local"
echo ""

# Install dependencies
echo "📦 Installing required dependencies..."
npm install @aws-sdk/client-s3 axios

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Ask user if they want to run migration
echo "🔄 Ready to migrate images from Cloudinary to R2"
echo ""
read -p "Do you want to start the migration now? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "🚀 Starting migration..."
    echo ""
    node scripts/migrate-cloudinary-to-r2.js
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Migration completed successfully!"
        echo ""
        echo "📝 Next steps:"
        echo "1. Run: node scripts/update-urls-in-code.js --dry-run"
        echo "2. Review the changes"
        echo "3. Run: node scripts/update-urls-in-code.js (without --dry-run)"
        echo "4. Test your application"
        echo ""
    else
        echo ""
        echo "❌ Migration failed. Please check the error messages above."
        exit 1
    fi
else
    echo ""
    echo "⏭️  Migration skipped. You can run it later with:"
    echo "   node scripts/migrate-cloudinary-to-r2.js"
    echo ""
fi

echo "📖 For more information, see R2_SETUP_GUIDE.md"
