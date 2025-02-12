<?php 
function edumel_movers_custom_css(){
	global $edumel;
	
	if(!is_admin()) :
	?>
  
	<?php 
		$edumel_custom_css_opt						 = '';
		$edumel_theme_primary_color_opt						 = '';
		$edumel_theme_secondary_color_opt						 = '';
		$edumel_white_btn_bg_color						 = '';
		$edumel_white_btn_text_color						 = '';
		$edumel_white_btn_hbg_color						 = '';
		$edumel_white_btn_htext_color						 = '';
		$edumel_bgbutton_bgcolor						 = '';
		$edumel_bgbutton_textcolor						 = '';
		$edumel_bgbutton_hover_textcolor						 = '';
		$edumel_bgbutton_hover_bgcolor						 = '';
		$edumel_bor_btn_text_color						 = '';
		$edumel_bor_btn_border_color						 = '';
		$edumel_bor_btn_text_hovercolor						 = '';
		$edumel_bor_btn_bg_hovercolor						 = '';
		$edumel_menu_text_color						 = '';
		$edumel_menu_text_hover_color						 = '';
		$edumel_sticky_menu_bg_color						 = '';
		$edumel_sticky_menu_text_color						 = '';;	
		$edumel_submenu_bg_color						 = '';	
		$edumel_submenu_text_color						 = '';	
		$edumel_submenu_hover_text_color						 = '';		
		$edumel_footer_backgorund_color						 = '';
		$edumel_footer_title_color						 = '';	
		$edumel_footer_text_color						 = '';	
		$edumel_footer_link_color						 = '';	
		$edumel_footer_link_hover_color						 = '';		
		$edumel_footer_btmlink_hover_color						 = '';
		$edumel_scroll_border_color						 = '';	
		$edumel_scroll_up_text_color						 = '';		
			

		if ( isset( $edumel['edumel_custom_css_opt'] ) ) {
			$edumel_custom_css_opt = $edumel['edumel_custom_css_opt'];
		}
		
		if ( isset( $edumel['edumel_theme_primary_color_opt'] ) ) {
			$edumel_theme_primary_color_opt = $edumel['edumel_theme_primary_color_opt'];
		}	
		
		if ( isset( $edumel['edumel_theme_secondary_color_opt'] ) ) {
			$edumel_theme_secondary_color_opt = $edumel['edumel_theme_secondary_color_opt'];
		}			
		if ( isset( $edumel['edumel_white_btn_bg_color'] ) ) {
			$edumel_white_btn_bg_color = $edumel['edumel_white_btn_bg_color'];
		}				
		
		if ( isset( $edumel['edumel_white_btn_text_color'] ) ) {
			$edumel_white_btn_text_color = $edumel['edumel_white_btn_text_color'];
		}			
		if ( isset( $edumel['edumel_white_btn_hbg_color'] ) ) {
			$edumel_white_btn_hbg_color = $edumel['edumel_white_btn_hbg_color'];
		}			
		
		if ( isset( $edumel['edumel_white_btn_htext_color'] ) ) {
			$edumel_white_btn_htext_color = $edumel['edumel_white_btn_htext_color'];
		}	

		if ( isset( $edumel['edumel_bgbutton_bgcolor'] ) ) {
			$edumel_bgbutton_bgcolor = $edumel['edumel_bgbutton_bgcolor'];
		}	
		
		if ( isset( $edumel['edumel_bgbutton_textcolor'] ) ) {
			$edumel_bgbutton_textcolor = $edumel['edumel_bgbutton_textcolor'];
		}	

		if ( isset( $edumel['edumel_bgbutton_hover_textcolor'] ) ) {
			$edumel_bgbutton_hover_textcolor = $edumel['edumel_bgbutton_hover_textcolor'];
		}	
		if ( isset( $edumel['edumel_bgbutton_hover_bgcolor'] ) ) {
			$edumel_bgbutton_hover_bgcolor = $edumel['edumel_bgbutton_hover_bgcolor'];
		}			
		
		if ( isset( $edumel['edumel_bor_btn_text_color'] ) ) {
			$edumel_bor_btn_text_color = $edumel['edumel_bor_btn_text_color'];
		}		
		if ( isset( $edumel['edumel_bor_btn_border_color'] ) ) {
			$edumel_bor_btn_border_color = $edumel['edumel_bor_btn_border_color'];
		}		
		if ( isset( $edumel['edumel_bor_btn_text_hovercolor'] ) ) {
			$edumel_bor_btn_text_hovercolor = $edumel['edumel_bor_btn_text_hovercolor'];
		}			
	
		if ( isset( $edumel['edumel_bor_btn_bg_hovercolor'] ) ) {
			$edumel_bor_btn_bg_hovercolor = $edumel['edumel_bor_btn_bg_hovercolor'];
		}	
		
		if ( isset( $edumel['edumel_menu_text_color'] ) ) {
			$edumel_menu_text_color = $edumel['edumel_menu_text_color'];
		}	
							
		if ( isset( $edumel['edumel_menu_text_hover_color'] ) ) {
			$edumel_menu_text_hover_color = $edumel['edumel_menu_text_hover_color'];
		}				
			
		if ( isset( $edumel['edumel_sticky_menu_bg_color'] ) ) {
			$edumel_sticky_menu_bg_color = $edumel['edumel_sticky_menu_bg_color'];
		}	
		
		if ( isset( $edumel['edumel_sticky_menu_text_color'] ) ) {
			$edumel_sticky_menu_text_color = $edumel['edumel_sticky_menu_text_color'];
		}			
		
		if ( isset( $edumel['edumel_submenu_bg_color'] ) ) {
			$edumel_submenu_bg_color = $edumel['edumel_submenu_bg_color'];
		}		
		
		if ( isset( $edumel['edumel_submenu_text_color'] ) ) {
			$edumel_submenu_text_color = $edumel['edumel_submenu_text_color'];
		}	
		
		if ( isset( $edumel['edumel_submenu_hover_text_color'] ) ) {
			$edumel_submenu_hover_text_color = $edumel['edumel_submenu_hover_text_color'];
		}	
		
		if ( isset( $edumel['edumel_footer_backgorund_color'] ) ) {
			$edumel_footer_backgorund_color = $edumel['edumel_footer_backgorund_color'];
		}		
		
		if ( isset( $edumel['edumel_footer_title_color'] ) ) {
			$edumel_footer_title_color = $edumel['edumel_footer_title_color'];
		}		
		
		if ( isset( $edumel['edumel_footer_text_color'] ) ) {
			$edumel_footer_text_color = $edumel['edumel_footer_text_color'];
		}			
		
		if ( isset( $edumel['edumel_footer_link_color'] ) ) {
			$edumel_footer_link_color = $edumel['edumel_footer_link_color'];
		}		

		if ( isset( $edumel['edumel_footer_link_hover_color'] ) ) {
			$edumel_footer_link_hover_color = $edumel['edumel_footer_link_hover_color'];
		}
		
		if ( isset( $edumel['edumel_footer_btmlink_hover_color'] ) ) {
			$edumel_footer_btmlink_hover_color = $edumel['edumel_footer_btmlink_hover_color'];
		}		
		
		if ( isset( $edumel['edumel_scroll_border_color'] ) ) {
			$edumel_scroll_border_color = $edumel['edumel_scroll_border_color'];
		}		
		
		if ( isset( $edumel['edumel_scroll_up_text_color'] ) ) {
			$edumel_scroll_up_text_color = $edumel['edumel_scroll_up_text_color'];
		}			
		
	
	if($edumel_custom_css_opt == true){

	wp_enqueue_style( 'edumel-custom-css', get_template_directory_uri() . '/css/custom-style.css' );
	
	//add custom css
	$edumel_custom_css = "
	
		body .btn-white{
			color: {$edumel_white_btn_text_color};
			border-color: {$edumel_white_btn_bg_color};
			background: {$edumel_white_btn_bg_color};
		}
		body .btn-white:hover,
		body .btn-white:focus{
			color: {$edumel_white_btn_htext_color};
			background: {$edumel_white_btn_hbg_color};
			border-color: {$edumel_white_btn_hbg_color};
		}
		body .btn-main{
			background: {$edumel_bgbutton_bgcolor};
			border-color: {$edumel_bgbutton_bgcolor};
			color: {$edumel_bgbutton_textcolor};
		}		
		
		body .btn-main:hover,
		body .btn-main:focus{
			background: {$edumel_bgbutton_hover_bgcolor};
			border-color: {$edumel_bgbutton_hover_bgcolor};
			color: {$edumel_bgbutton_hover_textcolor};
		}		
		
		body .btn-main-outline{
			border-color: {$edumel_bor_btn_border_color};
			color: {$edumel_bor_btn_text_color};
		}	
		
		body .btn-main-outline:hover,
		body .btn-main-outline:focus
		{
			background-color: {$edumel_bor_btn_bg_hovercolor};
			border-color: {$edumel_bor_btn_bg_hovercolor};
			color: {$edumel_bor_btn_text_hovercolor};
		}
		
		body .site-navbar.ms-auto ul li a
		{
			color: {$edumel_menu_text_color};
		}
		body .site-navbar.ms-auto ul li a:hover,
		body .site-navbar.ms-auto ul li a:focus,
		body .menu_fixed .site-navbar.ms-auto ul li a:hover,
		body .menu_fixed .site-navbar.ms-auto ul li a:focus{
			color: {$edumel_menu_text_hover_color};
		}
		body .menu_fixed{
			background: {$edumel_sticky_menu_bg_color};
		}
		body .menu_fixed .site-navbar.ms-auto ul li a {
			color: {$edumel_sticky_menu_text_color};
		}		
				
		body .header-navbar .primary-menu li .sub-menu {
			background: {$edumel_submenu_bg_color};
		}	
		body .header-navbar .primary-menu li .sub-menu li a{
			color: {$edumel_submenu_text_color};
		}		
		body .header-navbar .primary-menu li .sub-menu li a:hover,
		body .header-navbar .primary-menu li .sub-menu li a:focus
		{
			color: {$edumel_submenu_hover_text_color};
		}

		body .progress-wrap svg.progress-circle path{
			stroke: {$edumel_scroll_border_color};
		}
		body .progress-wrap::before{
			background-image: linear-gradient(298deg, {$edumel_scroll_border_color}, {$edumel_scroll_border_color});
		}
		body .progress-wrap::after{

			color: {$edumel_scroll_up_text_color};
		}

		body .footer-3{
			background-color: {$edumel_footer_backgorund_color};
			color: {$edumel_footer_text_color};
		}
		
		body .footer .footer-widget .widget-title
		{
			color: {$edumel_footer_title_color};
		}
		
		body .footer .footer-widget p
		{
			color: {$edumel_footer_text_color};
		}

		body .footer .footer-widget a{
			color: {$edumel_footer_link_color};
		}		
		
		body .footer .footer-widget a:hover{
			color: {$edumel_footer_link_hover_color};
		}
		body .footer .footer-widget a::before{
			background: {$edumel_footer_link_hover_color};
		}
		body .footer-btm-links a:hover{
			color: {$edumel_footer_btmlink_hover_color};
		}

		body .footer-btm p{
			color: {$edumel_footer_text_color};
		}
			
		
		body .page-header .title-block ul li a,
		body .course-hover-content .price,
		body .text-style2,
		body .h1 a:hover, 
		body .h2 a:hover, 
		body .h3 a:hover, 
		body .h4 a:hover, 
		body .h5 a:hover, 
		body .h6 a:hover, 
		body h1 a:hover, 
		body h2 a:hover, 
		body h3 a:hover, 
		body h4 a:hover, 
		body h5 a:hover, 
		body h6 a:hover,
		body .intructor-social-links a:hover,
		body .intructor-social-links a:focus,
		body .header-btn .login:hover,
		body .header-category-menu li.has-submenu .sub-menu a:hover
		{
			color: {$edumel_theme_primary_color_opt};
		}
		body .video-section .video-content .video-icon,
		body .tooltip-style .course-price,
		body .course-style-3 .category,
		body .course-style-4 .course-price,
		body .course-style-5 .course-price,
		body .single-course .course-thumb .category,
		body .team-item .team-socials,		
		body .course-filter li.active a::before,
		body .course-filter li a:before,
		body .blog-sidebar .widget .widget-title::before, 
		body .blog-sidebar .widget .wp-block-heading::before,
		body .course-img .course-price2,
		body .rounded-btn:hover,
		body .blog-page-navigation .nav-links a:hover, 
		body .blog-page-navigation .nav-links span
		{
			background-color: {$edumel_theme_primary_color_opt};
		}

		body .btn-grey:hover,
		body .btn-grey-outline:hover,
		body .header-style-3 .header-user:hover,
		body .banner-form button{
			background-color: {$edumel_theme_primary_color_opt};
			border-color: {$edumel_theme_primary_color_opt};
		}
		
		body a:hover,
		body a:focus,
		body .page-header .title-block ul li a:hover,
		body .page-header .title-block ul li a:focus,
		body .subheading,
		body .testimonial-inner .quote-icon,
		body .course-meta i,
		body .course-style-3 .course-price,
		body .course-style-4 .author a:hover,
		body .course-meta i,
		body .single-course.style-2 .course-price,
		body .single-course .author a:hover,
		body .topbar-style-2 .header-btn i,
		body .text-color
		{
			color: {$edumel_theme_secondary_color_opt};
		}
		body .btn-main-2,
		body .banner-form button:hover,
		body .banner-form button:focus,
		body .video-section .video-content .video-icon:hover{
			border-color: {$edumel_theme_secondary_color_opt};
			background: {$edumel_theme_secondary_color_opt};
		}		
		
		body .btn-main-2:hover,
		body .btn-main-2:focus		{
			border-color: {$edumel_theme_primary_color_opt};
			background: {$edumel_theme_primary_color_opt};
		}
		body .form-submit #submit, 
		body .entry-content button, 
		body .entry-content input[type='button'], 
		body .entry-content input[type='reset'], 
		body .entry-content input[type='submit'],
		body .form-submit #submit:hover, 
		body .form-submit #submit:focus, 
		body .entry-content button:hover, 
		body .entry-content input[type='button']:hover, 
		body .entry-content input[type='reset']:hover, 
		body .entry-content input[type='submit']:hover,
		body .wp-block-search__button, 
		body .wp-block-search__button:hover, 
		body .wp-block-search__button:focus,
		body div.pagination a, 
		body div.pagination span,
		body .pagination a:hover, 
		body .pagination a:focus, 
		body div.pagination .page-numbers.current,
		body .tagcloud a:hover,
		body .tagcloud a:focus
		{
			background: {$edumel_theme_primary_color_opt};
			border-color: {$edumel_theme_primary_color_opt};
		}
		
		body textarea.form-control:focus{
			border-color: {$edumel_theme_primary_color_opt};
		}

	";
	
	//Add the above custom CSS via wp_add_inline_style
	wp_add_inline_style( 'edumel-custom-css', $edumel_custom_css ); //Pass the variable into the main style sheet ID
	}
	
  endif;
}

add_action( 'wp_enqueue_scripts', 'edumel_movers_custom_css'  ) ;