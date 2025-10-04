# IndexNow CE (Community Edition) - Quick Start Guide

## 🚀 Getting Started

### **For Users**
1. **Download/Clone** this repository
2. **Build the plugin**: `npm run build:plugin`
3. **Install in WordPress**: Copy `public/` to `wp-content/plugins/indexnow-url-submission-ce/`
4. **Activate** the plugin in WordPress admin

### **For Developers**
1. **Install dependencies**: `npm install`
2. **Make changes** to React components in `src/`
3. **Build and test**: `npm run build:plugin`
4. **Development help**: `npm run dev`

## 📋 Quick Commands

| Command | Purpose |
|---------|---------|
| `npm run build:plugin` | **Main build command** - Builds and copies assets |
| `npm run dev` | **Development helper** - Shows workflow and status |
| `npm run clean` | **Clean build files** - Removes build artifacts |
| `npm start` | **Development server** - For React development |

## 🔧 Requirements

- **Node.js**: 18+ (with legacy OpenSSL provider)
- **PHP**: 8.3+
- **WordPress**: 6.0+

## 📁 Key Files

- `public/indexnow-url-submission.php` - Main plugin file
- `src/components/` - React components
- `scripts/build-plugin.js` - Build automation
- `BUILD.md` - Detailed build instructions
- `INSTALL.md` - Installation guide

## 🐛 Troubleshooting

### **Build Issues**
- Use `npm run build:plugin` (handles Node.js compatibility)
- Check `BUILD.md` for detailed troubleshooting

### **WordPress Issues**
- Ensure PHP 8.3+ and WordPress 6.0+
- Check WordPress error logs
- Verify plugin directory name: `indexnow-url-submission-ce`

### **Development Issues**
- Run `npm run dev` for guidance
- Check browser console for JavaScript errors
- Verify build files exist in `public/static/`

## 📚 Documentation

- **BUILD.md** - Complete build and development guide
- **INSTALL.md** - Installation instructions
- **docs/STATUS.md** - Current project status
- **docs/modernization-summary.md** - What was updated

## 🎯 Current Status

✅ **Fully Modernized** - Ready for WordPress 6.0+ and PHP 8.3+  
✅ **Build System** - Automated with npm scripts  
✅ **Documentation** - Complete guides available  
✅ **Development Ready** - Full workflow established  

**The plugin is ready for use and development!**
