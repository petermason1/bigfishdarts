#!/bin/bash
# Generate all favicons and social media icons from logo.jpeg
# Requires ImageMagick (install with: brew install imagemagick)

echo "🎯 Generating icons from logo.jpeg..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found!"
    echo "Install it with: brew install imagemagick"
    exit 1
fi

# Check if logo exists
if [ ! -f "public/logo.jpeg" ]; then
    echo "❌ logo.jpeg not found in public/ folder"
    exit 1
fi

cd public

echo "📐 Creating favicon sizes..."
convert logo.jpeg -resize 16x16 favicon-16x16.png
convert logo.jpeg -resize 32x32 favicon-32x32.png

echo "🍎 Creating Apple touch icon..."
convert logo.jpeg -resize 180x180 apple-touch-icon.png

echo "📱 Creating Open Graph image (social sharing)..."
convert logo.jpeg -resize 1200x630^ -gravity center -extent 1200x630 -quality 90 og-image.jpg

echo "🔷 Creating favicon.ico..."
convert favicon-16x16.png favicon-32x32.png favicon.ico

echo "✅ All icons generated!"
echo ""
echo "Generated files:"
ls -lh favicon*.png favicon.ico apple-touch-icon.png og-image.jpg 2>/dev/null

echo ""
echo "📁 Files are in the public/ folder"
echo "🔄 Restart your Next.js server to see the icons"


