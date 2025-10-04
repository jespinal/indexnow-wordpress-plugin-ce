# IndexNow Community Edition

**Community Edition IndexNow plugin for WordPress with modern compatibility**

IndexNow Community Edition plugin for WordPress enables automated submission of URLs from WordPress sites to the multiple search engines without the need to register and verify your site with them. Once installed, the plugin will automatically generate and host the API key on your site. It detects page creation/update/ deletion in WordPress and automatically submits the URLs in the background. This ensures that search engines will always have the latest updates about your site.

## 🚀 Quick Start

1. **Build the plugin**: `npm run build:plugin`
2. **Install in WordPress**: Copy `public/` to `wp-content/plugins/indexnow-url-submission-ce/`
3. **Activate** the plugin in WordPress admin

## 📋 Requirements

- **PHP**: 8.3+
- **WordPress**: 6.0+
- **Node.js**: 18+ (for building)

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started quickly
- **[BUILD.md](BUILD.md)** - Complete build guide
- **[INSTALL.md](INSTALL.md)** - Installation instructions
- **[CREDITS.md](CREDITS.md)** - Credits and attribution information

## ⚠️ Important Notice

This is a **fork** of the original Microsoft IndexNow plugin, updated for modern WordPress and PHP versions. This is not an official Microsoft product.

## 🤝 Contributing

This is a **personal project** maintained by [@jespinal](https://github.com/jespinal). While I appreciate community interest, unfortunatelly I have limited time availability for managing contributions. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

**If you need changes, I invite you to:**
- Fork this repository for your own modifications
- Open issues for bug reports (I'll address them when time permits)
- Use it as-is if it meets your needs

Some other handy features included in the plugin:

- Toggle the automatic submission feature.
- Manually submit a URL to IndexNow.
- View list of recent URL submissions from the plugin.
- Retry any failed submissions from the recent submissions list.
- Download recent URL submissions for analysis.
- Status on recent successful and failed submissions

This plugin was developed with love and coffee by the Bing Webmaster team.

## Installation

You just need to install the plugin and set up automatic submission of new pages in your WordPress site. It's that simple!

### Manual Installation
1. **Download the plugin**: Clone or download this repository
2. **Build the plugin**: Run `npm run build:plugin` (see [BUILD.md](BUILD.md) for details)
3. **Upload to WordPress**: Copy the `public/` directory to your WordPress `wp-content/plugins/` folder and rename it to `indexnow-url-submission-ce/`
4. **Activate**: Go to your WordPress admin panel, navigate to `Plugins > Installed Plugins`, and click `Activate` under IndexNow Community Edition
5. **Configure**: Go to `Settings > IndexNow` and click `Let's Get Started!`

## Frequently Asked Questions

- How can I change the API key?

To generate a new API key, please de-activate and re-activate the plugin. It will automatically generate a new key and host on your site. API key is unique for a website and hence should not be changed too frequently as best practices.

- How can I delete any stored data in my WordPress database?

You can go to `Plugins` page from your WordPress sidebar and click on `Deactivate` under `IndexNow Community Edition plugin`. This will remove the API key integration as well as any locally stored data about submitted URLs. Reactivating the plugin will present you with a clean slate.

- I cannot see all the URLs submitted on my dashboard? Where can I view all my submissions made via IndexNow Community Edition plugin?

We are providing a limited number of URLs submitted on the WordPress dashboard (20 successful and 20 failed). Please reach out to individual search engines for more details.

- I can’t see the URLs in search engines indexed?

Indexing of URLs is specific and dependent on each search engine’s rules, please reach out to individual search engine for debugging and resolution.

### 1.0.2

- Allow plugin owners of WordPress site to access Indexing Insights in Bing Webmaster tools.

### 1.0.1

- Moving Admin menu under Settings.
- Text domain fix and minor changes.

### 1.0.0

- Initial release.
