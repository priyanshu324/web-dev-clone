<?php


add_action( 'cmb2_init', 'edumel_metabox_options' );

function edumel_metabox_options(){
	// Start with an underscore to hide fields from custom fields list
	$prefix = '_edumel_';

	// Page Options	
	$cmb2_post_page_opt = new_cmb2_box( array(
		'id'           => $prefix . 'page_option',
		'title'        => esc_html__( 'Options', 'edumel' ),
		'object_types' => array(  'page' , 'post', 'product', 'courses'), // Post type
		'context'      => 'normal',
		'priority'     => 'high',
		'show_names'   => true, // Show field names on the left
		//'show_on'      => array( 'id' => array( 2, ) ), // Specific post IDs to display this metabox
	) );
	

	$cmb2_post_page_opt->add_field( array(
	    'name'             => esc_html__('Header Style' , 'edumel'),
	    'id'               => $prefix .'header_style',
		'desc'    => esc_html__('Select here' , 'edumel'),
	    'type'    => 'select',
		'default'          => '1',
		'options'          => array(
			'1' => esc_html__( 'One', 'edumel' ),
			'2' => esc_html__( 'Two', 'edumel' ),
			'3' => esc_html__( 'Three', 'edumel' ),
			'4' => esc_html__( 'Four', 'edumel' ),
		),		
	) );	

	$cmb2_post_page_opt->add_field( array(
	    'name'             => esc_html__('Footer Top Padding' , 'edumel'),
	    'id'               => $prefix .'footer_top_padding',
		'desc'    => esc_html__('Select here' , 'edumel'),
	    'type'    => 'select',
		'default'          => '2',
		'options'          => array(
			'1' => esc_html__( 'Yes', 'edumel' ),
			'2' => esc_html__( 'No', 'edumel' ),
		),		
	) );
	
	$cmb2_post_page_opt->add_field( array(
	    'id'               => $prefix .'home_banner_img',
		'name'             => esc_html__('Banner Background Image' , 'edumel'),
	    'desc'             => esc_html__( 'upload image here ','edumel' ),
		 'type'             => 'file',
	) );
	
	$cmb2_post_page_opt->add_field( array(
	    'name'             => esc_html__('Hide Banner ' , 'edumel'),
	    'id'               => $prefix .'hide_banner',
		'desc'    => esc_html__('Check/Uncheck here' , 'edumel'),
	    'type'    => 'checkbox',
	) );

	
	if (class_exists('RevSlider')) {
		global $wpdb;
		$rs_table_name = $wpdb->prefix . "revslider_sliders";
		$rs = $wpdb->get_results( "SELECT id, title, alias FROM $rs_table_name ORDER BY id ASC LIMIT 999" );
		$revsliders = array();
		if ($rs) {
			foreach ( $rs as $slider ) {
				$revsliders[$slider->alias] = $slider->alias;
			}
		} else {
			$revsliders["No sliders found"] = 'No Alias found';
		}
		$cmb2_post_page_opt->add_field( array(
		    'name'             =>  esc_html__('Rev Slider Alias','edumel' ), 
		    'id'               => $prefix.'rev_slider_alias',
		    'type'             => 'select',
		    'options'          => $revsliders,
		    'default'          => '',
		    'desc'         	   => esc_html__( 'Select any One, Which One You want to display','edumel' ),
			'show_option_none' => true,
		) );
		
	
	}

	
	//Start Testimonials Options
	$edumel_testimonial = new_cmb2_box( array(
		'id'           => $prefix . 'testimonials_options',
		'title'        => esc_html__( 'Testimonials Info', 'edumel' ),
		'object_types' => array( 'testimonials'), // Post type
		'context'      => 'normal',
		'priority'     => 'high',
		'show_names'   => true, // Show field names on the left
		//'show_on'      => array( 'id' => array( 2, ) ), // Specific post IDs to display this metabox
	) );
	
	$edumel_testimonial->add_field( array(
	    'name'             => esc_html__('Designation' , 'edumel'),
	    'id'               => $prefix .'test_designation',
		'desc'    => esc_html__('wirte text here' , 'edumel'),
	    'type'    => 'text',
		'default'    => 'Marketing Manager',
				
	) );	
	
	//Start Team Options
	$edumel_team = new_cmb2_box( array(
		'id'           => $prefix . 'team_options',
		'title'        => esc_html__( 'Team Info', 'edumel' ),
		'object_types' => array( 'team'), // Post type
		'context'      => 'normal',
		'priority'     => 'high',
		'show_names'   => true, // Show field names on the left
		//'show_on'      => array( 'id' => array( 2, ) ), // Specific post IDs to display this metabox
	) );
	
	$edumel_team->add_field( array(
	    'name'             => esc_html__('Designation' , 'edumel'),
	    'id'               => $prefix .'team_designation',
		'desc'    => esc_html__('wirte text here' , 'edumel'),
	    'type'    => 'text',
		'default'    => 'SEO Expert',
				
	) );	

	$team_group_field_id = $edumel_team->add_field( array(
		'id'          => $prefix .'team_group_field_opt',
		'type'        => 'group',
		// 'repeatable'  => false, // use false if you want non-repeatable group
		'options'     => array(
			'group_title'   => esc_html__( 'Social  {#}', 'edumel' ), // since version 1.1.4, {#} gets replaced by row number
			'add_button'    => esc_html__( 'Add New Social', 'edumel' ),
			'remove_button' => esc_html__( 'Remove Social', 'edumel' ),
			'sortable'      => true, // beta
			// 'closed'     => true, // true to have the groups closed by default
		),
	) );

	// Id's for group's fields only need to be unique for the group. Prefix is not needed.
	$edumel_team->add_group_field( $team_group_field_id, array(
		'name' => esc_html__('Social Icon' , 'edumel'),
		'id'   => $prefix .'team_social_icon',
		'type' => 'text',
		'default' => 'fab fa-facebook-f',
		'description' => esc_html__('write icon here' , 'edumel'),
		// 'repeatable' => true, // Repeatable fields are supported w/in repeatable groups (for most types)
	) );
	
	// Id's for group's fields only need to be unique for the group. Prefix is not needed.
	$edumel_team->add_group_field( $team_group_field_id, array(
		'name'             => esc_html__('Social Link' , 'edumel'),
		'id'               => $prefix .'team_social_link',
		'type' => 'text',
		'default' => '#',
		'desc'             => esc_html__( 'enter url here','edumel' ),
		// 'repeatable' => true, // Repeatable fields are supported w/in repeatable groups (for most types)
	) );		
}