# Generate Favicons and Social Media Icons

You need to create these icon files from your logo. Use ImageMagick (or any image editor) on your Mac Mini.

## Required Icon Files

Place these in the `public/` folder:

1. **favicon.ico** - Browser tab icon (16x16, 32x32, 48x48)
2. **favicon-16x16.png** - 16x16 PNG
3. **favicon-32x32.png** - 32x32 PNG
4. **apple-touch-icon.png** - 180x180 (iOS home screen)
5. **og-image.jpg** - 1200x630 (Facebook/Twitter/LinkedIn sharing)
6. **twitter-image.jpg** - 1200x630 (Twitter card)

## Using ImageMagick (on Mac Mini)

If you have ImageMagick installed, run these commands:

```bash
# Navigate to your project
cd /path/to/bigfishdarts

# Convert logo to different sizes
# Favicon (16x16)
convert public/logo.jpeg -resize 16x16 public/favicon-16x16.png

# Favicon (32x32)
convert public/logo.jpeg -resize 32x32 public/favicon-32x32.png

# Apple Touch Icon (180x180)
convert public/logo.jpeg -resize 180x180 public/apple-touch-icon.png

# Open Graph image (1200x630) - for social sharing
convert public/logo.jpeg -resize 1200x630^ -gravity center -extent 1200x630 public/og-image.jpg

# Create favicon.ico (combines multiple sizes)
convert public/favicon-16x16.png public/favicon-32x32.png public/favicon.ico
```

## Using Online Tools (Easier)

If ImageMagick isn't available, use these free online tools:

1. **Favicon Generator**: https://realfavicongenerator.net/
   - Upload your logo.jpeg
   - It generates all sizes automatically
   - Download and place in `public/` folder

2. **Open Graph Image Generator**: https://www.opengraph.xyz/
   - Upload logo
   - Set size to 1200x630
   - Download as og-image.jpg

## Manual Method (Any Image Editor)

1. Open `public/logo.jpeg` in any image editor
2. Resize and save as:
   - `favicon-16x16.png` (16x16 pixels)
   - `favicon-32x32.png` (32x32 pixels)
   - `apple-touch-icon.png` (180x180 pixels)
   - `og-image.jpg` (1200x630 pixels)
3. For `favicon.ico`, use an online converter or ImageMagick

## Quick Setup Script

If you have ImageMagick, I can create a script to generate all icons at once. Just let me know!

## What Each Icon Does

- **favicon.ico** - Shows in browser tab
- **apple-touch-icon.png** - Shows when someone adds your site to iPhone/iPad home screen
- **og-image.jpg** - Shows when someone shares your link on Facebook, Twitter, LinkedIn, etc.
- **favicon-16x16.png / favicon-32x32.png** - Modern browsers use these PNG versions

## After Generating Icons

1. Place all files in `public/` folder
2. Restart Next.js dev server
3. Icons will work automatically!

The metadata is already configured in `app/layout.tsx` - just need the actual icon files.


