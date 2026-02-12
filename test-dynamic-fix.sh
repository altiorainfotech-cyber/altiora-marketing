#!/bin/bash

# Test script to verify dynamic pages are working correctly
# Run this after starting the dev server with: npm run dev

echo "🧪 Testing Dynamic Pages Fix"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

BASE_URL="http://localhost:3000"

# Test 1: Check gamify API endpoint
echo "📡 Test 1: Checking gamify API endpoint..."
RESPONSE=$(curl -s -I "${BASE_URL}/api/public/mainpages/gamify")

if echo "$RESPONSE" | grep -q "Cache-Control: no-store"; then
    echo -e "${GREEN}✓ API has correct cache headers${NC}"
else
    echo -e "${RED}✗ API missing cache headers${NC}"
fi

# Test 2: Check if gamify page loads
echo ""
echo "🌐 Test 2: Checking gamify page..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/gamify")

if [ "$STATUS" = "200" ]; then
    echo -e "${GREEN}✓ Gamify page loads successfully (HTTP $STATUS)${NC}"
else
    echo -e "${RED}✗ Gamify page failed to load (HTTP $STATUS)${NC}"
fi

# Test 3: Check service pages API
echo ""
echo "📡 Test 3: Checking service pages API..."
RESPONSE=$(curl -s -I "${BASE_URL}/api/service-pages/web3")

if echo "$RESPONSE" | grep -q "Cache-Control: no-store"; then
    echo -e "${GREEN}✓ Service pages API has correct cache headers${NC}"
else
    echo -e "${RED}✗ Service pages API missing cache headers${NC}"
fi

# Test 4: Check mainpages API
echo ""
echo "📡 Test 4: Checking mainpages API..."
RESPONSE=$(curl -s -I "${BASE_URL}/api/mainpages/gamify")

if echo "$RESPONSE" | grep -q "Cache-Control: no-store"; then
    echo -e "${GREEN}✓ Mainpages API has correct cache headers${NC}"
else
    echo -e "${RED}✗ Mainpages API missing cache headers${NC}"
fi

# Test 5: Verify data freshness
echo ""
echo "🔄 Test 5: Testing data freshness..."
echo -e "${YELLOW}To test data freshness:${NC}"
echo "1. Update gamify page data in MongoDB"
echo "2. Visit ${BASE_URL}/gamify"
echo "3. Refresh the page - changes should appear immediately"
echo "4. No rebuild or revalidation needed"

echo ""
echo "================================"
echo "✅ Tests completed!"
echo ""
echo "📝 Next steps:"
echo "1. Update data in MongoDB via admin panel"
echo "2. Visit the page in browser"
echo "3. Verify changes appear immediately"
echo ""
echo "🔧 If issues persist:"
echo "- Clear Next.js cache: rm -rf .next"
echo "- Restart dev server: npm run dev"
echo "- Check browser console for errors"
