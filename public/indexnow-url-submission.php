<?php

/*
 * Plugin Name:       IndexNow Community Edition
 * Plugin URI:        https://pavelespinal.com/wordpress-plugins-indexnow-community-edition
 * Description:       Personal fork of IndexNow plugin for WordPress with modern compatibility
 * Version:           2.0.0
 * Requires at least: 6.0
 * Requires PHP:      8.3
 * Author:            Pavel Espinal
 * Author URI:        https://github.com/jespinal
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       indexnow
 * Domain Path:       /languages
 * Update URI:        false
 */

/**
 * Based on the original IndexNow plugin by Microsoft Bing
 * Original plugin: https://github.com/microsoft/indexnow-wordpress-plugin
 * This is a personal fork with modern WordPress compatibility
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 */

define( 'BWT_INDEXNOW_PLUGIN_VERSION', '2.0.0' );

/**
 * Plugin name.
 */

define( 'BWT_INDEXNOW_PLUGIN_NAME', 'indexnow' );

/**
 * The code that runs during plugin activation.
 */
function activate_indexnow_url_submission() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-indexnow-url-submission-activator.php';
	BWT_IndexNow_Activator::activate(BWT_INDEXNOW_PLUGIN_NAME);
}

/**
 * The code that runs during plugin deactivation.
 */
function deactivate_indexnow_url_submission() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-indexnow-url-submission-deactivator.php';
	BWT_IndexNow_Deactivator::deactivate(BWT_INDEXNOW_PLUGIN_NAME);
}

register_activation_hook( __FILE__, 'activate_indexnow_url_submission' );
register_deactivation_hook( __FILE__, 'deactivate_indexnow_url_submission' );

/**
 * The core plugin class that is used to define admin-specific hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-indexnow-url-submission.php';

/**
 * Begins execution of the plugin.
 *
 * @since    0.01.01
 */
function run_indexnow_url_submission() {

	$plugin = new BWT_IndexNow(BWT_INDEXNOW_PLUGIN_NAME);
	$plugin->run();

}
run_indexnow_url_submission();
