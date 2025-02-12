<?php
function edumel_import_files() {
  return array(
  
    array(
      'import_file_name'             => esc_html__('Demo Import'  , 'edumel'),
      'categories'                   => array( 'Edumel Category' ),
      'import_file_url'            => plugin_dir_url( __DIR__  ) . 'inc/demo/demo-content.xml',
	  'import_widget_file_url'     => plugin_dir_url( __DIR__  ) . 'inc/demo/widget.wie',
      'import_redux'           => array(
        array(
          'file_url'   => plugin_dir_url( __DIR__  ) . 'inc/demo/redux.json',
          'option_name' => 'edumel',
        ),
      ),
      'import_notice'                => esc_html__( 'Please waiting for a few minutes, do not close the window or refresh the page until the data is imported.', 'edumel' ),
      'preview_url'                  => 'https://themesvila.com/themes-wp/edumel/',
    ),      
	

  );
  
    
}

add_filter( 'ocdi/import_files', 'edumel_import_files' );




function edumel_after_import_files() {

	//Set Menu
	$header_menu = get_term_by('name', 'Main Menu', 'nav_menu');
	$footer_menu = get_term_by('name', 'Footer Menu', 'nav_menu');

	set_theme_mod( 'nav_menu_locations' , array( 
		  'menu-1' => $header_menu->term_id, 
		  'menu-2' => $footer_menu->term_id, 
		 ) 
	);
    
// Assign front page and posts page (blog page).
	$front_page_id = get_page_by_title( 'Home' );
	$blog_page_id  = get_page_by_title( 'Blog' );

	update_option( 'show_on_front', 'page' );
	update_option( 'page_on_front', $front_page_id->ID );
	update_option( 'page_for_posts', $blog_page_id->ID );


	
}

add_filter( 'ocdi/after_import', 'edumel_after_import_files' );