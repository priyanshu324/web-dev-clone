<?php
function edumel_child_enqueue_styles() {

    $parent_style = 'parent-style';


    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style )
    );
	
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
	
}
add_action( 'wp_enqueue_scripts', 'edumel_child_enqueue_styles' );

