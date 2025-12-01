# Logo Setup Instructions

## Where to Put Your Logo

### For Next.js (Recommended)
1. Save your logo image as `logo.png` (or `logo.jpg`)
2. Place it in the `public/` folder:
   ```
   /public/logo.png
   ```
3. Access it in code as: `/logo.png`

### For Static HTML
1. Save your logo image as `logo.png` (or `logo.jpg`)
2. Place it in the root directory (same folder as `index.html`):
   ```
   /logo.png
   ```
3. Access it in code as: `logo.png`

## Supported Formats
- PNG (recommended - supports transparency)
- JPG/JPEG
- SVG (scalable, best quality)
- WebP (modern, smaller file size)

## Recommended Logo Specifications
- **Size**: 200-400px wide (height will scale proportionally)
- **Format**: PNG with transparent background (if possible)
- **Aspect Ratio**: Square or landscape works best
- **File Size**: Keep under 200KB for fast loading

## Current Setup

The logo is now configured in:
- ✅ Next.js pages (`app/page.tsx`, `app/demo/page.tsx`)
- ✅ Static HTML (`index.html`)
- ✅ CSS styling (`.logo-image` class)

## How It Works

1. **Desktop**: Shows logo image + "BigFish Darts" text
2. **Mobile**: Shows only logo image (text hidden for space)

## Testing

After adding your logo:
1. **Next.js**: Restart dev server (`npm run dev`)
2. **Static HTML**: Refresh browser
3. Check navigation bar - logo should appear on the left

## Troubleshooting

### Logo not showing?
- Check file name matches exactly: `logo.png`
- Check file is in correct location (`public/` for Next.js, root for static)
- Check file extension (`.png`, `.jpg`, etc.)
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Logo too big/small?
- Adjust `.logo-image` height in `styles.css` (currently 40px)
- Or resize the image file itself

### Want logo only (no text)?
Remove the `<span className="logo-text">` element from navigation



