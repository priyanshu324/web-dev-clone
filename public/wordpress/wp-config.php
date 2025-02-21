<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'webdevblog' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'un8JT6Wc)EV%=FKwstF/mSJm6]ij0ZSPO+ W?JpX-?a!nTE&~LFS+[Ff($in*5{.' );
define( 'SECURE_AUTH_KEY',  ')gY,k0>X.KuT7jT:N&_dixCU3b9-1W_@%2BmL3~^0~r*a@Z@.cn);AI}rf?%ZLQV' );
define( 'LOGGED_IN_KEY',    '&Wr=X>U*$GFEk5t,H!cs-4iBC@B)B6-vXSUadwx.J8@`JT*Dx{er@Ei:xeX^o@a,' );
define( 'NONCE_KEY',        'dsvO@MXqMF@A&yGD?2le+%,tu]o^eUE1a~4I>*_5z?Koat.q,2uh;m|9XCrFO(7S' );
define( 'AUTH_SALT',        '9mDD_<C(TKYd$/#+B~}dA]?d<]#l^#7]i2}(~Y(U1_)Wa;kLDi9^8kH!;Pvy]EAi' );
define( 'SECURE_AUTH_SALT', '+ddHvp:(68AyurLJI<gGC,Nw(]A+>roN^[!dCV S|2.(Zf@Fl.7N0I$-OujuFu&8' );
define( 'LOGGED_IN_SALT',   'O03Rq6@uD67S8.ezOR; 4exoba@{0ud>r0 Hkg`cF<Q%J5u7/|T1{(B,>mN=[zFj' );
define( 'NONCE_SALT',       ',2%Zbu(KpE*rR%8n,W3Jf6eYqj{np]5l]}iE_.NtAxut0NW%To-om7 Lw1jWPs{S' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
