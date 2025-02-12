<?php


if ( ! function_exists('edumel_testimonials') ) {

// Register Testimonial Post Type
function edumel_testimonials() {

	$labels = array(
		'name'                  => esc_html_x( 'Testimonials', 'Post Type General Name', 'edumel' ),
		'singular_name'         => esc_html_x( 'Testimonial', 'Post Type Singular Name', 'edumel' ),
		'menu_name'             => esc_html__( 'Testimonials', 'edumel' ),
		'name_admin_bar'        => esc_html__( 'Testimonials', 'edumel' ),
		'archives'              => esc_html__( 'Item Archives', 'edumel' ),
		'attributes'            => esc_html__( 'Item Attributes', 'edumel' ),
		'parent_item_colon'     => esc_html__( 'Parent Item:', 'edumel' ),
		'all_items'             => esc_html__( 'All Items', 'edumel' ),
		'add_new_item'          => esc_html__( 'Add New Item', 'edumel' ),
		'add_new'               => esc_html__( 'Add New', 'edumel' ),
		'new_item'              => esc_html__( 'New Item', 'edumel' ),
		'edit_item'             => esc_html__( 'Edit Item', 'edumel' ),
		'update_item'           => esc_html__( 'Update Item', 'edumel' ),
		'view_item'             => esc_html__( 'View Item', 'edumel' ),
		'view_items'            => esc_html__( 'View Items', 'edumel' ),
		'search_items'          => esc_html__( 'Search Item', 'edumel' ),
		'not_found'             => esc_html__( 'Not found', 'edumel' ),
		'not_found_in_trash'    => esc_html__( 'Not found in Trash', 'edumel' ),
		'featured_image'        => esc_html__( 'Featured Image', 'edumel' ),
		'set_featured_image'    => esc_html__( 'Set featured image', 'edumel' ),
		'remove_featured_image' => esc_html__( 'Remove featured image', 'edumel' ),
		'use_featured_image'    => esc_html__( 'Use as featured image', 'edumel' ),
		'insert_into_item'      => esc_html__( 'Insert into item', 'edumel' ),
		'uploaded_to_this_item' => esc_html__( 'Uploaded to this item', 'edumel' ),
		'items_list'            => esc_html__( 'Items list', 'edumel' ),
		'items_list_navigation' => esc_html__( 'Items list navigation', 'edumel' ),
		'filter_items_list'     => esc_html__( 'Filter items list', 'edumel' ),
	);
	$args = array(
		'label'                 => esc_html__( 'Testimonial', 'edumel' ),
		'description'           => esc_html__( 'Post Type Description', 'edumel' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'   => 'dashicons-format-chat',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	);
	register_post_type( 'testimonials', $args );

}
add_action( 'init', 'edumel_testimonials', 0 );

}

if ( ! function_exists('edumel_team') ) {

// Register Custom Post Type
function edumel_team() {

	$labels = array(
		'name'                  => esc_html_x( 'Team', 'Post Type General Name', 'edumel' ),
		'singular_name'         => esc_html_x( 'Team', 'Post Type Singular Name', 'edumel' ),
		'menu_name'             => esc_html__( 'Team', 'edumel' ),
		'name_admin_bar'        => esc_html__( 'Team', 'edumel' ),
		'archives'              => esc_html__( 'Item Archives', 'edumel' ),
		'attributes'            => esc_html__( 'Item Attributes', 'edumel' ),
		'parent_item_colon'     => esc_html__( 'Parent Item:', 'edumel' ),
		'all_items'             => esc_html__( 'All Items', 'edumel' ),
		'add_new_item'          => esc_html__( 'Add New Item', 'edumel' ),
		'add_new'               => esc_html__( 'Add New', 'edumel' ),
		'new_item'              => esc_html__( 'New Item', 'edumel' ),
		'edit_item'             => esc_html__( 'Edit Item', 'edumel' ),
		'update_item'           => esc_html__( 'Update Item', 'edumel' ),
		'view_item'             => esc_html__( 'View Item', 'edumel' ),
		'view_items'            => esc_html__( 'View Items', 'edumel' ),
		'search_items'          => esc_html__( 'Search Item', 'edumel' ),
		'not_found'             => esc_html__( 'Not found', 'edumel' ),
		'not_found_in_trash'    => esc_html__( 'Not found in Trash', 'edumel' ),
		'featured_image'        => esc_html__( 'Featured Image', 'edumel' ),
		'set_featured_image'    => esc_html__( 'Set featured image', 'edumel' ),
		'remove_featured_image' => esc_html__( 'Remove featured image', 'edumel' ),
		'use_featured_image'    => esc_html__( 'Use as featured image', 'edumel' ),
		'insert_into_item'      => esc_html__( 'Insert into item', 'edumel' ),
		'uploaded_to_this_item' => esc_html__( 'Uploaded to this item', 'edumel' ),
		'items_list'            => esc_html__( 'Items list', 'edumel' ),
		'items_list_navigation' => esc_html__( 'Items list navigation', 'edumel' ),
		'filter_items_list'     => esc_html__( 'Filter items list', 'edumel' ),
	);
	$args = array(
		'label'                 => esc_html__( 'Team', 'edumel' ),
		'description'           => esc_html__( 'Post Type Description', 'edumel' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'thumbnail' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'   => 'dashicons-admin-users',		
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	);
	register_post_type( 'team', $args );

}
add_action( 'init', 'edumel_team', 0 );

}