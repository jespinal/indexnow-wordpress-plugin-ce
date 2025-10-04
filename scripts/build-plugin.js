#!/usr/bin/env node

/**
 * Build script for IndexNow WordPress Plugin
 * 
 * This script:
 * 1. Builds the React frontend with webpack
 * 2. Copies the built assets to the public directory
 * 3. Creates a proper WordPress plugin structure
 * 4. Handles Node.js compatibility issues
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building IndexNow WordPress Plugin...\n');

// Set Node.js options for compatibility
process.env.NODE_OPTIONS = '--openssl-legacy-provider';

try {
  // Step 1: Clean previous builds
  console.log('📦 Cleaning previous builds...');
  execSync('npm run clean', { stdio: 'inherit' });

  // Step 2: Build the React frontend
  console.log('⚛️  Building React frontend...');
  execSync('npm run build', { stdio: 'inherit' });

  // Step 3: Copy assets to public directory
  console.log('📁 Copying assets to public directory...');
  
  // Remove old static files
  if (fs.existsSync('public/static')) {
    execSync('rm -rf public/static', { stdio: 'inherit' });
  }
  
  // Copy new static files
  if (fs.existsSync('build/static')) {
    execSync('cp -r build/static public/', { stdio: 'inherit' });
    console.log('✅ Static assets copied');
  } else {
    console.log('⚠️  Warning: No static assets found in build/');
  }

  // Copy index.html if it exists
  if (fs.existsSync('build/index.html')) {
    execSync('cp build/index.html public/', { stdio: 'inherit' });
    console.log('✅ Index.html copied');
  }

  // Step 4: Verify the build
  console.log('🔍 Verifying build...');
  
  const staticDir = 'public/static';
  if (fs.existsSync(staticDir)) {
    const jsFiles = fs.readdirSync(path.join(staticDir, 'js')).filter(f => f.endsWith('.js'));
    const cssFiles = fs.readdirSync(path.join(staticDir, 'css')).filter(f => f.endsWith('.css'));
    
    console.log(`📊 Build Summary:`);
    console.log(`   - JavaScript files: ${jsFiles.length}`);
    console.log(`   - CSS files: ${cssFiles.length}`);
    console.log(`   - Total size: ${getDirectorySize(staticDir)}`);
  }

  console.log('\n🎉 Plugin build completed successfully!');
  console.log('📝 Next steps:');
  console.log('   1. The plugin is ready in the public/ directory');
  console.log('   2. Copy public/ to your WordPress plugins directory as "indexnow-url-submission-ce"');
  console.log('   3. Activate the plugin in WordPress admin');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  function calculateSize(itemPath) {
    const stats = fs.statSync(itemPath);
    if (stats.isDirectory()) {
      const files = fs.readdirSync(itemPath);
      files.forEach(file => calculateSize(path.join(itemPath, file)));
    } else {
      totalSize += stats.size;
    }
  }
  
  calculateSize(dirPath);
  
  // Convert to human readable format
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = totalSize;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`;
}
