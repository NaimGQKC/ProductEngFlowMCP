#!/bin/bash

# 1. Activate Environment
source venv/bin/activate

# 2. Check for latest PRD
echo "🔍 Checking /prds for new handoffs..."
LATEST_PRD=$(ls -t prds/*.md | head -1)

if [ -z "$LATEST_PRD" ]; then
    echo "❌ No PRD found. Please add a ChatPRD export to the /prds folder."
    exit 1
fi

echo "✅ Found PRD: $LATEST_PRD"

# 3. Check for matching Prototype
PROTO_NAME=$(basename "$LATEST_PRD" .md)
PROTO_PATH="prototypes/$PROTO_NAME.tsx"

if [ ! -f "$PROTO_PATH" ]; then
    echo "⚠️ Warning: No matching prototype found at $PROTO_PATH"
else
    echo "✅ Found Prototype: $PROTO_PATH"
fi

echo "🚀 System ready for refinement. Run the MCP server to begin AI bridging."