<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'readersgrow');

/** MySQL database username */
define('DB_USER', 'readersgrow');

/** MySQL database password */
define('DB_PASSWORD', 'readersgrow');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'neCgk_BhvQQpJ-]{CWT+8>NHegK$uGr3-Ty<m&ncUEs8T@~E&q+FgRc?Ffp7vj2e');
define('SECURE_AUTH_KEY',  'Lx#X=gw+!|.(8*fP/Frtk:bJFsyaOUeD.hn<5@~q%0zgVl;f}l._OZr*N-jvK N&');
define('LOGGED_IN_KEY',    'nf:`G9)xvAa`hK2] ;+l]w&-}#o@fVD$`M7x.mdiKxOoa.L tPpNN+P?H3MFWA(b');
define('NONCE_KEY',        '`L5)+NJZT</pcC9|QP$w[4/[I(qY[=+Tbw)`eYS>q*Z;B+ywRP-Ek@Dm>he]w>7n');
define('AUTH_SALT',        'cl@^q-ISJOl>qKU|Xc+q+5E`}GkUQnIOZwYdQNjwU0{1-+6|Vf[UW%6^:)O8U Jr');
define('SECURE_AUTH_SALT', '{@ e2H6#|6--Xx_,@UZuS;~)!N-SLG,;$.VXtIsDG@w{}}:TiS*@GsBn6taxITqL');
define('LOGGED_IN_SALT',   '$;qcRyl2KVN-Bv5nt]p aPmul.P}XBTS?l ~W=5%dC`RECEp?h.N_l`<4|WTwXE{');
define('NONCE_SALT',       'TP2KDh=6/R*I]YgkHlxparrXcAc>TUN;[bUb%BYII{S*:|Z1N9@P=gCdj.)do>KD');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
