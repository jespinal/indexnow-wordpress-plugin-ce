# IndexNow Community Edition WordPress Plugin - Build Guide

## 🚀 Quick Start

### Build the Plugin
```bash
npm run build:plugin
```

This command will:
- Clean previous builds
- Build the React frontend with webpack
- Copy assets to the `public/` directory
- Verify the build was successful

### Development Workflow
```bash
# 1. Make changes to React components in src/
# 2. Build the plugin
npm run build:plugin

# 3. Refresh your WordPress admin to see changes
```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run build:plugin` | **Main build command** - Builds and copies assets to public/ |
| `npm run dev` | Development helper - Shows workflow and status |
| `npm run build` | Build React frontend only (no copying) |
| `npm run copy:assets` | Copy built assets to public/ directory |
| `npm run clean` | Clean build and publish directories |

## 🔧 Development Setup

### Prerequisites
- **Node.js**: 18+ (with legacy OpenSSL provider support)
- **PHP**: 8.3+
- **WordPress**: 6.0+

### Installation
```bash
# Install dependencies
npm install

# Build the plugin
npm run build:plugin
```

### WordPress Integration

#### Method 1: Symlink (Recommended for Development)
```bash
# Create symlink from your WordPress plugins directory
ln -s /path/to/plugin/public /path/to/wordpress/wp-content/plugins/indexnow-url-submission-ce
```

#### Method 2: Copy Files
```bash
# Copy the public/ directory to WordPress
cp -r public/ /path/to/wordpress/wp-content/plugins/indexnow-url-submission-ce/
```

## 🏗️ Build Process

### What Gets Built
1. **React Components** → Compiled JavaScript bundle
2. **SCSS Styles** → Compiled CSS bundle
3. **TypeScript** → Compiled to JavaScript
4. **Assets** → Optimized and copied to `public/static/`

## 🐛 Troubleshooting

### Build Fails with Crypto Error
```bash
# Use the build:plugin command which handles this automatically
npm run build:plugin
```

### Assets Not Loading in WordPress
1. Check that `public/static/` directory exists
2. Verify file permissions are correct
3. Check WordPress error logs for PHP errors

### Plugin Shows Blank Screen
1. Ensure build files are in `public/static/`
2. Check browser console for JavaScript errors
3. Verify PHP version is 8.3+

## 📝 Development Tips

### Making Changes
1. Edit React components in `src/components/`
2. Run `npm run build:plugin`
3. Refresh WordPress admin

## 🔄 Continuous Development

For active development, you can:
1. Make changes to React components
2. Run `npm run build:plugin`
3. Refresh WordPress admin
4. Repeat as needed

The symlink method makes this process seamless since changes are immediately reflected in WordPress.

## 📦 Production Deployment

For production deployment:
1. Run `npm run build:plugin`
2. Rename the `public/` directory to `indexnow-url-submission-ce/`
3. Zip the `indexnow-url-submission-ce/` directory
4. Upload to WordPress Plugin Directory or distribute