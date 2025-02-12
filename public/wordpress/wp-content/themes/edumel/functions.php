<?php
/**
 * Edumel functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Edumel
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function edumel_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on Edumel, use a find and replace
		* to change 'edumel' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'edumel', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'edumel_blog', 750,390, true );
	add_image_size( 'edumel_single_blog', 1170,600, true );
	add_image_size( 'edumel_testi', 140,140, true );
	add_image_size( 'edumel_course', 340,223, true );
	add_image_size( 'edumel_course_popurlar', 170,170, true );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'edumel' ),
			'menu-2' => esc_html__( 'Footer', 'edumel' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);
	/*
	 * Set woocommerce support  
	 * 
	 */
	add_theme_support( 'woocommerce' );		

	// Add support for Block Styles.
	add_theme_support( 'wp-block-styles' );
	
	// Add support for editor styles.
	add_theme_support( 'editor-styles' );
	
	// Add support for responsive-embeds.
	add_theme_support( "responsive-embeds" );
	
	// Add support for align-wide.
	add_theme_support( "align-wide" );
	
	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'edumel_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
	
		
	// add_editor_style
	add_editor_style( 'editor-style.css' );
}
add_action( 'after_setup_theme', 'edumel_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function edumel_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'edumel_content_width', 640 );
}
add_action( 'after_setup_theme', 'edumel_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function edumel_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'edumel' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'edumel' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h4 class="widget-title">',
			'after_title'   => '</h4>',
		)
	);	
	
	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer About', 'edumel' ),
			'id'            => 'sidebar-2',
			'description'   => esc_html__( 'Add widgets here.', 'edumel' ),
			'before_widget' => ' ',
			'after_widget'  => ' ',
			'before_title'  => ' ',
			'after_title'   => ' ',
		)
	);	
	
	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer Widget', 'edumel' ),
			'id'            => 'sidebar-3',
			'description'   => esc_html__( 'Add widgets here.', 'edumel' ),
			'before_widget' => '<div class="col-xl-2 col-sm-4"><div class="footer-widget mb-5 mb-lg-0">',
			'after_widget'  => '</div></div> ',
			'before_title'  => '<h5 class="widget-title">',
			'after_title'   => '</h5>',
		)
	);
}
add_action( 'widgets_init', 'edumel_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function edumel_scripts() {
	
	// Add CSS Files
	
	wp_enqueue_style('edumel-jost-font' , '//fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap');	
	wp_enqueue_style('gilroy-font' , get_template_directory_uri(). '/assets/css/gilroy-font.css');
	wp_enqueue_style('bootstrap' , get_template_directory_uri(). '/assets/vendors/bootstrap/bootstrap.css');	
	wp_enqueue_style('fontawesome' , get_template_directory_uri(). '/assets/vendors/awesome/css/fontawesome-all.min.css');	
	wp_enqueue_style('flaticon' , get_template_directory_uri(). '/assets/vendors/flaticon/flaticon.css');	
	wp_enqueue_style('font-gilroy' , get_template_directory_uri(). '/assets/css/gilroy-font.css');	
	wp_enqueue_style('magnific-popup' , get_template_directory_uri(). '/assets/vendors/magnific-popup/magnific-popup.css');	
	wp_enqueue_style('YouTubePopUp' , get_template_directory_uri(). '/assets/css/YouTubePopUp.css');
	wp_enqueue_style('animate' , get_template_directory_uri(). '/assets/vendors/animate-css/animate.css');	
	wp_enqueue_style('animated-headline' , get_template_directory_uri(). '/assets/vendors/animated-headline/animated-headline.css');	
	wp_enqueue_style('owl-carousel' , get_template_directory_uri(). '/assets/vendors/owl/assets/owl.carousel.min.css');	
	wp_enqueue_style('owl-theme' , get_template_directory_uri(). '/assets/vendors/owl/assets/owl.theme.default.min.css');	
	wp_enqueue_style('edumel-woocomerce' , get_template_directory_uri(). '/assets/css/woocomerce.css');	
	wp_enqueue_style('edumel-main-style' , get_template_directory_uri(). '/assets/css/style.css');	
	wp_enqueue_style( 'edumel-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_enqueue_style('edumel-responsive' , get_template_directory_uri(). '/assets/css/responsive.css');	
	wp_style_add_data( 'edumel-style', 'rtl', 'replace' );

	// Load JS Files
	wp_enqueue_script( 'popper', get_template_directory_uri() . '/assets/vendors/bootstrap/popper.min.js', array('jquery'), '985', true );
	wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/assets/vendors/bootstrap/bootstrap.js', array('jquery'), '985', true );
	wp_enqueue_script( 'waypoint', get_template_directory_uri() . '/assets/vendors/counterup/waypoint.js', array('jquery'), '985', true );
	wp_enqueue_script( 'counterup', get_template_directory_uri() . '/assets/vendors/counterup/jquery.counterup.min.js', array('jquery'), '985', true );
	wp_enqueue_script( 'owl-carousel', get_template_directory_uri() . '/assets/vendors/owl/owl.carousel.min.js', array('jquery'), '985', true );
	wp_enqueue_script( 'isotope', get_template_directory_uri() . '/assets/vendors/isotope/jquery.isotope.js', array('jquery'), '985', true );
	wp_enqueue_script( 'imagesloaded' );
	wp_enqueue_script( 'animated-headline', get_template_directory_uri() . '/assets/vendors/animated-headline/animated-headline.js', array('jquery'), '985', true );
	wp_enqueue_script( 'magnific-popup', get_template_directory_uri() . '/assets/vendors/magnific-popup/jquery.magnific-popup.min.js', array('jquery'), '985', true );
	wp_enqueue_script( 'YouTubePopUp', get_template_directory_uri() . '/assets/js/YouTubePopUp.jquery.js', array('jquery'), '985', true );
	wp_enqueue_script( 'edumel-script', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), '985', true );
	
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'edumel_scripts' );


function edumel_default_menu(){ ?>
	<ul class="navbar-nav mx-auto">                  
		<li><a href="<?php echo admin_url('nav-menus.php'); ?>"><?php esc_html_e( 'Add Menu', 'edumel' ); ?></a></li>
	</ul>
<?php	
}

// Main_menu
function edumel_main_menu() {
		wp_nav_menu( array(
		'theme_location'    => 'menu-1',
		'depth'             => 5,
		'container'         => false,
		'menu_class'        => ' primary-menu ',
		'fallback_cb'       => 'edumel_default_menu',
		
		)
	); 	
}

// Footer_menu
function edumel_footer_menu() {
		wp_nav_menu( array(
		'theme_location'    => 'menu-2',
		'depth'             => 5,
		'container'         => false,
		'menu_class'        => 'navbar-nav mx-auto',
		'fallback_cb'       => 'edumel_default_menu',
		
		)
	); 	
}

// top_menu
function edumel_top_menu() {
		wp_nav_menu( array(
		'theme_location'    => 'menu-2',
		'depth'             => 5,
		'container'         => false,
		'menu_class'        => '',
		'fallback_cb'       => 'edumel_default_menu',
		
		)
	); 	
}


function edumel_post_pagination(){
	echo '<nav class="blog-page-navigation">';
	the_posts_pagination( array(
		'mid_size' => 2,
		'prev_text' => '<i class="fa fa-angle-double-left"></i>',
		'next_text' => '<i class="fa fa-angle-double-right"></i>',
	) );
	echo '</nav>';
}


// wp kses
function edumel_wp_kses($val){
	return wp_kses($val, array(
	
	'p' => array(),
	'span' => array('class' => array(),'id' => array()),
	'div' => array(),
	'strong' => array(),
	'em' => array(),
	'b' => array('class' => array(),'id' => array()),
	'nav' => array('class' => array(),'id' => array(),'data-tutor_pagination_ajax' => array(),'data-push_state_link' => array()),
	'img' => array('class' => array(),'id' => array(), 'src' => array()),
	'br' => array(),
	'h1' => array(),
	'h2' => array(),
	'h3' => array(),
	'h4' => array(),
	'h5' => array(),
	'h6' => array(),
	'i'=> array('class' => array(),'id' => array()),
	'div'=> array('class' => array(),'id' => array()),
	'ul'=> array('class' => array(),'id' => array()),
	'li'=> array('class' => array(),'id' => array()),
	'a'=> array('href' => array(),'target' => array(),'class' => array(),'id' => array()),
	'iframe'=> array('src' => array(),'height' => array(),'width' => array()),
	
	), '');
}

// modify search widget
function edumel_my_search_form( $form ) {
	$form = '
			
		<form method="get" class="search-form" action="' . esc_url(home_url( '/' )) . '" >
			<input type="text" value="' . esc_attr(get_search_query()) . '" name="s" id="s" class="form-control" placeholder="' . esc_attr__('Search' , 'edumel') .'">
			<button type="submit" class="search-submit"><i class="fa fa-search"></i></button>
		</form>
			
		
        ';
	return $form;
}
add_filter( 'get_search_form', 'edumel_my_search_form' );

// Header search widget
function edumel_header_search_form() {
?>
	
		<form action="<?php echo esc_url(home_url( '/' )); ?>">
			<input type="text" class="form-control" name="s" id="s" placeholder="<?php echo esc_attr__('Search for anything' , 'edumel'); ?>">
			<button type="submit" class="search-submit"><i class="far fa-search"></i></button>
	   </form>
<?php
}


// comment list modify

function edumel_comments($comment, $args, $depth) {
   $GLOBALS['comment'] = $comment; ?>

<li <?php comment_class(); ?> id="comment-<?php comment_ID() ?>">

	<div class="comment-box">
		<div class="comment-avatar">
			<?php echo get_avatar( $comment, 95 ); ?>
		</div>
		<div class="comment-info">
			<h5><?php comment_author_link() ?></h5>
			<span><?php echo esc_html(get_comment_date('F j, Y')); ?></span>
			<?php if ($comment->comment_approved == '0') : ?>
			<p><em><?php esc_html_e('Your comment is awaiting moderation.','edumel'); ?></em></p>
			<?php endif; ?>			
			<?php comment_text(); ?>	
		</div>
	</div>
								
</li>


<?php } 

// comment box title change
add_filter( 'comment_form_defaults', 'edumel_remove_comment_form_allowed_tags' );
function edumel_remove_comment_form_allowed_tags( $defaults ) {

	$defaults['comment_notes_after'] = '';
	$defaults['comment_notes_before'] = '';
	return $defaults;

}

function edumel_comment_reform ($arg) {

$arg['title_reply'] = esc_html__('Write your comment Here','edumel');
$arg['comment_field'] = '<div class="row"><div class="form-group col-lg-12"><textarea id="comment" class="comment_field form-control" name="comment" cols="30" rows="6" placeholder="'. esc_attr__("Comment", "edumel").'" aria-required="true"></textarea></div></div>';


return $arg;

}
add_filter('comment_form_defaults','edumel_comment_reform');

// comment form modify

function edumel_modify_comment_form_fields($fields){
	$commenter = wp_get_current_commenter();
	$req	   = get_option( 'require_name_email' );

	$fields['author'] = '<div class="row"><div class="form-group col-lg-6"><input type="text" name="author" id="author" value="'. esc_attr( $commenter['comment_author'] ) .'" placeholder="'. esc_attr__("Your Name *", "edumel").'" size="22" tabindex="1"'. ( $req ? 'aria-required="true"' : '' ).' class="input-name form-control" /></div>';

	$fields['email'] = '<div class="form-group col-lg-6"><input type="text" name="email" id="email" value="'. esc_attr( $commenter['comment_author_email'] ) .'" placeholder="'.esc_attr__("Your Email *", "edumel").'" size="22" tabindex="2"'. ( $req ? 'aria-required="true"' : '' ).' class="input-email form-control"  /></div>';
	
	$fields['url'] = '<div class="form-group col-lg-12"><input type="text" name="url" id="url" value="'. esc_attr( $commenter['comment_author_url'] ) .'" placeholder="'. esc_attr__("Website", "edumel").'" size="22" tabindex="2"'. ( $req ? 'aria-required="false"' : '' ).' class="input-url form-control"  /></div></div>';

	return $fields;
}
add_filter('comment_form_default_fields','edumel_modify_comment_form_fields');

function edumel_move_comment_field_to_bottom( $fields ) {
	$comment_field = $fields['comment'];
	unset( $fields['comment'] );
	$fields['comment'] = $comment_field;
	return $fields;
}
add_filter( 'comment_form_fields', 'edumel_move_comment_field_to_bottom' );


/*
 * Set post views count using post meta
 */
function edumel_setPostViews($postID) {
    $countKey = 'post_views_count';
    $count = get_post_meta($postID, $countKey, true);
    if($count==''){
        $count = 0;
        delete_post_meta($postID, $countKey);
        add_post_meta($postID, $countKey, '0');
    }else{
        $count++;
        update_post_meta($postID, $countKey, $count);
    }
}

/* Header Course Search */

function edumel_header_course_search(){ ?>

	<div class="page_search_box">
		<div class="search_close">
			<i class="fa fa-times"></i>
		</div>

		<form action="<?php echo esc_url(home_url('/'));?>" class="border-bottom">
			<input type="text" class="border-0" name="s" placeholder="<?php echo esc_attr__('Search Courses...' , 'edumel');?>">
			<input type="hidden" name="post_type" value="courses" />
			<button type="submit"><i class="fa fa-search"></i></button>
		</form>
		
	</div>	

<?php }
/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */

require get_template_directory() . '/inc/customizer.php';

 
/**
 * edumel-functions
 */
 
require get_template_directory() . '/inc/edumel-functions.php';

/**
 * class-tgm-plugin-activation
 */
 
require get_template_directory() . '/inc/class-tgm-plugin-activation.php';

/**
 * required-plugin
 */
 
require get_template_directory() . '/inc/required-plugin.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
* edumel_user_profile_fields
*/
 
 
/**
* edumel_user_profile_fields
*/
 
 
function edumel_user_profile_fields( $methods ) {
    $methods['designation'] = 'Designation';
    $methods['facebook_link'] = 'Facebook Link';
    $methods['twitter_link'] = 'Twitter Link';
    $methods['linkedin_link'] = 'Linkedin Link';
    $methods['youtube_link'] = 'Youtube Link';
    return $methods;
}
add_action( 'user_contactmethods', 'edumel_user_profile_fields' );


function edumel_custom_excerpt_length( $length ) {
    return 15;
}
add_filter( 'excerpt_length', 'edumel_custom_excerpt_length', 999 );
