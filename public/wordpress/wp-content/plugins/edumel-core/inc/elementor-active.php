<?php

/**
 * Elementor Active
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Main Edumel_Elementor_Active_Extension Class
 *
 * The main class that initiates and runs the plugin.
 *
 * @since 1.0.0
 */
final class Edumel_Elementor_Active_Extension {

	/**
	 * Plugin Version
	 *
	 * @since 1.0.0
	 *
	 * @var string The plugin version.
	 */
	const VERSION = '1.0.0';

	/**
	 * Minimum Elementor Version
	 *
	 * @since 1.0.0
	 *
	 * @var string Minimum Elementor version required to run the plugin.
	 */
	const MINIMUM_ELEMENTOR_VERSION = '2.0.0';

	/**
	 * Minimum PHP Version
	 *
	 * @since 1.0.0
	 *
	 * @var string Minimum PHP version required to run the plugin.
	 */
	const MINIMUM_PHP_VERSION = '5.6';

	/**
	 * Instance
	 *
	 * @since 1.0.0
	 *
	 * @access private
	 * @static
	 *
	 * @var Edumel_Elementor_Active_Extension The single instance of the class.
	 */
	private static $_instance = null;

	/**
	 * Instance
	 *
	 * Ensures only one instance of the class is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 * @static
	 *
	 * @return Edumel_Elementor_Active_Extension An instance of the class.
	 */
	public static function instance() {

		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;

	}

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 */
	public function __construct() {


		add_action( 'plugins_loaded', [ $this, 'init' ] );

	}



	/**
	 * Initialize the plugin
	 *
	 * Load the plugin only after Elementor (and other plugins) are loaded.
	 * Checks for basic plugin requirements, if one check fail don't continue,
	 * if all check have passed load the files required to run the plugin.
	 *
	 * Fired by `plugins_loaded` action hook.
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 */
	public function init() {

		// Check if Elementor installed and activated
		if ( ! did_action( 'elementor/loaded' ) ) {
			add_action( 'admin_notices', [ $this, 'admin_notice_missing_main_plugin' ] );
			return;
		}

		// Check for required Elementor version
		if ( ! version_compare( ELEMENTOR_VERSION, self::MINIMUM_ELEMENTOR_VERSION, '>=' ) ) {
			add_action( 'admin_notices', [ $this, 'admin_notice_minimum_elementor_version' ] );
			return;
		}

		// Check for required PHP version
		if ( version_compare( PHP_VERSION, self::MINIMUM_PHP_VERSION, '<' ) ) {
			add_action( 'admin_notices', [ $this, 'admin_notice_minimum_php_version' ] );
			return;
		}

		// Add Plugin actions
		add_action( 'elementor/widgets/widgets_registered', [ $this, 'init_widgets' ] );

	}

	/**
	 * Admin notice
	 *
	 * Warning when the site doesn't have Elementor installed or activated.
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 */
	public function admin_notice_missing_main_plugin() {

		if ( isset( $_GET['activate'] ) ) unset( $_GET['activate'] );

		$message = sprintf(
			/* translators: 1: Plugin name 2: Elementor */
			esc_html__( '"%1$s" requires "%2$s" to be installed and activated.', 'edumel' ),
			'<strong>' . esc_html__( 'Edumel Plugin', 'edumel' ) . '</strong>',
			'<strong>' . esc_html__( 'Elementor', 'edumel' ) . '</strong>'
		);

		printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );

	}

	/**
	 * Admin notice
	 *
	 * Warning when the site doesn't have a minimum required Elementor version.
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 */
	public function admin_notice_minimum_elementor_version() {

		if ( isset( $_GET['activate'] ) ) unset( $_GET['activate'] );

		$message = sprintf(
			/* translators: 1: Plugin name 2: Elementor 3: Required Elementor version */
			esc_html__( '"%1$s" requires "%2$s" version %3$s or greater.', 'edumel' ),
			'<strong>' . esc_html__( 'Edumel Plugin', 'edumel' ) . '</strong>',
			'<strong>' . esc_html__( 'Elementor', 'edumel' ) . '</strong>',
			 self::MINIMUM_ELEMENTOR_VERSION
		);

		printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );

	}

	/**
	 * Admin notice
	 *
	 * Warning when the site doesn't have a minimum required PHP version.
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 */
	public function admin_notice_minimum_php_version() {

		if ( isset( $_GET['activate'] ) ) unset( $_GET['activate'] );

		$message = sprintf(
			/* translators: 1: Plugin name 2: PHP 3: Required PHP version */
			esc_html__( '"%1$s" requires "%2$s" version %3$s or greater.', 'edumel' ),
			'<strong>' . esc_html__( 'Edumel Plugin', 'edumel' ) . '</strong>',
			'<strong>' . esc_html__( 'PHP', 'edumel' ) . '</strong>',
			 self::MINIMUM_PHP_VERSION
		);

		printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );

	}

	/**
	 * Init Widgets
	 *
	 * Include widgets files and register them
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 */
	public function init_widgets() {

		// Include Widget files

		require_once( __DIR__ . '/elementor/title.php' );
		require_once( __DIR__ . '/elementor/buttons.php' );
		require_once( __DIR__ . '/elementor/banner.php' );
		require_once( __DIR__ . '/elementor/banner-search.php' );
		require_once( __DIR__ . '/elementor/counter-up.php' );
		require_once( __DIR__ . '/elementor/feature-intro.php' );
		require_once( __DIR__ . '/elementor/feature.php' );
		require_once( __DIR__ . '/elementor/category.php' );
		require_once( __DIR__ . '/elementor/instructors.php' );
		require_once( __DIR__ . '/elementor/instructor-content.php' );		
		require_once( __DIR__ . '/elementor/courses.php' );
		require_once( __DIR__ . '/elementor/popular-course.php' );
		require_once( __DIR__ . '/elementor/archive-courses.php' );
		require_once( __DIR__ . '/elementor/step.php' );
		require_once( __DIR__ . '/elementor/video.php' );
		require_once( __DIR__ . '/elementor/testimonials.php' );
		require_once( __DIR__ . '/elementor/cta.php' );
		require_once( __DIR__ . '/elementor/cta-intro.php' );
		require_once( __DIR__ . '/elementor/cta-large.php' );
		require_once( __DIR__ . '/elementor/contact-info.php' );
		require_once( __DIR__ . '/elementor/contact-form.php' );
		require_once( __DIR__ . '/elementor/newsletter.php' );

		

		

		// Register widget

		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelTitleWidget() );
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelButtonsWidget() );
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelBannerWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelBannerSearchWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelCounterUpWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelFeatureIntroWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelFeatureWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelCategoryWidget() );
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelInstructorWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelInstructorContentWidget() );		
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelCoursesWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelPopularCourseWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelArchiveCoursesWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelStepWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelVideoWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelTestimonialsWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelCTAintroWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelCTAWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelCTALargeWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelContactInfoWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelContactFormWidget() );	
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \EdumelNewsletterWidget() );	
	
		
	}



}

Edumel_Elementor_Active_Extension::instance();