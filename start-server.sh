#!/bin/bash

# Wedding Invite - Local Development Server
echo "🎊 Starting Wedding Invite Development Server..."
echo ""

# Check for Python
if command -v python3 &> /dev/null; then
    echo "✓ Using Python 3"
    echo "🌐 Opening http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    open http://localhost:8000 2>/dev/null || true
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✓ Using Python 2"
    echo "🌐 Opening http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    open http://localhost:8000 2>/dev/null || true
    python -m SimpleHTTPServer 8000
elif command -v php &> /dev/null; then
    echo "✓ Using PHP"
    echo "🌐 Opening http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    open http://localhost:8000 2>/dev/null || true
    php -S localhost:8000
else
    echo "❌ No suitable server found."
    echo ""
    echo "Please install one of the following:"
    echo "  - Python 3: brew install python3"
    echo "  - PHP: brew install php"
    echo ""
    echo "Or simply open index.html directly in your browser."
    exit 1
fi
