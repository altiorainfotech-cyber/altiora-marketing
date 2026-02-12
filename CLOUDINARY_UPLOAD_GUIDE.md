# Cloudinary Upload Guide

## Overview
This guide helps you upload all website images to Cloudinary for better performance and CDN delivery.

## Prerequisites
- Cloudinary account with cloud name: `dkisnzuvo`
- Access to Cloudinary dashboard

## Upload Instructions

### Method 1: Manual Upload via Dashboard
1. Go to [Cloudinary Dashboard](https://cloudinary.com/console)
2. Navigate to Media Library
3. For each file below, upload with the exact Public ID specified

### Method 2: Bulk Upload via CLI (Recommended)
```bash
# Install Cloudinary CLI
npm install -g cloudinary-cli

# Configure with your credentials
cld config

# Upload files (example commands)
cld upload public/icons/logo.png --public-id altiora/logo
cld upload public/icons/logo.svg --public-id altiora/logo-svg
```

## Files to Upload (53 total)

### Logos (2 files)
- `public/icons/logo.png` → `altiora/logo`
- `public/icons/logo.svg` → `altiora/logo-svg`

### QuickLinks (2 files)
- `public/images/quicklinks/staff.png` → `altiora/quicklinks/staff`
- `public/images/quicklinks/projects.png` → `altiora/quicklinks/projects`

### Industries (10 files)
- `public/icons/industries/supply-chain.svg` → `altiora/industries/supply-chain`
- `public/icons/industries/healthcare.svg` → `altiora/industries/healthcare`
- `public/icons/industries/education.svg` → `altiora/industries/education`
- `public/icons/industries/real-estate.svg` → `altiora/industries/real-estate`
- `public/icons/industries/ecommerce.svg` → `altiora/industries/ecommerce`
- `public/icons/industries/finance.svg` → `altiora/industries/finance`
- `public/icons/industries/entertainment.svg` → `altiora/industries/entertainment`
- `public/icons/industries/legal.svg` → `altiora/industries/legal`
- `public/icons/industries/government.svg` → `altiora/industries/government`
- `public/icons/industries/oil-gas.svg` → `altiora/industries/oil-gas`

### Tools - Frontend (6 files)
- `public/icons/tools/react.svg` → `altiora/tools/react`
- `public/icons/tools/nextjs.svg` → `altiora/tools/nextjs`
- `public/icons/tools/typescript.svg` → `altiora/tools/typescript`
- `public/icons/tools/tailwind.svg` → `altiora/tools/tailwind`
- `public/icons/tools/css3.svg` → `altiora/tools/css3`
- `public/icons/tools/html5.svg` → `altiora/tools/html5`

### Tools - Backend (6 files)
- `public/icons/tools/nodejs.svg` → `altiora/tools/nodejs`
- `public/icons/tools/nestjs.svg` → `altiora/tools/nestjs`
- `public/icons/tools/express.svg` → `altiora/tools/express`
- `public/icons/tools/python.svg` → `altiora/tools/python`
- `public/icons/tools/go.svg` → `altiora/tools/go`
- `public/icons/tools/java.svg` → `altiora/tools/java`

### Tools - Databases (6 files)
- `public/icons/tools/postgres.svg` → `altiora/tools/postgres`
- `public/icons/tools/mysql.svg` → `altiora/tools/mysql`
- `public/icons/tools/mongodb.svg` → `altiora/tools/mongodb`
- `public/icons/tools/redis.svg` → `altiora/tools/redis`
- `public/icons/tools/sqlite.svg` → `altiora/tools/sqlite`
- `public/icons/tools/elastic.svg` → `altiora/tools/elastic`

### Tools - Mobile (6 files)
- `public/icons/tools/reactnative.svg` → `altiora/tools/reactnative`
- `public/icons/tools/flutter.svg` → `altiora/tools/flutter`
- `public/icons/tools/swift.svg` → `altiora/tools/swift`
- `public/icons/tools/kotlin.svg` → `altiora/tools/kotlin`
- `public/icons/tools/ionic.svg` → `altiora/tools/ionic`
- `public/icons/tools/xamarin.svg` → `altiora/tools/xamarin`

### Tools - Blockchain (6 files)
- `public/icons/tools/solidity.svg` → `altiora/tools/solidity`
- `public/icons/tools/hardhat.svg` → `altiora/tools/hardhat`
- `public/icons/tools/foundry.svg` → `altiora/tools/foundry`
- `public/icons/tools/ethereum.svg` → `altiora/tools/ethereum`
- `public/icons/tools/linea.svg` → `altiora/tools/linea`
- `public/icons/tools/ipfs.svg` → `altiora/tools/ipfs`

### Tools - Emerging Tech (6 files)
- `public/icons/tools/ai-python.svg` → `altiora/tools/ai-python`
- `public/icons/tools/openai.svg` → `altiora/tools/openai`
- `public/icons/tools/langchain.svg` → `altiora/tools/langchain`
- `public/icons/tools/vercelai.svg` → `altiora/tools/vercelai`
- `public/icons/tools/supabase.svg` → `altiora/tools/supabase`
- `public/icons/tools/trpc.svg` → `altiora/tools/trpc`

### Testimonials (3 files)
- `public/images/testimonials/priya.png` → `altiora/testimonials/priya`
- `public/images/testimonials/rohit.png` → `altiora/testimonials/rohit`
- `public/images/testimonials/ananya.png` → `altiora/testimonials/ananya`

## Verification
After uploading, test your website:
1. Run `npm run dev`
2. Check that all images load correctly
3. Open browser dev tools to verify images are loading from Cloudinary URLs
4. Check for any 404 errors in the console

## Benefits
- ✅ Faster image loading via CDN
- ✅ Automatic format optimization (WebP, AVIF)
- ✅ Responsive image delivery
- ✅ Reduced server load
- ✅ Better Core Web Vitals scores

## Troubleshooting
- If images don't load, verify the Public ID matches exactly
- Check your Cloudinary cloud name is `dkisnzuvo`
- Ensure images are marked as public in Cloudinary
- Clear browser cache if needed