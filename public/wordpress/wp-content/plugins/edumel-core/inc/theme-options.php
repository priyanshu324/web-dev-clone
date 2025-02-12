<?php
    /**
     * ReduxFramework Sample Config File
     * For full documentation, please visit: http://docs.reduxframework.com/
     */

    if ( ! class_exists( 'Redux' ) ) {
        return;
    }


    // This is your option name where all the Redux data is stored.
    $opt_name = "edumel";

    // This line is only for altering the demo. Can be easily removed.
    $opt_name = apply_filters( 'edumel/opt_name', $opt_name );

    /*
     *
     * --> Used within different fields. Simply examples. Search for ACTUAL DECLARATION for field examples
     *
     */


    /**
     * ---> SET ARGUMENTS
     * All the possible arguments for Redux.
     * For full documentation on arguments, please refer to: https://github.com/ReduxFramework/ReduxFramework/wiki/Arguments
     * */

    $theme = wp_get_theme(); // For use with some settings. Not necessary.

    $args = array(
        // TYPICAL -> Change these values as you need/desire
        'opt_name'             => $opt_name,

         'disable_tracking' => true,
        // This is where your data is stored in the database and also becomes your global variable name.
        'display_name'         => $theme->get( 'Name' ),
        // Name that appears at the top of your panel
        'display_version'      => $theme->get( 'Version' ),
        // Version that appears at the top of your panel
        'menu_type'            => 'menu',
        //Specify if the admin menu should appear or not. Options: menu or submenu (Under appearance only)
        'allow_sub_menu'       => true,
        // Show the sections below the admin menu item or not
        'menu_title'           => esc_html__( 'Edumel Options', 'edumel' ),
        'page_title'           => esc_html__( 'Edumel Options', 'edumel' ),
        // You will need to generate a Google API key to use this feature.
        // Please visit: https://developers.google.com/fonts/docs/developer_api#Auth
        'google_api_key'       => '',
        // Set it you want google fonts to update weekly. A google_api_key value is required.
        'google_update_weekly' => false,
        // Must be defined to add google fonts to the typography module
        'async_typography'     => true,
        // Use a asynchronous font on the front end or font string
        //'disable_google_fonts_link' => true,                    // Disable this in case you want to create your own google fonts loader
        'admin_bar'            => true,
        // Show the panel pages on the admin bar
        'admin_bar_icon'       => 'dashicons-portfolio',
        // Choose an icon for the admin bar menu
        'admin_bar_priority'   => 50,
        // Choose an priority for the admin bar menu
        'global_variable'      => '',
        // Set a different name for your global variable other than the opt_name
        'dev_mode'             => false,
        // Show the time the page took to load, etc
        'update_notice'        => false,
        // If dev_mode is enabled, will notify developer of updated versions available in the GitHub Repo
        'customizer'           => false,
        // Enable basic customizer support
        //'open_expanded'     => true,                    // Allow you to start the panel in an expanded way initially.
        //'disable_save_warn' => true,                    // Disable the save warning when a user changes a field

        // OPTIONAL -> Give you extra features
        'page_priority'        => 3,
        // Order where the menu appears in the admin area. If there is any conflict, something will not show. Warning.
        'page_parent'          => 'themes.php',
        // For a full list of options, visit: http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters
        'page_permissions'     => 'manage_options',
        // Permissions needed to access the options panel.
        'menu_icon'            => '',
        // Specify a custom URL to an icon
        'last_tab'             => '',
        // Force your panel to always open to a specific tab (by id)
        'page_icon'            => 'icon-themes',
        // Icon displayed in the admin panel next to your menu_title
        'page_slug'            => '',
        // Page slug used to denote the panel, will be based off page title then menu title then opt_name if not provided
        'save_defaults'        => true,
        // On load save the defaults to DB before user clicks save or not
        'default_show'         => false,
        // If true, shows the default value next to each field that is not the default value.
        'default_mark'         => '',
        // What to print by the field's title if the value shown is default. Suggested: *
        'show_import_export'   => true,
        // Shows the Import/Export panel when not used as a field.

        // CAREFUL -> These options are for advanced use only
        'transient_time'       => 60 * MINUTE_IN_SECONDS,
        'output'               => true,
        // Global shut-off for dynamic CSS output by the framework. Will also disable google fonts output
        'output_tag'           => true,
        // Allows dynamic CSS to be generated for customizer and google fonts, but stops the dynamic CSS from going to the head
        // 'footer_credit'     => '',                   // Disable the footer credit of Redux. Please leave if you can help it.

        // FUTURE -> Not in use yet, but reserved or partially implemented. Use at your own risk.
        'database'             => '',
        // possible: options, theme_mods, theme_mods_expanded, transient. Not fully functional, warning!
        'use_cdn'              => true,
        // If you prefer not to use the CDN for Select2, Ace Editor, and others, you may download the Redux Vendor Support plugin yourself and run locally or embed it in your code.

    );

 

    // Panel Intro text -> before the form
    if ( ! isset( $args['global_variable'] ) || $args['global_variable'] !== false ) {
        if ( ! empty( $args['global_variable'] ) ) {
            $v = $args['global_variable'];
        } else {
            $v = str_replace( '-', '_', $args['opt_name'] );
        }
        $args['intro_text'] = sprintf( esc_html__( '', 'edumel' ), $v );
    } else {
        $args['intro_text'] = esc_html__( '', 'edumel' );
    }

    // Add content after the form.
    $args['footer_text'] = esc_html__( '', 'edumel' );

    Redux::setArgs( $opt_name, $args );

    /*
     * ---> END ARGUMENTS
     */


    // -> START Basic Fields

    Redux::setSection( $opt_name, array(
        'title'            => esc_html__( 'General Settings', 'edumel' ),
        'id'               => 'edumel-general-setting',
        'customizer_width' => '400px',
        'fields'           => array(

			array(
                'id'       => 'edumel_header_opt',
                'type'     => 'info',
                'style'     => 'success',
                'title'    => esc_html__('Header Section', 'edumel'),
            ), 
			
            array(
                'id'       => 'edumel_header_style_opt',
                'type'     => 'select',
                'title'    => esc_html__('Header Style', 'edumel'),
                'subtitle' => esc_html__('Select option here', 'edumel'),
				'options'  => array(
					'1' => 'One',
					'2' => 'Two',
					'3' => 'Three',
					'4' => 'Four',
				),
				'default'  => '1',
            ), 
			
            array(
                'id'       => 'edumel_header_top_opt',
                'type'     => 'switch',
                'title'    => esc_html__('Header Top Option', 'edumel'),
                'subtitle' => esc_html__('If yes then click the checkbox.', 'edumel'),
                'default'  => '1'// 1 = on | 0 = off
            ), 	
			
			array(
                'id'       => 'edumel_header_top_text',
                'type'             => 'textarea',
                'title'            => esc_html__('Header Top Text', 'edumel'), 
				'default'  => 'Are you interested in Joining program? <a href="#">Contact me.</a>',
                'subtitle'         => esc_html__('write text here', 'edumel'),
				'required' => array( 'edumel_header_top_opt', '=', '1' ),
            ),		
			
			array(
                'id'       => 'edumel_header_call_info',
                'type'             => 'text',
                'title'            => esc_html__('Header Call Text', 'edumel'), 
				'default'  => ' +(354) 6800 37849 ',
                'subtitle'         => esc_html__('write text here', 'edumel'),
				'required' => array( 'edumel_header_top_opt', '=', '1' ),
            ),		
			
			array(
                'id'       => 'edumel_header_email_info',
                'type'             => 'text',
                'title'            => esc_html__('Header Email Text', 'edumel'), 
				'default'  => 'hello@edumel.com',
                'subtitle'         => esc_html__('write text here', 'edumel'),
				'required' => array( 'edumel_header_top_opt', '=', '1' ),
            ),		
			
			array(
                'id'       => 'edumel_header_loc_info',
                'type'             => 'textarea',
                'title'            => esc_html__('Header Location', 'edumel'), 
				'default'  => '1010 Moon ave, New York, NY US',
                'subtitle'         => esc_html__('write text here', 'edumel'),
				'required' => array( 'edumel_header_top_opt', '=', '1' ),
            ),			
			
			array(
                'id'       => 'edumel_header_log_btn_text',
                'type'             => 'text',
                'title'            => esc_html__('Header Login Button Text', 'edumel'), 
				'default'  => 'Login',
                'subtitle'         => esc_html__('write text here', 'edumel'),
            ),
			
			array(
                'id'       => 'edumel_header_log_btn_link',
                'type'             => 'text',
                'title'            => esc_html__('Login Button Link', 'edumel'), 
				'default'  => '#',
                'subtitle'         => esc_html__('enter link here', 'edumel'),
            ),			
			
			array(
                'id'       => 'edumel_header_sign_btn_text',
                'type'             => 'text',
                'title'            => esc_html__('Sign Up Button Text', 'edumel'), 
				'default'  => 'Sign Up',
                'subtitle'         => esc_html__('write text here', 'edumel'),
            ),			
			
			array(
                'id'       => 'edumel_header_sign_btn_link',
                'type'             => 'text',
                'title'            => esc_html__('Sign Up Button Link', 'edumel'), 
				'default'  => '#',
                'subtitle'         => esc_html__('write text here', 'edumel'),
            ),			
			
			array(
                'id'       => 'edumel_header_log_reg_btn_text',
                'type'             => 'text',
                'title'            => esc_html__('Login / Registraion Button Text', 'edumel'), 
				'default'  => 'Login/Register',
                'subtitle'         => esc_html__('write text here', 'edumel'),
            ),		
			
			array(
                'id'       => 'edumel_header_log_reg_btn_link',
                'type'             => 'text',
                'title'            => esc_html__('Login / Registraion Button Link', 'edumel'), 
				'default'  => '#',
                'subtitle'         => esc_html__('write text here', 'edumel'),
            ),		

			
			array(
                'id'       => 'edumel_header_account_btn_text',
                'type'             => 'text',
                'title'            => esc_html__('Account Button Text', 'edumel'), 
				'default'  => 'Account',
                'subtitle'         => esc_html__('write text here', 'edumel'),
            ),		
			
			array(
                'id'       => 'edumel_header_account_btn_link',
                'type'             => 'text',
                'title'            => esc_html__('Account Button Link', 'edumel'), 
				'default'  => '#',
                'subtitle'         => esc_html__('write text here', 'edumel'),
            ),			
			
			array(
                'id'       => 'edumel_header_social_option',
                'type'             => 'slides',
                'title'            => esc_html__('Social Option', 'edumel'), 
                'subtitle'         => esc_html__('write text here', 'edumel'),
				'placeholder' => array(
					'title'           => esc_html__('Write icon name', 'edumel'),
					'url'             => esc_html__('Enter link', 'edumel'),
				),				
				'show' => array(
					'title' => true,
					'url' => true,
					'description' => false,
					'thumb' => false,
				)
            ),
			
        )
    ) );


    Redux::setSection( $opt_name, array(
        'title'            => esc_html__( 'Banner Settings', 'edumel' ),
        'id'               => 'edumel-banner-setting',
        'customizer_width' => '400px',
        'fields'           => array(

			array(
				'id'       => 'edumel_banner_img_opt',
				'type'     => 'media',
				'compiler' => true,
				'title'    => esc_html__('Main Banner Image', 'edumel'), 
				'subtitle' => esc_html__('upload banner image here', 'edumel'),
				'default'  => array(
					'url'=> esc_url(get_template_directory_uri()).'/assets/images/bg/page-title.jpg'
				  ),
			),
			
			array(
				'id'       => 'edumel_home_title',
				'type'     => 'text',
				'title'    => esc_html__('Home Text', 'edumel'), 
				'subtitle' => esc_html__('enter text here ', 'edumel'),
				'transparent'     => false,
				'default'  => 'Home'
			),		
			
			array(
				'id'       => 'edumel_archive_title',
				'type'     => 'text',
				'title'    => esc_html__('Archive Text', 'edumel'), 
				'subtitle' => esc_html__('enter text here ', 'edumel'),
				'transparent'     => false,
				'default'  => 'Archive'
			),		
			
			array(
				'id'       => 'edumel_blog_title',
				'type'     => 'text',
				'title'    => esc_html__('Blog Text', 'edumel'), 
				'subtitle' => esc_html__('enter text here ', 'edumel'),
				'transparent'     => false,
				'default'  => 'Blog'
			),				
			
			array(
				'id'       => 'edumel_search__title',
				'type'     => 'text',
				'title'    => esc_html__('Search Text', 'edumel'), 
				'subtitle' => esc_html__('enter text here ', 'edumel'),
				'transparent'     => false,
				'default'  => 'Search Result'
			),	
			
			array(
				'id'       => 'edumel_course_title',
				'type'     => 'text',
				'title'    => esc_html__('Course Text', 'edumel'), 
				'subtitle' => esc_html__('enter text here ', 'edumel'),
				'transparent'     => false,
				'default'  => 'Course'
			),		
			
			array(
				'id'       => 'edumel_shop_title',
				'type'     => 'text',
				'title'    => esc_html__('Shop Text', 'edumel'), 
				'subtitle' => esc_html__('enter text here ', 'edumel'),
				'transparent'     => false,
				'default'  => 'Shop'
			),				
			
		
        )
    ) );    
	
	Redux::setSection( $opt_name, array(
        'title'            => esc_html__( '404 Page Settings', 'edumel' ),
        'id'               => 'edumel-404-page-setting',
        'customizer_width' => '400px',
        'fields'           => array(
	

			array(
				'id'       => 'edumel_404_page_title',
				'type'     => 'text',
				'title'    => esc_html__('Page Title', 'edumel'), 
				'subtitle' => esc_html__('enter text here ', 'edumel'),
				'transparent'     => false,
				'default'  => '404'
			),
			
			array(
				'id'       => 'edumel_404_page_subtitle',
				'type'     => 'textarea',
				'title'    => esc_html__('Page Subtitle', 'edumel'), 
				'subtitle' => esc_html__('enter text here ', 'edumel'),
				'transparent'     => false,
				'default'  => 'Oops! That page can’tdfdsf'
			),	
			
			array(
				'id'       => 'edumel_404_page_descrption',
				'type'     => 'textarea',
				'title'    => esc_html__('Page Description', 'edumel'), 
				'subtitle' => esc_html__('enter text here ', 'edumel'),
				'transparent'     => false,
				'default'  => 'It looks like nothing was found at this location. Maybe try one of the links below or a search?'
			),			
			
			array(
				'id'       => 'edumel_404_btn_text',
				'type'     => 'text',
				'title'    => esc_html__('Button Text', 'edumel'), 
				'subtitle' => esc_html__('enter text here ', 'edumel'),
				'transparent'     => false,
				'default'  => 'Back To Home Page'
			)	

		
        )
    ) );	
	

    Redux::setSection( $opt_name, array(
        'title'            => esc_html__( 'Custom Css Settings', 'edumel' ),
        'id'               => 'edumel-custom-css-setting',
        'customizer_width' => '400px',
        'fields'           => array(
		
			array(
                'id'       => 'edumel_custom_css_opt',
                'type'     => 'switch',
                'title'    => esc_html__('Custom Css Option', 'edumel'),
                'subtitle' => esc_html__('Show / hide banner Image', 'edumel'),
                'default'  => '0'// 1 = on | 0 = off
            ), 
			
			
			array(
				'id'       => 'edumel_theme_primary_color_opt',
				'type'     => 'color',
				'title'    => esc_html__('Theme Primary Color', 'edumel'),
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,				
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default' => '#F14D5D',
			),				
			
			array(
				'id'       => 'edumel_theme_secondary_color_opt',
				'type'     => 'color',
				'title'    => esc_html__('Theme Secondary Color', 'edumel'),
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,				
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default' => '#015ABD',
			),		

			array(
				'id'       => 'edumel_whtie_col_opt',
				'type'     => 'info',
				'style'     => 'success',
				'title'    => esc_html__('White Button Color', 'edumel'), 
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
			),

			array(
				'id'       => 'edumel_white_btn_bg_color',
				'type'     => 'color',
				'title'    => esc_html__('Background Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#fff'
			),			
			
			array(
				'id'       => 'edumel_white_btn_text_color',
				'type'     => 'color',
				'title'    => esc_html__('Button Text Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#F14D5D'
			),			
			
			array(
				'id'       => 'edumel_white_btn_hbg_color',
				'type'     => 'color',
				'title'    => esc_html__('Background Hover Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#F14D5D'
			),			
			
			array(
				'id'       => 'edumel_white_btn_htext_color',
				'type'     => 'color',
				'title'    => esc_html__('Background Hover Text Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#fff'
			),			


			array(
				'id'       => 'edumel_backgournd_btn_col_opt',
				'type'     => 'info',
				'style'     => 'success',
				'title'    => esc_html__('Background Button Color', 'edumel'), 
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
			),
			
			array(
				'id'       => 'edumel_bgbutton_bgcolor',
				'type'     => 'color',
				'title'    => esc_html__('Button BG Color', 'edumel'),
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,				
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default' => '#F14D5D',
			),		
			
			array(
				'id'       => 'edumel_bgbutton_textcolor',
				'type'     => 'color',
				'title'    => esc_html__('Button Text Color', 'edumel'),
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,				
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default' => '#fff',
			),				
			
			array(
				'id'       => 'edumel_bgbutton_hover_textcolor',
				'type'     => 'color',
				'title'    => esc_html__('Button Hover Text Color', 'edumel'),
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,				
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default' => '#fff',
			),			
			
			array(
				'id'       => 'edumel_bgbutton_hover_bgcolor',
				'type'     => 'color',
				'title'    => esc_html__('Button Hover BG Color', 'edumel'),
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,				
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default' => '#015ABD',
			),		
			
			array(
				'id'       => 'edumel_border_col_opt',
				'type'     => 'info',
				'style'     => 'success',
				'title'    => esc_html__('Border Button Color', 'edumel'), 
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
			),
			
			array(
				'id'       => 'edumel_bor_btn_text_color',
				'type'     => 'color',
				'title'    => esc_html__('Button Text Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#F14D5D'
			),	
			
			array(
				'id'       => 'edumel_bor_btn_border_color',
				'type'     => 'color',
				'title'    => esc_html__('Button Border Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#F14D5D'
			),
			
			array(
				'id'       => 'edumel_bor_btn_text_hovercolor',
				'type'     => 'color',
				'title'    => esc_html__('Button Hover Text Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#fff'
			),	
			
			array(
				'id'       => 'edumel_bor_btn_bg_hovercolor',
				'type'     => 'color',
				'title'    => esc_html__('Button Hover Background Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#F14D5D'
			),							


			array(
				'id'       => 'edumel_menu_col_opt',
				'type'     => 'info',
				'style'     => 'success',
				'title'    => esc_html__('Menu Color', 'edumel'), 
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
			),
			
			array(
				'id'       => 'edumel_menu_text_color',
				'type'     => 'color',
				'title'    => esc_html__('Menu Text Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#222'
			),						
			array(
				'id'       => 'edumel_menu_text_hover_color',
				'type'     => 'color',
				'title'    => esc_html__('Menu Text Hover', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#F14D5D'
			),					
			array(
				'id'       => 'edumel_sticky_menu_bg_color',
				'type'     => 'color',
				'title'    => esc_html__('Menu Sticky BG Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#fff'
			),		

			array(
				'id'       => 'edumel_sticky_menu_text_color',
				'type'     => 'color',
				'title'    => esc_html__('Menu Sticky Text Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#222'
			),	
			
			
			array(
				'id'       => 'edumel_submenu_bg_color',
				'type'     => 'color',
				'title'    => esc_html__('Submenu Background Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#ffffff'
			),		
			
			array(
				'id'       => 'edumel_submenu_text_color',
				'type'     => 'color',
				'title'    => esc_html__('Submenu Text Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#000'
			),		
					
			array(
				'id'       => 'edumel_submenu_hover_text_color',
				'type'     => 'color',
				'title'    => esc_html__('Submenu Hover text Color', 'edumel'), 
				'subtitle' => esc_html__('Choice color here', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#F14D5D'
			),			
	
			array(
				'id'       => 'edumel_footer_col_opt',
				'type'     => 'info',
				'style'     => 'success',
				'title'    => esc_html__('Footer Color', 'edumel'), 
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
			),
			
			array(
				'id'       => 'edumel_footer_backgorund_color',
				'type'     => 'color',
				'title'    => esc_html__('Footer Backgrund Color', 'edumel'), 
				'subtitle' => esc_html__('Please use color ', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default' => '#120F2D'
			),				
							
			array(
				'id'       => 'edumel_footer_title_color',
				'type'     => 'color',
				'title'    => esc_html__('Footer Title Color', 'edumel'), 
				'subtitle' => esc_html__('Please use color ', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#fff'
			),			

			array(
				'id'       => 'edumel_footer_text_color',
				'type'     => 'text',
				'title'    => esc_html__('Footer Text Color', 'edumel'), 
				'subtitle' => esc_html__('Please use color ', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => 'rgba(255, 255, 255, 0.7)'
			),	
				
			array(
				'id'       => 'edumel_footer_link_color',
				'type'     => 'text',
				'title'    => esc_html__('Link Color', 'edumel'), 
				'subtitle' => esc_html__('Please use color ', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => 'rgba(255, 255, 255, 0.7)'
			),				
			
			array(
				'id'       => 'edumel_footer_link_hover_color',
				'type'     => 'color',
				'title'    => esc_html__('Link Hover Color', 'edumel'), 
				'subtitle' => esc_html__('Please use color ', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#fff'
			),				
			
			array(
				'id'       => 'edumel_footer_btmlink_hover_color',
				'type'     => 'color',
				'title'    => esc_html__('Footer Bottom Link Hover Color', 'edumel'), 
				'subtitle' => esc_html__('Please use color ', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#015ABD'
			),			

			array(
				'id'       => 'edumel_scroll_up_opt',
				'type'     => 'info',
				'style'     => 'success',
				'title'    => esc_html__('Scroll Color', 'edumel'), 
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
			),	
			
			array(
				'id'       => 'edumel_scroll_border_color',
				'type'     => 'color',
				'title'    => esc_html__('Scroll Border Color', 'edumel'), 
				'subtitle' => esc_html__('Please use color ', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#015ABD'
			),				
			
			array(
				'id'       => 'edumel_scroll_up_text_color',
				'type'     => 'color',
				'title'    => esc_html__('Scroll up Text Color', 'edumel'), 
				'subtitle' => esc_html__('Please use color ', 'edumel'),
				'transparent'     => false,
				'required' => array( 'edumel_custom_css_opt', '=', '1' ),
				'default'  => '#015ABD'
			),			
        )
    ) );	
	

    Redux::setSection( $opt_name, array(
        'title'            => esc_html__( 'Footer Settings', 'edumel' ),
        'id'               => 'edumel-foooter-setting',
        'icon'             => 'el el-stop-alt',
        'customizer_width' => '400px',
        'fields'           => array(
            

			array(
                'id'       => 'edumel_footer_top_opt',
                'type'     => 'switch',
                'title'    => esc_html__('Footer Top Option', 'edumel'),
                'subtitle' => esc_html__('Show / hide banner Image', 'edumel'),
                'default'  => '0'// 1 = on | 0 = off
            ),
						
			array(
                'id'       => 'edumel_copyright_text',
                'type'             => 'editor',
                'title'            => esc_html__('Copyright Text', 'edumel'), 
                'subtitle'         => esc_html__('Write Copyright text here.', 'edumel'),
                'default'          => '© Copyright Edumel Theme All rights reserved.Crafted by pxelCode',
                'args'   => array(
                    'teeny'            => true,
                    'textarea_rows'    => 4
                )
            ),


			array(
                'id'       => 'edumel_scroll_switch',
                'type'     => 'switch',
                'title'    => esc_html__('Scroll Up Option', 'edumel'),
                'subtitle' => esc_html__('Show / hide banner Image', 'edumel'),
                'default'  => '1'// 1 = on | 0 = off
            ),			
			
        )
    ) );

    Redux::setSection( $opt_name, array(
        'title'            => esc_html__( 'Extra Settings', 'edumel' ),
        'id'               => 'edumel-demo-login-setting',
        'customizer_width' => '400px',
        'fields'           => array(

			array(
                'id'       => 'edumel_demo_login_content',
                'type'             => 'textarea',
                'title'            => esc_html__('Demo Login Content', 'edumel'), 
				'default'  => '',
                'subtitle'         => esc_html__('enter text here', 'edumel'),
            ),			
	

        )
    ) );
    /*
     * <--- END SECTIONS
     */


//define

include_once(EDUMELCOREDIR. '/inc/custom_css.php');