#!/bin/bash

echo "🛑 Stopping any process on port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "No process found on port 3000"

echo ""
echo "🗑️  Clearing Next.js cache..."
rm -rf .next

echo ""
echo "✅ Cache cleared!"
echo ""
echo "🚀 Now run: npm run dev"
echo ""
echo "Then visit: http://localhost:3000/projects"
