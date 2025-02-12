<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelBannerSearchWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-banner-search';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Banner Search' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_banner_search',
			[
				'label' => esc_html__( 'Banner Search', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		
		$this->add_control(
			'sec_bg_color',
			[
				'label' => esc_html__( 'Background Color', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR ,
				'default' => '#F4F9FF',
				'selectors' => [
					'{{WRAPPER}} .banner-style-1' => 'background: {{VALUE}}',
				],
			]
		);			
		
		$this->add_control(
			'sec_title_color',
			[
				'label' => esc_html__( 'Title Color', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR ,
				'default' => '#14133b',
				'selectors' => [
					'{{WRAPPER}} .banner-style-1 .banner-content h1' => 'color: {{VALUE}}',
				],
			]
		);	
		
		$this->add_control(
			'sec_content_color',
			[
				'label' => esc_html__( 'Content Color', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR ,
				'default' => '#77838F',
				'selectors' => [
					'{{WRAPPER}} .banner-style-1 .banner-content p' => 'color: {{VALUE}}',	
				],
			]
		);		

		$this->add_control(
			'sec_cat_color',
			[
				'label' => esc_html__( 'Category Label Color', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR ,
				'default' => '#77838F',
				'selectors' => [
					'{{WRAPPER}} .banner-style-1 .banner-content .category-name' => 'color: {{VALUE}}',
				],
			]
		);	
		
		$this->add_control(
			'sec_cat_link',
			[
				'label' => esc_html__( 'Category Color', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR ,
				'default' => '#333',
				'selectors' => [
					'{{WRAPPER}} .banner .category-name a' => 'color: {{VALUE}}',
					'{{WRAPPER}} .banner .category-name .cat_coma' => 'color: {{VALUE}}',
					
				],
			]
		);	
		

		
		$this->add_control(
			'sec_image',
			[
				'label' => esc_html__( 'Section Image', 'edumel' ),
				'type' => \Elementor\Controls_Manager::MEDIA ,

			]
		);		
		
		$this->add_control(
			'sec_title',
			[
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Distant learning for further expansion ',
			]
		);	


		$this->add_control(
			'sec_content',
			[
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'The ultimate planning solution for people who want to reach their personal goals Effortless comfortable.',
			]
		);	
		
		$this->add_control(
			'search_text',
			[
				'label' => esc_html__( 'Search Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Search',
			]
		);		

		
		$this->add_control(
			'serch_place_hold',
			[
				'label' => esc_html__( 'Placeholder Image', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'What do you want to learn?',
			]
		);	
		
		$this->add_control(
			'cat_text',
			[
				'label' => esc_html__( 'Category Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Popular',
			]
		);			
		
		$this->add_control(
			'cat_num',
			[
				'label' => esc_html__( 'Number of Category', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '4',
			]
		);		

		
		$this->end_controls_section();


	}
	
	protected function render(){		

		$sec_image = $this->get_settings_for_display( 'sec_image' )['url'];
		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_content = $this->get_settings_for_display( 'sec_content' );
		$search_text = $this->get_settings_for_display( 'search_text' );
		$serch_place_hold = $this->get_settings_for_display( 'serch_place_hold' );
		$cat_text = $this->get_settings_for_display( 'cat_text' );
		$number_posts = $this->get_settings_for_display( 'cat_num' );
		?>

		<!-- Banner Section Start -->
		<section class="banner banner-style-1">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-12 col-xl-6 col-lg-6">
						<div class="banner-content">
							<h1><?php echo edumel_wp_kses($sec_title);?> </h1>
							<p><?php echo edumel_wp_kses($sec_content);?></p>
							
							<div class="banner-form me-5">
								<form action="<?php echo esc_url(home_url('/'));?>" class="form-search-banner">
									<input type="text" class="form-control" name="s" placeholder="<?php echo esc_attr($serch_place_hold);?>">
									<input type="hidden" name="post_type" value="courses" />
									<button type="submit" class="btn btn-main"><?php echo esc_html($search_text);?><i class="far fa-search"></i> </button>
								</form>
							</div>
						   <div class="category-name">
							   <span><?php echo esc_html($cat_text);?>:</span>
								<?php
							   $args = array(
								   'taxonomy' => 'course-category',
								   'orderby' => 'name',
								   'order'   => 'ASC',
								   'number' => $number_posts
							   );

							   $course_category = get_categories($args);

							   foreach($course_category as $cat) {

							?>
								<a href="<?php echo get_category_link( $cat->term_id ) ?>">
									<?php echo $cat->name; ?> 
								</a>
								  <span class="cat_coma">,</span>
							<?php
							   } ?>					   
							  

						   </div>
						</div>
					</div>

					<div class="col-md-12 col-xl-6 col-lg-6">
						<div class="banner-img-round mt-5 mt-lg-0">
							<img src="<?php echo esc_url($sec_image);?>" alt="<?php echo esc_attr($sec_title);?>" class="img-fluid">
						</div>
					</div>
				</div> <!-- / .row -->
			</div> <!-- / .container -->
		</section>
		<!-- Banner Section End -->
<?php

	}

}
