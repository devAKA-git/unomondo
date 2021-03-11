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
define('AUTH_KEY',         'lG4FTuKSB2cf+paELjSb4szfrbZ014ik32l868fLAK5yd9FckwWTPs863Rt/EfHPl6lvm/OcyXrj3tDRgiFp4Q==');
define('SECURE_AUTH_KEY',  'yJ5Fbe/OOBlDbX0l08C8OnlsaAqgcL1cfQZtwErvGcWbkB86uyMVQVxokYtWBBB52j25/fvdq9NrDUOgYbkzlw==');
define('LOGGED_IN_KEY',    'Upff5k8Qoe00ab91A6ZrEHrzia8Dn5QITEAMn4NmcGnc/29LgUjmWvVZhuHADk4FVikaYlhwANO2GSSV/iuEeQ==');
define('NONCE_KEY',        '+OyrvYB293yzGRr9HaV2P/sa7EPCte99a2iTZa1gspVvSHqtofzZctkiRxCwmT994o1/+pVqEHJeb6fxKbYcmQ==');
define('AUTH_SALT',        'hIqwESYRY73ah4jssOanxVRItdSi4Dd915tO7UT0Wl3M3VL6gSp06h4Xs4a0ktzG29CJWOrbnrpumNumNB1qZA==');
define('SECURE_AUTH_SALT', 'vUM1PkqvLHVX5pNZPmrIrS4w19uVnNunCYdj4gCU9yGZNENIt2A/vCP6mCYYqdQkUG1/JIzJB2z3dUheiI7ZSw==');
define('LOGGED_IN_SALT',   '/VF46PTVtRWivHe5IrgzB5BOi75oh+vqQaZfC6UC4PhDwM2yvwqfrdPTpmrs4ysOrcRoikMQdfivgJuHgwnA5g==');
define('NONCE_SALT',       '9ID76iGjWMRZPyuRSp5R4zgw0JJue+L600pDmYqfiFhpf1poxSy2R7YRdBfpI8b+BFhCavegTlVwxlWzbmZwVw==');

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
