=== IndexNow Community Edition ===
Contributors: jespinal
Plugin link: https://github.com/jespinal/indexnow-wordpress-plugin-ce
Tags: seo, crawling, indexnow
Requires at least: 6.0
Tested up to: 6.8
Stable tag: 2.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.txt
Requires PHP: 8.3

Personal fork of IndexNow plugin for WordPress with modern compatibility. This
is a personal fork of the original Microsoft IndexNow plugin, updated for current
WordPress versions.


== Description ==

**Personal fork of the original IndexNow plugin by Microsoft Bing**

This plugin enables automated submission of URLs from WordPress sites to
multiple search engines without the need to register and verify your site with
them. Once installed, the plugin will automatically generate and host the API
key on your site. It detects page creation/update/deletion in WordPress and
automatically submits the URLs in the background. This ensures that search
engines will always have the latest updates about your site.

**What's new in this personal fork:**
* Modern WordPress compatibility (6.0+)
* PHP 8.3+ support
* Updated dependencies and security fixes
* Personal maintenance by jespinal

**Important Disclaimer:**
* This is a personal fork maintained by jespinal
* I am not an expert in IndexNow technology (or many of the underlying front-end technologies used in this plugin) - I'm just trying to make it work with modern WordPress
* Use this plugin at your own risk and responsibility

**Based on the original IndexNow plugin by Microsoft Bing**
* Original plugin: https://github.com/microsoft/indexnow-wordpress-plugin
* This fork includes modern WordPress compatibility updates

Some other handy features included in the plugin:

* Toggle the automatic submission feature.
* Manually submit a URL to IndexNow.
* View list of recent URL submissions from the plugin.
* Retry any failed submissions from the recent submissions list.
* Download recent URL submissions for analysis.
* Status on recent successful and failed submissions

You can browse the code at the [GitHub repository](https://github.com/microsoft/indexnow-wordpress-plugin).

This plugin was developed with love and coffee by the Bing Webmaster team.

== Installation ==

You just need to install the plugin and set up automatic submission of new pages in your WordPress site. It's that simple!

- Log in to WordPress admin panel for your WordPress site. Click on 'Plugins > Add New'.
- Search for 'IndexNow Community Edition Plugin' and install.
- Once installed, click on 'Activate' to enable plugin.
- Go to IndexNow Community Edition admin page under 'Settings > IndexNow' and click 'Let's Get Started!'.

== Frequently Asked Questions ==

= How can I change the API key? =

To generate a new API key, please de-activate and re-activate the plugin. It will automatically generate a new key and host on your site. API key is unique for a website and hence should not be changed too frequently as best practices.

= How can I delete any stored data in my WordPress database? =

You can go to 'Plugins' page from your WordPress sidebar and click on Deactivate under IndexNow Community Edition plugin. This will remove the API key integration as well as any locally stored data about submitted URLs. Reactivating the plugin will present you with a clean slate.

= I cannot see all the URLs submitted on my dashboard? Where can I view all my submissions made via IndexNow Community Edition plugin?

We are providing a limited number of URLs submitted on the WordPress dashboard (20 successful and 20 failed). Please reach out to individual search engines for more details.

= I can’t see the URLs in search engines indexed? =

Indexing of URLs is specific and dependent on each search engine’s rules, please reach out to individual search engine for debugging and resolution.


== Changelog ==

= 2.0.0 (Community Edition) =
* Modern WordPress compatibility (6.0+)
* PHP 8.3+ support
* Updated React 18, TypeScript 5, Fluent UI 9
* Security fixes and performance improvements
* Personal fork of original Microsoft plugin

= 1.0.2 (Original Microsoft Version) =
* Allow plugin owners of WordPress site to access Indexing Insights in Bing Webmaster tools.

= 1.0.1 (Original Microsoft Version) =
* Moving Admin menu under Settings.
* Text domain fix and minor changes.

= 1.0.0 (Original Microsoft Version) =
* Initial release.
