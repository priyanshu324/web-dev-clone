<?php
/*

Plugin Name: Edumel Core

Plugin URI: http://pxelcode.com/wp/edumel

Description: After install the edumel WordPress Theme, you must need to install this Plugin then will get all Features of edumel WP Theme.

Author: Pxelcode

Author URI: https://themeforest.net/user/pxelcode

Version: 1.0

Text Domain: edumel-core

*/


//define

define( 'EDUMELCOREDIR', dirname( __FILE__ ) ); 

// Add main files

include_once(EDUMELCOREDIR. '/inc/elementor-active.php');
include_once(EDUMELCOREDIR. '/inc/custom_posts.php');
include_once(EDUMELCOREDIR. '/inc/theme-options.php');
include_once(EDUMELCOREDIR. '/inc/metabox.php');
include_once(EDUMELCOREDIR. '/inc/demo_install.php');
include_once(EDUMELCOREDIR. '/inc/widgets/footer_about.php');
include_once(EDUMELCOREDIR. '/inc/widgets/footer_contact_info.php');


//Add Elementor Category
function edumel_add_elementor_widget_categories( $elements_manager ) {

	$elements_manager->add_category(
		'edumel-category',
		[
			'title' => esc_html__( 'Edumel', 'edumel' ),
		]
	);

}
add_action( 'elementor/elements/categories_registered', 'edumel_add_elementor_widget_categories' );

