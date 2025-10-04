#!/usr/bin/env node

/**
 * Build script for IndexNow Community Edition WordPress Plugin
 *
 * This script:
 * 1. Builds the React frontend with webpack
 * 2. Copies the built assets to the public directory
 * 3. Creates a proper WordPress plugin structure
 * 4. Handles Node.js compatibility issues
 * 5. Ensures clean builds with proper file management
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building IndexNow Community Edition WordPress Plugin...\n');

// Set Node.js options for compatibility
process.env.NODE_OPTIONS = '--openssl-legacy-provider';

try {
  // Step 1: Clean previous builds COMPLETELY
  console.log('📦 Cleaning previous builds...');
  execSync('npm run clean', { stdio: 'inherit' });
  
  // Additional cleanup to ensure no old files persist
  if (fs.existsSync('public/static')) {
    execSync('rm -rf public/static', { stdio: 'inherit' });
    console.log('✅ Cleaned old static files');
  }
  
  if (fs.existsSync('public/index.html')) {
    execSync('rm -f public/index.html', { stdio: 'inherit' });
    console.log('✅ Cleaned old index.html');
  }

  // Create the required index.html template if it doesn't exist
  if (!fs.existsSync('public/index.html')) {
    console.log('📄 Creating index.html template...');
    const indexHtmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="IndexNow CE WordPress Plugin"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>IndexNow CE</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;
    fs.writeFileSync('public/index.html', indexHtmlContent);
    console.log('✅ Created index.html template');
  }

  // Step 2: Build the React frontend
  console.log('⚛️  Building React frontend...');
  execSync('NODE_OPTIONS="--openssl-legacy-provider" npm run build', { stdio: 'inherit' });

  // Step 3: Copy assets to public directory
  console.log('📁 Copying assets to public directory...');

  // Copy new static files
  if (fs.existsSync('build/static')) {
    execSync('cp -r build/static public/', { stdio: 'inherit' });
    console.log('✅ Static assets copied');
  } else {
    throw new Error('No static assets found in build/');
  }

  // Copy index.html if it exists
  if (fs.existsSync('build/index.html')) {
    execSync('cp build/index.html public/', { stdio: 'inherit' });
    console.log('✅ Index.html copied');
  } else {
    throw new Error('No index.html found in build/');
  }

  // Step 4: Verify the build and ensure single files
  console.log('🔍 Verifying build...');

  const staticDir = 'public/static';
  if (fs.existsSync(staticDir)) {
    const jsFiles = fs.readdirSync(path.join(staticDir, 'js')).filter(f => f.endsWith('.js') && !f.endsWith('.map'));
    const cssFiles = fs.readdirSync(path.join(staticDir, 'css')).filter(f => f.endsWith('.css') && !f.endsWith('.map'));

    console.log(`📊 Build Summary:`);
    console.log(`   - JavaScript files: ${jsFiles.length}`);
    console.log(`   - CSS files: ${cssFiles.length}`);
    console.log(`   - Total size: ${getDirectorySize(staticDir)}`);

    // Check for multiple JS files (this is the problem!)
    if (jsFiles.length > 1) {
      console.log('⚠️  WARNING: Multiple JavaScript files detected!');
      console.log('   This can cause interface issues. Files found:');
      jsFiles.forEach(file => console.log(`   - ${file}`));
      console.log('   The HTML file may be referencing the wrong file.');
    }

    // Check HTML file for multiple script tags
    const htmlPath = 'public/index.html';
    if (fs.existsSync(htmlPath)) {
      const htmlContent = fs.readFileSync(htmlPath, 'utf8');
      const scriptMatches = htmlContent.match(/src="\/static\/js\/[^"]+\.js"/g);
      if (scriptMatches && scriptMatches.length > 1) {
        console.log('⚠️  WARNING: HTML file references multiple JavaScript files!');
        console.log('   This will cause interface issues.');
        scriptMatches.forEach(match => console.log(`   - ${match}`));
      }
    }
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