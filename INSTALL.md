# IndexNow Community Edition - Installation Guide

## 📦 Plugin Directory Name
The plugin should be installed in WordPress as:
```
wp-content/plugins/indexnow-url-submission-ce/
```

## 🚀 Quick Installation

### Method 1: Development (Symlink)
```bash
# From your plugin development directory
ln -s /path/to/plugin/public /path/to/wordpress/wp-content/plugins/indexnow-url-submission-ce
```

### Method 2: Production (Copy)
```bash
# Copy the built plugin
cp -r public/ /path/to/wordpress/wp-content/plugins/indexnow-url-submission-ce/
```

### Method 3: WordPress Admin Upload
1. Run `npm run build:plugin`
2. Rename `public/` to `indexnow-url-submission-ce/`
3. Zip the directory
4. Upload via WordPress admin

## ✅ Verification
After installation, check:
- **Plugins → Installed Plugins**: "IndexNow Community Edition" should be listed
- **Settings**: "IndexNow" menu should appear
- **Activation**: Plugin should activate without errors

## 🔧 Requirements
- **PHP**: 8.3+
- **WordPress**: 6.0+
- **Node.js**: 18+ (for building)

## 📝 Notes
- The plugin directory name includes `-ce` suffix for "Community Edition"
- This distinguishes it from the original Microsoft plugin
- All functionality remains the same as the original
