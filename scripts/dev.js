#!/usr/bin/env node

/**
 * Development script for IndexNow WordPress Plugin
 * 
 * This script helps with the development workflow:
 * 1. Builds the plugin
 * 2. Provides instructions for testing
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 IndexNow Plugin Development Helper\n');

// Check if we're in the right directory
if (!fs.existsSync('public/indexnow-url-submission.php')) {
  console.error('❌ Error: This script must be run from the plugin root directory');
  console.log('   Make sure you\'re in the directory containing public/indexnow-url-submission.php');
  process.exit(1);
}

console.log('📋 Development Workflow:');
console.log('   1. Make changes to React components in src/');
console.log('   2. Run: npm run build:plugin');
console.log('   3. Test in WordPress admin\n');

// Check if WordPress is symlinked
const publicPath = path.resolve('public');
const wpPluginsPath = process.env.WP_PLUGINS_PATH || 'wp-content/plugins';

console.log('🔗 WordPress Integration:');
console.log(`   Plugin path: ${publicPath}`);
console.log(`   Expected WordPress path: ${wpPluginsPath}/indexnow-url-submission-ce/`);

if (fs.existsSync(wpPluginsPath)) {
  console.log('   ✅ WordPress plugins directory found');
} else {
  console.log('   ⚠️  WordPress plugins directory not found');
  console.log('   💡 Set WP_PLUGINS_PATH environment variable if different');
}

console.log('\n🚀 Quick Commands:');
console.log('   npm run build:plugin  - Build and copy assets');
console.log('   npm run clean         - Clean build files');
console.log('   npm start             - Start development server');
console.log('   npm test              - Run tests');

console.log('\n📝 Next Steps:');
console.log('   1. Run: npm run build:plugin');
console.log('   2. Refresh your WordPress admin');
console.log('   3. Check the IndexNow plugin settings');
