# 📸 How to Add Your Profile Picture

## Quick Steps

1. **Prepare your photo:**
   - Use a square image (1:1 aspect ratio) for best results
   - Recommended size: 500x500 pixels or larger
   - Supported formats: JPG, PNG, WebP
   - Name your file: `profile-image.jpeg`

2. **Add the image to your repository:**
   
   **Option A: Using GitHub Web Interface (Easiest)**
   - Go to your repository on GitHub
   - Click "Add file" → "Upload files"
   - Drag and drop or select your `profile-image.jpeg` file
   - Make sure the file is in the root directory (same level as index.html)
   - Commit the changes

   **Option B: Using Git Commands**
   ```bash
   # Copy your image to the repository folder
   cp /path/to/your/photo.jpg profile-image.jpeg
   
   # Add and commit
   git add profile-image.jpeg
   git commit -m "Add profile picture"
   git push origin main
   ```

3. **That's it!** 
   - Your image will automatically appear on your portfolio
   - The site updates within 5-10 minutes after pushing changes
   - If the image doesn't load, the original icon placeholder will show

## Image Guidelines

### ✅ Best Practices
- **Square aspect ratio** (1:1) works best for the circular design
- **High resolution** (at least 500x500px) for crisp display on all devices
- **Good lighting** and professional appearance for job applications
- **File size** under 1MB for faster loading
- **Clear background** or professional setting

### 🎨 Image Optimization Tips
- **Crop to square** before uploading
- **Compress the image** to reduce file size:
  - Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
  - Target file size: 100-500KB
- **Consider WebP format** for better compression (rename to `profile-image.webp` and update HTML)

### 📱 Preview Your Image
After uploading, check how it looks:
- **Desktop view**: Should be 300px diameter circle
- **Tablet view**: Scales to 250px 
- **Mobile view**: Scales to 200px
- **Hover effect**: Slight zoom on desktop

## File Naming Options

The website looks for these files in order:
1. `profile-image.jpeg` (current default)
2. `profile-image.jpg`
3. `profile-image.png` 
4. `profile-image.webp`

To use a different format, either:
- Rename your file to match `profile-image.jpeg`, or
- Update the `src` attribute in `index.html`:
  ```html
  <img src="your-image-name.png" alt="Apurva Sharma - QA Engineer" ...>
  ```

## Troubleshooting

### Image not showing?
- ✅ Check file name matches exactly: `profile-image.jpeg`
- ✅ Verify file is in root directory (not in a folder)
- ✅ Wait 5-10 minutes for GitHub Pages to update
- ✅ Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- ✅ Check browser console for error messages

### Image looks distorted?
- Make sure your image is square (same width and height)
- The CSS will automatically crop to circle, but square input works best

### Want to change the image later?
- Simply upload a new file with the same name
- Or upload with a new name and update the HTML file

## Professional Photo Tips 🎯

Since this is for job applications:
- **Dress professionally** (business casual or formal)
- **Good lighting** (natural light or well-lit room)
- **Neutral background** (plain wall, office setting)
- **Face clearly visible** (avoid sunglasses, hats)
- **Genuine smile** (approachable and confident)
- **High quality** (not blurry or pixelated)

Your professional photo is often the first impression recruiters have of you, so make it count! 📸✨