<?php

function edumel_header(){
	
	global $edumel;

	$edumel_header_style_opt					 = '';
	$edumel_preloader_opt					 = '';
	$edumel_homepage_opt					 = '';
	$edumel_header_btn_option					 = '';
	$edumel_header_btn_text					 = '';
	$edumel_header_btn_link					 = '';

	if ( isset( $edumel['edumel_preloader_opt'] ) ) {
		$edumel_preloader_opt = $edumel['edumel_preloader_opt'];
	}		
	
	if ( isset( $edumel['edumel_header_style_opt'] ) ) {
		$edumel_header_style_opt = $edumel['edumel_header_style_opt'];
	}	
	

	if ( isset( $edumel['edumel_homepage_opt'] ) ) {
		$edumel_homepage_opt = $edumel['edumel_homepage_opt'];
	}
	
	if ( isset( $edumel['edumel_header_btn_option'] ) ) {
		$edumel_header_btn_option = $edumel['edumel_header_btn_option'];
	}	
	
	if ( isset( $edumel['edumel_header_btn_text'] ) ) {
		$edumel_header_btn_text = $edumel['edumel_header_btn_text'];
	}		
	
	if ( isset( $edumel['edumel_header_btn_link'] ) ) {
		$edumel_header_btn_link = $edumel['edumel_header_btn_link'];
	}	


	$edumel_default_logo_img = get_template_directory_uri() . '/assets/images/dark-logo.png';
	$edumel_custom_logo_id = get_theme_mod( 'custom_logo' );
	$edumel_custom_logo = wp_get_attachment_image_src( $edumel_custom_logo_id , 'full' );	
	
	$edumel_header_style = get_post_meta(get_the_ID(), '_edumel_header_style', true);
?>

<?php if($edumel_preloader_opt == '1' && !$edumel_homepage_opt == '1') { ?>
		<!-- START PRELOADER -->
		<div class="preloader">
			<div class="status">
				<div class="status-mes"></div>
			</div>
		</div>
		 <!--  END PRELOADER -->		 
	
	<?php }elseif($edumel_preloader_opt == '1' && $edumel_homepage_opt == '1'){ ?>	

	<?php if(is_front_page()) {?>
		<!-- START PRELOADER -->
		<div class="preloader">
			<div class="status">
				<div class="status-mes"></div>
			</div>
		</div>
		<!-- END PRELOADER -->
	<?php } }
	
 	
		if(!empty($edumel_header_style)){
			if($edumel_header_style == '1'){
				edumel_header_one();			
			}elseif($edumel_header_style == '2'){
				edumel_header_two();			
			}elseif($edumel_header_style == '3'){
				edumel_header_three();
			}elseif($edumel_header_style == '4'){
				edumel_header_four();
			}

		}else{
			if($edumel_header_style_opt == '2'){
				edumel_header_two();			
			}elseif($edumel_header_style_opt == '3'){
				edumel_header_three();
			}elseif($edumel_header_style_opt == '4'){
				edumel_header_four();
			}else{
				edumel_header_one();	
			}		
		}
	
	
}


function edumel_mobile_menu() {?>
	<div class="mobile-menu">
		<div class="top-close-menu"><i class="fa fa-times" aria-hidden="true"></i></div>
		 <?php edumel_main_menu();?>
	</div>
<?php
}

function edumel_header_one(){
	global $edumel;
	
	$edumel_header_top_opt					 = '';
	$edumel_header_top_text					 = '';
	$edumel_header_call_info					 = '';
	$edumel_header_email_info					 = '';
	$edumel_header_log_reg_btn_text					 = '';
	$edumel_header_log_reg_btn_link					 = '';
	$edumel_header_social_option					 = '';
	
	if ( isset( $edumel['edumel_header_top_opt'] ) ) {
		$edumel_header_top_opt = $edumel['edumel_header_top_opt'];
	}	
	
	if ( isset( $edumel['edumel_header_top_text'] ) ) {
		$edumel_header_top_text = $edumel['edumel_header_top_text'];
	}		
	
	if ( isset( $edumel['edumel_header_call_info'] ) ) {
		$edumel_header_call_info = $edumel['edumel_header_call_info'];
	}		
		
	if ( isset( $edumel['edumel_header_email_info'] ) ) {
		$edumel_header_email_info = $edumel['edumel_header_email_info'];
	}		
	
	if ( isset( $edumel['edumel_header_log_reg_btn_text'] ) ) {
		$edumel_header_log_reg_btn_text = $edumel['edumel_header_log_reg_btn_text'];
	}	
	
	if ( isset( $edumel['edumel_header_log_reg_btn_link'] ) ) {
		$edumel_header_log_reg_btn_link = $edumel['edumel_header_log_reg_btn_link'];
	}		
	
	if ( isset( $edumel['edumel_header_social_option'] ) ) {
		$edumel_header_social_option = $edumel['edumel_header_social_option'];
	}	
	
	$edumel_default_logo_img = get_template_directory_uri() . '/assets/images/logo.png';
	$edumel_custom_logo_id = get_theme_mod( 'custom_logo' );
	$edumel_custom_logo = wp_get_attachment_image_src( $edumel_custom_logo_id , 'full' ); ?>

<header class="header-style-1"> 	
	<?php if($edumel_header_top_opt){
	?>
    <div class="header-topbar topbar-style-2">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-8 col-lg-6 col-md-12">
                   <div class="header-contact text-center text-lg-start d-none d-sm-block">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <span class="text-color me-2"><i class="fa fa-phone-alt"></i></span><a href="tel:<?php echo esc_attr($edumel_header_call_info);?>"> <?php echo esc_html($edumel_header_call_info);?></a>
                            </li>

                            <li class="list-inline-item">
                                <span class="text-color me-2"><i class="fa fa-envelope"></i></span><a href="malito:<?php echo esc_attr($edumel_header_email_info);?>"> <?php echo esc_html($edumel_header_email_info);?></a>
                            </li>
                        </ul>
                   </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-12">
                   <div class="d-sm-flex justify-content-center justify-content-lg-end">
                        <div class="header-socials text-center text-lg-end">
                            <ul class="list-inline">
							<?php foreach((array) $edumel_header_social_option as $social){ 
					
								$title = $url = '';

								if ( isset( $social['title'] ) )
									$title = $social['title'] ;

								if ( isset( $social['url'] ) )
									$url = $social['url'] ;
							
								?>
								
								<li class="list-inline-item"><a href="<?php echo esc_url($url);?>"><i class="<?php echo esc_attr($title);?>"></i></a></li>
								
								<?php } ?>	

                            </ul>
                        </div>

                        <div class="header-btn text-center text-lg-end">
							<?php if(!is_user_logged_in()){ ?>
                           <a href="<?php echo esc_url($edumel_header_log_reg_btn_link);?>"> <i class="fa fa-user-alt"></i> <?php echo esc_html($edumel_header_log_reg_btn_text);?></a>
							<?php }else{ echo esc_html__('You are Logged In' , 'edumel'); }?>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>

	<?php } ?>
	

    <div class="header-navbar navbar-sticky">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="site-logo">
					<?php if(get_custom_logo()){ ?>				  
						<a href="<?php echo esc_url(home_url('/'));?>"><img src="<?php echo esc_url($edumel_custom_logo[0]);?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>
							<?php	}else { ?>
						 <a href="<?php echo esc_url(home_url('/'));?>"><img src="<?php echo esc_url($edumel_default_logo_img);?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>
					<?php } ?>
                </div>

                <div class="offcanvas-icon d-block d-lg-none">
                    <a href="#" class="nav-toggler"><i class="fal fa-bars"></i></a> 
                </div>

                <div class="header-category-menu d-none d-xl-block">
                    <ul>
                        <li class="has-submenu">
                            <a href="#"><i class="fa fa-th me-2"></i><?php esc_html_e('Categories' , 'edumel');?></a>
                            <ul class="sub-menu">
							<?php
							   $args = array(
								   'taxonomy' => 'course-category',
								   'orderby' => 'name',
								   'order'   => 'ASC',
								   'number' => '10'
							   );

							   $course_category = get_categories($args);

							   foreach($course_category as $cat) {
								   

							?>

								<li>
									<a href="<?php echo get_category_link( $cat->term_id ) ?>">
										<?php echo esc_html($cat->name); ?>
									</a>
								</li>
						  
							<?php
							   } ?>
                                

                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="header-search-bar d-none d-xl-block ms-4">
                    <?php edumel_header_search_form()?>
                 </div>
        
                <nav id="navbarMenu" class="site-navbar ms-auto ">
					<?php edumel_main_menu();?>
                    <a href="#" class="nav-close"><i class="fal fa-times"></i></a>
                </nav>
            </div>
        </div>
    </div>
</header>
<!--====== Header End ======-->	
<?php 	
}

function edumel_header_two(){ 

	global $edumel;
	
	$edumel_header_top_text					 = '';
	$edumel_header_account_btn_text					 = '';
	$edumel_header_account_btn_link					 = '';

	if ( isset( $edumel['edumel_header_top_text'] ) ) {
		$edumel_header_top_text = $edumel['edumel_header_top_text'];
	}	
	
	if ( isset( $edumel['edumel_header_account_btn_text'] ) ) {
		$edumel_header_account_btn_text = $edumel['edumel_header_account_btn_text'];
	}
	
	if ( isset( $edumel['edumel_header_account_btn_link'] ) ) {
		$edumel_header_account_btn_link = $edumel['edumel_header_account_btn_link'];
	}
	

	$edumel_default_logo_img = get_template_directory_uri() . '/assets/images/logo.png';
	$edumel_custom_logo_id = get_theme_mod( 'custom_logo' );
	$edumel_custom_logo = wp_get_attachment_image_src( $edumel_custom_logo_id , 'full' );
?>

<header class="header-style-2">
    <div class="header-topbar topbar-noticebar">
        <div class="container-fluid container-padding">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-8">
                   <div class="header-notice text-center">
                       <?php echo edumel_wp_kses($edumel_header_top_text);?>
                   </div>
                </div>              
            </div>
        </div>
    </div>

    <div class="header-navbar menu-2 navbar-sticky">
        <div class="container-fluid container-padding">
            <div class="d-flex align-items-center justify-content-between">
                <div class="site-logo">
					<?php if(get_custom_logo()){ ?>				  
						<a href="<?php echo esc_url(home_url('/'));?>"><img src="<?php echo esc_url($edumel_custom_logo[0]);?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>
							<?php	}else { ?>
						 <a href="<?php echo esc_url(home_url('/'));?>"><img src="<?php echo esc_url($edumel_default_logo_img);?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>
					<?php } ?>
                </div>

                <div class="header-search-bar d-none d-xl-block">
					<?php edumel_header_search_form()?>
                </div>

                <div class="offcanvas-icon d-block d-lg-none">
                    <a href="#" class="nav-toggler"><i class="fal fa-bars"></i></a> 
                </div>
        
                <nav id="navbarMenu" class="site-navbar ms-auto">
                    <?php edumel_main_menu();?>

                    <a href="#" class="nav-close"><i class="fal fa-times"></i></a>
                </nav>
				<?php if($edumel_header_account_btn_link){ ?>
                <div class="header-btn border-left-0 ms-3 d-none d-lg-block">
                    <a href="<?php echo esc_url($edumel_header_account_btn_link);?>" class="btn btn-grey-outline btn-sm-2 rounded"><i class="fal fa-user me-2"></i><?php echo esc_html($edumel_header_account_btn_text);?></a>
                </div>
				<?php } ?>
            </div>
        </div>
    </div>
</header>
<?php 

}

function edumel_header_three(){ 

	global $edumel;
	
	$edumel_header_social_option					 = '';
	$edumel_header_top_text					 = '';
	$edumel_header_account_btn_link					 = '';

	if ( isset( $edumel['edumel_header_social_option'] ) ) {
		$edumel_header_social_option = $edumel['edumel_header_social_option'];
	}	

	if ( isset( $edumel['edumel_header_top_text'] ) ) {
		$edumel_header_top_text = $edumel['edumel_header_top_text'];
	}
	
	if ( isset( $edumel['edumel_header_account_btn_link'] ) ) {
		$edumel_header_account_btn_link = $edumel['edumel_header_account_btn_link'];
	}
	

	
	$edumel_default_logo_img = get_template_directory_uri() . '/assets/images/logo.png';
	$edumel_custom_logo_id = get_theme_mod( 'custom_logo' );
	$edumel_custom_logo = wp_get_attachment_image_src( $edumel_custom_logo_id , 'full' );
?>

<header class="header-style-3">
    <div class="header-topbar topbar-noticebar">
        <div class="container-fluid container-padding">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-8">
                   <div class="header-notice text-center">
                        <?php echo edumel_wp_kses($edumel_header_top_text);?>
                   </div>
                </div>              
            </div>
        </div>
    </div>

    <div class="menu-wrapper">
        <div class="header-mid">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-4 col-lg-4">
                        <div class="header-socials d-none d-lg-block">
                            <ul class="list-inline">
							<?php foreach((array) $edumel_header_social_option as $social){ 
					
								$title = $url = '';

								if ( isset( $social['title'] ) )
									$title = $social['title'] ;

								if ( isset( $social['url'] ) )
									$url = $social['url'] ;
							
								?>
								
								<li class="list-inline-item"><a href="<?php echo esc_url($url);?>"><i class="<?php echo esc_attr($title);?>"></i></a></li>
								
								<?php } ?>
                            </ul>
                        </div>
                    </div>

                    <div class="col-5 col-xl-3 col-lg-3 col-sm-4 col-md-3">
                        <div class="site-logo">
							<?php if(get_custom_logo()){ ?>				  
								<a href="<?php echo esc_url(home_url('/'));?>"><img src="<?php echo esc_url($edumel_custom_logo[0]);?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>
									<?php	}else { ?>
								 <a href="<?php echo esc_url(home_url('/'));?>"><img src="<?php echo esc_url($edumel_default_logo_img);?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>
							<?php } ?>
                        </div>
                    </div>

                    <div class="col-7 col-xl-4 col-lg-4 col-sm-8">
                        <div class="offcanvas-icon d-block d-lg-none text-end">
                            <a href="#" class="nav-toggler"><i class="fal fa-bars"></i></a> 
                        </div>

                        <div class="float-end d-none d-lg-block">
                            <div class="header-info d-flex align-items-center">
                                <div class="header-search header_search_btn">
                                    <a href="#"><i class="fa fa-search"></i></a>
                                </div>
                               
                                <div class="header-user ms-4">
                                    <a href="<?php echo esc_url($edumel_header_account_btn_link);?>" id="user-icon"><i class="fa fa-user"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-navbar menu-center style-1">
            <div class="container">
                <nav id="navbarMenu" class="site-navbar">
				 <?php edumel_main_menu();?>	

                    <a href="#" class="nav-close"><i class="fal fa-times"></i></a>
                </nav>
            </div>
        </div>
    </div>
</header>

<?php edumel_header_course_search(); ?>

<?php	

}


function edumel_header_four(){ 

	global $edumel;

	$edumel_header_top_opt					 = '';
	$edumel_header_loc_info					 = '';
	$edumel_header_social_option					 = '';
	$edumel_header_log_btn_text					 = '';
	$edumel_header_log_btn_link					 = '';
	$edumel_header_sign_btn_text					 = '';
	$edumel_header_sign_btn_link					 = '';

	if ( isset( $edumel['edumel_header_top_opt'] ) ) {
		$edumel_header_top_opt = $edumel['edumel_header_top_opt'];
	}

	if ( isset( $edumel['edumel_header_loc_info'] ) ) {
		$edumel_header_loc_info = $edumel['edumel_header_loc_info'];
	}
	
	if ( isset( $edumel['edumel_header_social_option'] ) ) {
		$edumel_header_social_option = $edumel['edumel_header_social_option'];
	}		

	if ( isset( $edumel['edumel_header_log_btn_text'] ) ) {
		$edumel_header_log_btn_text = $edumel['edumel_header_log_btn_text'];
	}
	
	if ( isset( $edumel['edumel_header_log_btn_link'] ) ) {
		$edumel_header_log_btn_link = $edumel['edumel_header_log_btn_link'];
	}	
	
	if ( isset( $edumel['edumel_header_sign_btn_text'] ) ) {
		$edumel_header_sign_btn_text = $edumel['edumel_header_sign_btn_text'];
	}	
	
	if ( isset( $edumel['edumel_header_sign_btn_link'] ) ) {
		$edumel_header_sign_btn_link = $edumel['edumel_header_sign_btn_link'];
	}
	
	
	$edumel_default_logo_img = get_template_directory_uri() . '/assets/images/logo.png';
	$edumel_custom_logo_id = get_theme_mod( 'custom_logo' );
	$edumel_custom_logo = wp_get_attachment_image_src( $edumel_custom_logo_id , 'full' );


if($edumel_header_top_opt){

	?>
<header class="header-style-1"> 
    <div class="header-topbar topbar-style-1">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-xl-8 col-lg-8 col-sm-6">
                   <div class="header-contact text-center text-sm-start text-lg-start">
                        <a href="#"><?php echo edumel_wp_kses($edumel_header_loc_info);?></a>
                   </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-sm-6">
                    <div class="header-socials text-center text-lg-end">
                        <ul class="list-inline">
						<?php foreach((array) $edumel_header_social_option as $social){ 
				
							$title = $url = '';

							if ( isset( $social['title'] ) )
								$title = $social['title'] ;

							if ( isset( $social['url'] ) )
								$url = $social['url'] ;
						
							?>
							
							<li class="list-inline-item"><a href="<?php echo esc_url($url);?>"><i class="<?php echo esc_attr($title);?>"></i></a></li>
							
							<?php } ?>
						</ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
	<?php } ?>



    <div class="header-navbar navbar-sticky">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="site-logo">
					<?php if(get_custom_logo()){ ?>				  
						<a href="<?php echo esc_url(home_url('/'));?>"><img src="<?php echo esc_url($edumel_custom_logo[0]);?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>
							<?php	}else { ?>
						 <a href="<?php echo esc_url(home_url('/'));?>"><img src="<?php echo esc_url($edumel_default_logo_img);?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>
					<?php } ?>
                </div>

                <div class="offcanvas-icon d-block d-lg-none">
                    <a href="#" class="nav-toggler"><i class="fal fa-bars"></i></a> 
                </div>

                <div class="header-category-menu d-none d-xl-block">
                    <ul>
                        <li class="has-submenu">
                            <a href="#"><i class="fa fa-th me-2"></i><?php esc_html_e('Categories' , 'edumel');?></a>
							<ul class="sub-menu">
							<?php
							   $args = array(
								   'taxonomy' => 'course-category',
								   'orderby' => 'name',
								   'order'   => 'ASC',
								   'number' => '10'
							   );

							   $course_category = get_categories($args);

							   foreach($course_category as $cat) {
								   

							?>

								<li>
									<a href="<?php echo get_category_link( $cat->term_id ) ?>">
										<?php echo esc_html($cat->name); ?>
									</a>
								</li>
						  
							<?php
							   } ?>
                                

                            </ul>
                        </li>
                    </ul>
                </div>
        
                <nav id="navbarMenu" class="site-navbar ms-auto">
					<?php edumel_main_menu();?>	

                    <a href="#" class="nav-close"><i class="fal fa-times"></i></a>
                </nav>
				<?php if($edumel_header_log_btn_link && $edumel_header_sign_btn_link){ ?>
                <div class="header-btn d-none d-xl-block">
					<?php if(!is_user_logged_in()){ ?>
                    <a href="<?php echo esc_url($edumel_header_log_btn_link);?>" class="login"><?php echo esc_html($edumel_header_log_btn_text);?></a>
                    <a href="<?php echo esc_url($edumel_header_sign_btn_link);?>" class="btn btn-main-2 btn-sm-2 rounded"><?php echo esc_html($edumel_header_sign_btn_text);?></a>
					<?php }else{ echo esc_html__('You Are Logged In' , 'edumel');} ?>
                </div>
				<?php } ?>
            </div>
        </div>
    </div>
</header>
<?php	

}

function edumel_footer(){
	global $edumel;

	$edumel_scroll_switch					 = '';

	if ( isset( $edumel['edumel_scroll_switch'] ) ) {
		$edumel_scroll_switch = $edumel['edumel_scroll_switch'];
	}	

		edumel_footer_one();		
		
	 if($edumel_scroll_switch == true){ ?>
	 
	<!-- Start progress-wrap -->
	<div class="progress-wrap">
		<svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
			<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
		</svg>
	</div>
	<!-- End progress-wrap -->
	
	<?php } 	

}


function edumel_footer_one(){
	global $edumel;

	$edumel_footer_top_opt					 = '';
	$edumel_copyright_text					 = '';

	if ( isset( $edumel['edumel_footer_top_opt'] ) ) {
		$edumel_footer_top_opt = $edumel['edumel_footer_top_opt'];
	}		

	if ( isset( $edumel['edumel_copyright_text'] ) ) {
		$edumel_copyright_text = $edumel['edumel_copyright_text'];
	}		
	
	$edumel_footer_top_padding = get_post_meta(get_the_ID(), '_edumel_footer_top_padding', true);

?>


<!-- Footer section start -->
<section class="footer footer-3 <?php if($edumel_footer_top_padding == '1'){ echo esc_attr('pt-250');}?>">
<?php if($edumel_footer_top_opt == true) : ?>
	<div class="footer-mid <?php if($edumel_footer_top_padding == '1'){ echo esc_attr('pt0');}?>">
		<div class="container">
			<div class="row">
				<div class="col-xl-3 col-sm-8 me-auto">
					<div class="widget footer-widget mb-5 mb-lg-0">
						<?php dynamic_sidebar( 'sidebar-2' ); ?>
					</div>
				</div>

				<?php dynamic_sidebar( 'sidebar-3' ); ?>
			</div>
		</div>
	</div>
<?php endif; ?>
	<div class="footer-btm">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-xl-6 col-sm-12 col-lg-6">
					<p class="mb-0 copyright text-sm-center text-lg-start">
					
						<?php
						if($edumel_copyright_text){
							echo edumel_wp_kses($edumel_copyright_text);
						}else{ ?>							
							<?php esc_html_e('© Copyright Edumel Theme All rights reserved.Crafted by pxelCode' , 'edumel');?>
						<?php } ?>						
					</p>
				</div>

				<div class="col-xl-6 col-sm-12 col-lg-6">
					<div class="footer-btm-links footer-menu text-start text-sm-center text-lg-end">
						<?php edumel_footer_menu();?>
					</div>
				</div>
			</div>
		</div>
	</div>

</section>
<!-- Footer section End -->
<?php	
}


function edumel_banner_shop_text(){
	global $edumel;
	$edumel_shop_title						 = '';

	if ( isset( $edumel['edumel_shop_title']) ) {
		$edumel_shop_title = $edumel['edumel_shop_title'];
	}
	
	if($edumel_shop_title){
		echo esc_html($edumel_shop_title);
	}else{
		echo esc_html__('Shop' , 'edumel');
	}
}

function edumel_banner_blog_text(){
	global $edumel;
	$edumel_blog_title						 = '';

	if ( isset( $edumel['edumel_blog_title']) ) {
		$edumel_blog_title = $edumel['edumel_blog_title'];
	}
	
	if($edumel_blog_title){
		echo esc_html($edumel_blog_title);
	}else{
		echo esc_html__('Blog' , 'edumel');
	}
}


function edumel_banner_home_text(){
	global $edumel;
	$edumel_home_title						 = '';

	if ( isset( $edumel['edumel_home_title']) ) {
		$edumel_home_title = $edumel['edumel_home_title'];
	}
	
	if($edumel_home_title){
		echo esc_html($edumel_home_title);
	}else{
		echo esc_html__('Home' , 'edumel');
	}
}


function edumel_banner_404_title(){
	global $edumel;
	$edumel_404_title_text						 = '';

	if ( isset( $edumel['edumel_404_title_text']) ) {
		$edumel_404_title_text = $edumel['edumel_404_title_text'];
	}
	
	if($edumel_404_title_text){
		echo esc_html($edumel_404_title_text);
	}else{
		echo esc_html__('404 Error' , 'edumel');
	}
}



function edumel_shop_banner(){ 

?>

<section class="page-header" style="background-image: url('<?php echo edumel_banner_img_url_option();?>');">
  <div class="container">
	<div class="row justify-content-center">
	  <div class="col-lg-8 col-xl-8">
		<div class="title-block">
		  <h1><?php edumel_banner_shop_text();?></h1>
		  <ul class="list-inline mb-0">
			<li class="list-inline-item">
			  <a href="<?php echo esc_url(home_url('/'));?>"><?php edumel_banner_home_text();?></a>
			</li>
			 <li class="list-inline-item">/</li>
			<li class="list-inline-item">
				<?php edumel_banner_shop_text();?>
			</li>
		  </ul>
		</div>
	  </div>
	</div>
  </div>
</section>
	
<?php }

function edumel_single_product_banner(){ 
$shop_url = get_permalink( wc_get_page_id( 'shop' ) );
?>

<section class="page-header" style="background-image: url('<?php echo edumel_banner_img_url_option();?>');">
  <div class="container">
	<div class="row justify-content-center">
	  <div class="col-lg-8 col-xl-8">
		<div class="title-block">
		  <h1><?php the_title();?></h1>
		  <ul class="list-inline mb-0">
			<li class="list-inline-item">
			  <a href="<?php echo esc_url(home_url('/'));?>"><?php edumel_banner_home_text();?></a>
			</li>			
			<li class="list-inline-item">/</li>
			<li class="list-inline-item">
			  <a href="<?php echo esc_url($shop_url);?>"><?php edumel_banner_shop_text();?></a>
			</li>
			 <li class="list-inline-item">/</li>
			<li class="list-inline-item">
				<?php the_title();?>
			</li>
		  </ul>
		</div>
	  </div>
	</div>
  </div>
</section>
	
<?php }


function edumel_banner_img_url_option(){
global $edumel;
$edumel_banner_img_opt						 = '';

if ( isset( $edumel['edumel_banner_img_opt']['url'] ) ) {
	$edumel_banner_img_opt = $edumel['edumel_banner_img_opt']['url'];
}

$edumel_meta_upload_bannar = get_post_meta(get_the_ID(), '_edumel_home_banner_img', true);
$edumel_default_bannar_image = get_template_directory_uri() . '/assets/images/bg/page-title.jpg';
	
	 if($edumel_meta_upload_bannar){
		 echo esc_url($edumel_meta_upload_bannar);
		}elseif($edumel_banner_img_opt){
			echo esc_url($edumel_banner_img_opt);
		}else{ 
		echo esc_url($edumel_default_bannar_image);
	}
}

function edumel_blog_banner(){ 

?>

<section class="page-header" style="background-image: url('<?php echo edumel_banner_img_url_option();?>');">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-8">
          <div class="title-block">
            <h1><?php edumel_banner_blog_text();?></h1>
            <ul class="header-bradcrumb justify-content-center">
              <li><a href="<?php echo esc_url(home_url('/'));?>"><?php edumel_banner_home_text();?></a></li>
              <li class="active" aria-current="page"><?php edumel_banner_blog_text();?></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</section>

<?php }

function edumel_single_banner(){ 

?>
<section class="page-header" style="background-image: url('<?php echo edumel_banner_img_url_option();?>');">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-8">
          <div class="title-block">
            <h1>
				<?php the_title();?>				
			</h1>
            <ul class="header-bradcrumb justify-content-center">
              <li><a href="<?php echo esc_url(home_url('/'));?>"><?php edumel_banner_home_text();?></a></li>
              <li class="active" aria-current="page">				
				<?php the_title();?>
			  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</section>


<?php }

function edumel_archive_banner(){ 
	global $edumel;
	$edumel_archive_title						 = '';

	if ( isset( $edumel['edumel_archive_title']) ) {
		$edumel_archive_title = $edumel['edumel_archive_title'];
	}
?>
<section class="page-header" style="background-image: url('<?php echo edumel_banner_img_url_option();?>');">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-8">
          <div class="title-block">
            <h1>
				<?php
					if($edumel_archive_title){
						echo esc_html($edumel_archive_title);
					}else{
						echo esc_html__('Archive' , 'edumel');
					}
				?>			
			</h1>
            <ul class="header-bradcrumb justify-content-center">
              <li><a href="<?php echo esc_url(home_url('/'));?>"><?php edumel_banner_home_text();?></a></li>
              <li class="active" aria-current="page">				
				<?php the_archive_title(); ?>
			  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</section>


<?php }

function edumel_search_banner(){ 
	global $edumel;
	$edumel_search__title						 = '';

	if ( isset( $edumel['edumel_search__title']) ) {
		$edumel_search__title = $edumel['edumel_search__title'];
	}
?>


<section class="page-header" style="background-image: url('<?php echo edumel_banner_img_url_option();?>');">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-8">
          <div class="title-block">
            <h1>
				<?php
					if($edumel_search__title){
						echo esc_html($edumel_search__title);
					}else{
						echo esc_html__('Search Result' , 'edumel');
					}
				?>				
			</h1>
            <ul class="header-bradcrumb justify-content-center">
              <li><a href="<?php echo esc_url(home_url('/'));?>"><?php edumel_banner_home_text();?></a></li>
              <li class="active" aria-current="page">				
				<?php
					/* translators: %s: search query. */
					printf( esc_html__( 'Search Results for: %s', 'edumel' ), '<span>' . get_search_query() . '</span>' );
				?>
			  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</section>



<?php }


function edumel_course_banner(){ 
	global $edumel;
	$edumel_course_title						 = '';

	if ( isset( $edumel['edumel_course_title']) ) {
		$edumel_course_title = $edumel['edumel_course_title'];
	}
?>


<section class="page-header" style="background-image: url('<?php echo edumel_banner_img_url_option();?>');">
  <div class="container">
	<div class="row justify-content-center">
	  <div class="col-lg-8 col-xl-8">
		<div class="title-block">
		  <h1>
			<?php
				if($edumel_course_title){
					echo esc_html($edumel_course_title);
				}elseif(is_page()){
					
				}else{
					echo esc_html__('Course' , 'edumel');
				}
			?>			  
		  </h1>
		  <ul class="list-inline mb-0">
			<li class="list-inline-item">
			  <a href="<?php echo esc_url(home_url('/'));?>"><?php edumel_banner_home_text();?></a>
			</li>
			<li class="list-inline-item">
				<?php
				if($edumel_course_title){
					echo esc_html($edumel_course_title);
				}else{
					echo esc_html__('Course' , 'edumel');
				}
				?>
			</li>
		  </ul>
		</div>
	  </div>
	</div>
  </div>
</section>

<?php }

function edumel_single_course_banner(){ 
	
	$edumel_course_link = get_post_type_archive_link(get_post_type());
	
	global $edumel;
	$edumel_course_title						 = '';

	if ( isset( $edumel['edumel_course_title']) ) {
		$edumel_course_title = $edumel['edumel_course_title'];
	}	
?>

<section class="page-header" style="background-image: url('<?php echo edumel_banner_img_url_option();?>');">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-xl-8">
        <div class="title-block">
          <h1><?php the_title();?></h1>
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a href="<?php echo esc_url(home_url('/'));?>"><?php edumel_banner_home_text();?></a>
            </li>
            <li class="list-inline-item"><a href="<?php echo esc_url($edumel_course_link);?>"><?php 
				if($edumel_course_title){
					echo esc_html($edumel_course_title);
				}else{
					esc_html_e('Courses' , 'edumel');
				}
			
			
			?></a></li>
			<li class="list-inline-item">
                <?php the_title();?>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<?php }

function edumel_404_body_title(){
	global $edumel;
	$edumel_404_page_title						 = '';

	if ( isset( $edumel['edumel_404_page_title']) ) {
		$edumel_404_page_title = $edumel['edumel_404_page_title'];
	}
	
	if($edumel_404_page_title){
		echo esc_html($edumel_404_page_title);
	}else{
		echo esc_html__('404' , 'edumel');
	}	
}

function edumel_404_body_subtitle(){
	global $edumel;
	$edumel_404_page_subtitle						 = '';

	if ( isset( $edumel['edumel_404_page_subtitle']) ) {
		$edumel_404_page_subtitle = $edumel['edumel_404_page_subtitle'];
	}
	
	if($edumel_404_page_subtitle){
		echo esc_html($edumel_404_page_subtitle);
	}else{
		echo esc_html__('Try using the button below to go to main page of the site' , 'edumel');
	}	
}

function edumel_404_body_content(){
	global $edumel;
	
	$edumel_404_page_descrption						 = '';

	if ( isset( $edumel['edumel_404_page_descrption']) ) {
		$edumel_404_page_descrption = $edumel['edumel_404_page_descrption'];
	}
	
	if($edumel_404_page_descrption){
		echo esc_html($edumel_404_page_descrption);
	}else{
		echo esc_html__('It looks like nothing was found at this location. Maybe try one of the links below or a search?' , 'edumel');
	}	
}

function edumel_404_content(){
	global $edumel;
	
	$edumel_404_btn_text						 = '';

	if ( isset( $edumel['edumel_404_btn_text']) ) {
		$edumel_404_btn_text = $edumel['edumel_404_btn_text'];
	}	
	
?>

<div class="page-wrapper 404_page">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 mx-auto">
              <div class="error-page text-center error-404 not-found">
                 <div class="error-header">
                    <h2><strong><?php edumel_404_body_title();?></strong></h2>
                 </div>
                 <div class="error-message">
                    <h3><?php edumel_404_body_subtitle();?></h3>
                 </div>
                 
                 <div class="error-content">
                    <?php edumel_404_body_content(); ?><br>
                    <a href="<?php echo esc_url(home_url('/'));?>" class="btn btn-main"><?php if($edumel_404_btn_text){ echo esc_html($edumel_404_btn_text);}else{ esc_html_e('Back To Home' , 'edumel');} ?></a>
                 </div>
              </div>
           </div>
        </div>
    </div><!-- #main -->
</div>	

	<?php
}