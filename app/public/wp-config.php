<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'qEc878y9KCdHvj4onHc2D6bF7fFg2lITUBsfmkrfLLr/TT5U0p3OSZDGL14gHsvMggktPcexGgSDDDG1pM6mlQ==');
define('SECURE_AUTH_KEY',  'Iuc2mgFzqwumwUxwtQ+btsvzzGIYPnlF+WFOZ3UJxmxDBDaIV7UoTkEAq+tXb4cE02T50Kop/AwjmZYIh7CyVw==');
define('LOGGED_IN_KEY',    'nWKZBzFvlFQ/pG439lqo36zqIBS1l/7jURb2te1fkcIyljhe+bfAT5TxamfMAXvxmDxH+fbkz2PzH+NaVBbHZw==');
define('NONCE_KEY',        'PLZCnvuEqaTp8wXSm6jXVGeBxlXNeKkkicNnjzoloitwssEKV32OV9F1/cYHJNN+xbd3/sHo5DVdhz1Osnn1TQ==');
define('AUTH_SALT',        'c8mTuQzy3/YWOmuvPZA2PT+jUfWgvUbxORox9hayiEtcdV5eh7C+5JGSuAUq+t0tCASMBucO7frbrK6CsCQv4A==');
define('SECURE_AUTH_SALT', '8ygyXBjeFnGhnQ7nStDi1ZpxUsfy3xviluwMm9JUA3Onxdu6RTiCA8FZPxv3yurBynOm56KoKABvTy0LPwxOGw==');
define('LOGGED_IN_SALT',   'WLJ4B/9qzuaUt554NRXnthyDifH+KwcUyp7B31+GhLXEYro8jWsekOHGvoojTpoinOVH5X4UscNjkiVEGR/BBQ==');
define('NONCE_SALT',       'uAMtX6DS5noOmvGTrYdMxzByNmz80qx0QbJMhprQOur4hsUTfJqPiT4cGDlmCnX/mi5hU7vlS0JQHrqsAeFSvQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
