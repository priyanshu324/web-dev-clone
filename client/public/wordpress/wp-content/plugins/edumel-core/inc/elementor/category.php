<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelCategoryWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-course-category';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Course Category' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_course_category',
			[
				'label' => esc_html__( 'Course Category', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'se_style',
			[
				'label' => esc_html__( 'Style', 'edumel' ),
				'type' => \Elementor\Controls_Manager::SELECT ,
				'default' => '1',
				'options' => [
					'1' => esc_html__( '1', 'edumel' ),
					'2'  => esc_html__( '2', 'edumel' ),
					'3'  => esc_html__( '3', 'edumel' ),
					'4'  => esc_html__( '4', 'edumel' ),

				],
			]
		);
		
		$this->add_control(
			'category_subtitle',
			[
				'label' => esc_html__( 'Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam',
			]
		);		
		
		$this->add_control(
			'category_title',
			[
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Categories you want to learn',
			]
		);	
	
		$this->add_control(
			'category_content',
			[
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae reiciendis cumque, sequi vitae illum dolorem',
			]
		);		
		
		$this->add_control(
			'number_posts',
			[
				'label' => esc_html__( 'Number of Post', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '5',
			]
		);	
		
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$se_style = $this->get_settings_for_display( 'se_style' );
		$category_subtitle = $this->get_settings_for_display( 'category_subtitle' );
		$category_title = $this->get_settings_for_display( 'category_title' );
		$category_content = $this->get_settings_for_display( 'category_content' );
		$number_posts = $this->get_settings_for_display( 'number_posts' );

		global $post, $authordata;
		
		if($se_style == '2'){ ?>
			<div class="cate_2">
                <div class="section-heading mt-5 mt-lg-0 mb-4">
                    <span class="subheading"><?php echo edumel_wp_kses($category_subtitle);?></span>
                    <h2 class="mb-20 font-lg"><?php echo edumel_wp_kses($category_title);?></h2>
                    <p><?php echo edumel_wp_kses($category_content);?></p>
                </div>

                <div class="row">
			<?php
			   $args = array(
				   'taxonomy' => 'course-category',
				   'orderby' => 'name',
				   'order'   => 'ASC',
				   'number' => $number_posts
			   );

			   $course_category = get_categories($args);

			   foreach($course_category as $cat) {
				   
				$image_id = get_term_meta( $cat->term_id, 'thumbnail_id', true );
				$post_thumbnail_img = wp_get_attachment_image_src( $image_id, 'thumbnail' );
			?>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="single-course-category style-2">
                            <div class="course-cat-icon">
                                <img src="<?php echo esc_url($post_thumbnail_img[0]); ?>" alt="" class="img-fluid" />
                            </div>
                            <div class="course-cat-content">
							<h4 class="course-cat-title">
								<a href="<?php echo get_category_link( $cat->term_id ) ?>">
									<?php echo esc_html($cat->name); ?>
								</a>
							</h4>
                            </div>
                        </div>
                    </div>
		  
			<?php
			   } ?>

    
                </div>
            </div>			
		<?php }elseif($se_style == '3'){ ?>

		<section class="category-section">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-8">
						<div class="section-heading mb-70 text-center">
							<span class="subheading"><?php echo edumel_wp_kses($category_subtitle);?></span>
							<h2 class="font-lg"><?php echo edumel_wp_kses($category_title);?></h2>
						</div>
					</div>
				</div>
				
				<div class="row">

				<?php
				   $args = array(
					   'taxonomy' => 'course-category',
					   'orderby' => 'name',
					   'order'   => 'ASC',
					   'number' => $number_posts
				   );

				   $course_category = get_categories($args);

				   foreach($course_category as $cat) {
					   
					$image_id = get_term_meta( $cat->term_id, 'thumbnail_id', true );
					$post_thumbnail_img = wp_get_attachment_image_src( $image_id, 'thumbnail' );
				?>
						
			  		<div class="col-xl col-sm-6 col-lg-4">
						<div class="single-course-category style-1 bg-shade">
							<div class="course-cat-icon">
								<img src="<?php echo esc_url($post_thumbnail_img[0]); ?>" alt="" class="img-fluid" />
							</div>
							<div class="course-cat-content">
								<h4 class="course-cat-title">
									<a href="<?php echo get_category_link( $cat->term_id ) ?>">
										<?php echo esc_html($cat->name); ?>
									</a>
								</h4>

								<p class="course-count"><?php echo esc_html($cat->count); ?> <?php esc_html_e('courses' , 'edumel');?></p>
							</div>
						</div>
					</div>
				<?php
				   } ?>
			   
				</div>
			</div>
		</section>
			
		<?php }elseif($se_style == '4'){ ?>
			<div class="container-fluid container-grid">
				<div class="row justify-content-center">
					<div class="col-xl-8">
						<div class="heading mb-50 text-center">
							<span class="subheading"><?php echo edumel_wp_kses($category_subtitle);?></span>
							<h2><?php echo edumel_wp_kses($category_title);?></h2>						
						</div>
					</div>
				</div>

				<div class="row">
				<?php
				   $args = array(
					   'taxonomy' => 'course-category',
					   'orderby' => 'name',
					   'order'   => 'ASC',
					   'number' => $number_posts
				   );

				   $course_category = get_categories($args);

				   foreach($course_category as $cat) {
					   
					$image_id = get_term_meta( $cat->term_id, 'thumbnail_id', true );
					$post_thumbnail_img = wp_get_attachment_image_src( $image_id, 'thumbnail' );
				?>
					<div class="col-xl-3 col-lg-4 col-md-6">
						<div class="single-course-category style-2">
							<div class="course-cat-icon">
								<img src="<?php echo esc_url($post_thumbnail_img[0]); ?>" alt="" class="img-fluid" />
							</div>
							<div class="course-cat-content">
								<h4 class="course-cat-title">
									<a href="<?php echo get_category_link( $cat->term_id ) ?>">
										<?php echo esc_html($cat->name); ?>
									</a>
								</h4>
							</div>
						</div>
					</div>		
					

				<?php
				   } ?>


				</div>
			</div>
	
		<?php }else{ ?>
		<!--  Course category -->
		<section class="course-category-3 section-padding">
			<div class="container">
				<div class="row mb-70 justify-content-center">
					<div class="col-xl-8">
						<div class="section-heading text-center">					
							<h2 class="font-lg"><?php echo edumel_wp_kses($category_title);?></h2>
							<p><?php echo edumel_wp_kses($category_subtitle);?></p>
						</div>
					</div>
				</div>

				<div class="row">
			<?php
			   $args = array(
				   'taxonomy' => 'course-category',
				   'orderby' => 'name',
				   'order'   => 'ASC',
				   'number' => $number_posts
			   );
				$number = 1;
			   $course_category = get_categories($args);

			   foreach($course_category as $cat) {
				   
				$image_id = get_term_meta( $cat->term_id, 'thumbnail_id', true );
				$post_thumbnail_img = wp_get_attachment_image_src( $image_id, 'thumbnail' );
			?>
				<div class="col-xl col-lg-4 col-sm-6">
					<div class="single-course-category style-3 bg-<?php echo esc_attr($number);?>">
						<div class="course-cat-icon">
							<img src="<?php echo esc_url($post_thumbnail_img[0]); ?>" alt="" class="img-fluid">
						</div>
						<div class="course-cat-content">
							<h4 class="course-cat-title">
								<a href="<?php echo get_category_link( $cat->term_id ) ?>">
								<?php echo esc_html($cat->name); ?>
							</a>
							</h4>
						</div>
					</div>
				</div>
	
				  
			<?php
				   
				$number ++;   
			   } ?>

				</div>
			</div>
		</section>
		<!--  Course category End -->			
		<?php } ?>
	
 	
		
<?php


	}

}
