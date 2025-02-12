<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelCoursesWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-courses';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Courses' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_courses',
			[
				'label' => esc_html__( 'Courses', 'edumel' ),
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

				],
			]
		);
	
		$this->add_control(
			'sec_subtitle',
			[
				'label' => esc_html__( 'Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Course Trending ',
			]
		);		
		
		$this->add_control(
			'sec_title',
			[
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Explore popular courses',
			]
		);	
	

		$this->add_control(
			'sec_num_post',
			[
				'label' => esc_html__( 'Number of Post', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '-1',
			]
		);	

		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$se_style = $this->get_settings_for_display( 'se_style' );
		$sec_subtitle = $this->get_settings_for_display( 'sec_subtitle' );
		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_num_post = $this->get_settings_for_display( 'sec_num_post' );
		global $post, $authordata;
		
		if($se_style == '2'){ ?>
		
	   <!--course section start-->
		<section class="section-padding-btm course-filter-section" >
			<div class="container">
				<div class="row align-items-center justify-content-between">
					<div class="col-xl-6 col-lg-5">
						<div class="section-heading mb-50 text-center text-lg-start">
							<span class="subheading"><?php echo esc_html($sec_subtitle);?></span>
							<h2 class="font-lg"><?php echo edumel_wp_kses($sec_title);?></h3>						
						</div>
					</div>

					<div class="col-xl-6 col-lg-7">
					
						<?php $terms = get_terms('course-category');
								if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
							?>
							<ul class="course-filter text-center text-lg-end">
								<li class="active"><a href="#" data-filter="*"> <?php esc_html_e('All' , 'edumel');?></a></li>
								
								<?php foreach ( $terms as $term ) : ?>		
								<li class=""><a href="#" data-filter=".<?php echo esc_attr($term->slug); ?>"><?php echo esc_html($term->name); ?></a></li>
								<?php endforeach;?>
							</ul>
						<?php } ?>

					</div>
				</div>
				  

				<div class="row course-gallery ">

						<?php

						// WP_Query arguments
						$args = array(
							'post_type'              => array( 'courses' ),
							'posts_per_page'         => $sec_num_post,
						);

						// The Query
						$edumel_course_query = new WP_Query( $args );

						// The Loop
						if ( $edumel_course_query->have_posts() ) {
							while ( $edumel_course_query->have_posts() ) {
								$edumel_course_query->the_post();								

								$course_terms = get_the_terms(get_the_id(), 'course-category');
								
								if ( ! empty( $course_terms ) && ! is_wp_error( $course_terms ) ):
									
									$course_cat_slug = array();
									
									foreach($course_terms as $portfolio_term){
										$course_cat_slug[] = $portfolio_term->slug ;
									}
									
									$course_cat_array = join(" ", $course_cat_slug);
									$course_class_array = join(" ", $course_cat_slug);
								endif;
								
								$course_id         = get_the_ID();
								$course_students   = apply_filters( 'tutor_course_students', tutor_utils()->count_enrolled_users_by_course( $course_id ), $course_id );
								$course_duration    = get_tutor_course_duration_context( $course_id );
								$course_categories = get_tutor_course_categories( $course_id );
								$profile_url       = tutor_utils()->profile_url( $authordata->ID, true );
								$course_img_src = get_the_post_thumbnail_url(get_the_ID(), 'edumel_course');
								?>


								<div class="course-item <?php echo esc_attr($course_class_array);?> col-lg-6 col-md-6">
									<div class="single-course style-2 bg-shade border-0">
										<div class="row g-0 align-items-center">
											<div class="col-xl-5">
												<div class="course-thumb" style="background:url(<?php echo esc_url($course_img_src);?>)">
													<span class="category">
													<?php
														foreach ( $course_categories as $course_category ) {
															echo '<div class="ccategory">';
															_e( $course_category->name );
															echo '</div>';
														}
													?>
													</span>
												</div>
											</div>
											<div class="col-xl-7">
												<div class="course-content">
													<div class="course-price">
														<?php
															$price = tutor_utils()->get_course_price();
														if ( null === $price ) {
															esc_html_e( 'Free', 'edumel' );
														} else {
															echo wp_kses_post( tutor_utils()->get_course_price() );
														}
														?>														
													</div>
													<h3 class="course-title"> <a href="<?php the_permalink();?>"><?php the_title();?></a> </h3>
													<div class="course-meta d-flex align-items-center">
														<div class="author">
															<?php echo get_avatar( get_the_author_meta('email') , 90 ); ?>
															<a href="<?php echo esc_url( $profile_url ); ?>"><?php echo esc_html( get_the_author() ); ?></a>
														</div>
														<span class="students"><i class="far fa-user-alt"></i> <?php echo esc_html( $course_students ); ?> <?php echo esc_html__('Students' , 'edumel');?></span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
				

								<?php

							}
						} else {
							// no posts found
						}

						// Restore original Post Data
						wp_reset_postdata();
						
						
					?>						
				</div>
			</div>
			<!--course-->
		</section>
		<!--course section end-->
			
		<?php }else{ ?>

		<!--course section start-->
		<section class="section-padding course-filter-section" >
			<div class="container">
				<div class="row align-items-center justify-content-between mb-30">
					<div class="col-xl-12">
						<div class="heading text-center mb-40">
							<span class="subheading"><?php echo esc_html($sec_subtitle);?></span>
							<h2 class="font-lg"><?php echo edumel_wp_kses($sec_title);?></h3>
						</div>
					
						<div class="filter-wrap text-center">
							<?php $terms = get_terms('course-category');
								if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
							?>
							<ul class="course-filter">
								<li class="active"><a href="#" data-filter="*"> <?php esc_html_e('All' , 'edumel');?></a></li>
								
								<?php foreach ( $terms as $term ) : ?>		
								<li class=""><a href="#" data-filter=".<?php echo esc_attr($term->slug); ?>"><?php echo esc_html($term->name); ?></a></li>
								<?php endforeach;?>
							</ul>
						<?php } ?>
						</div>
					</div>
				</div>
			</div>
			
			<div class="container-fluid container-padding">        
				<div class="row course-gallery justify-content-center">

						<?php

						// WP_Query arguments
						$args = array(
							'post_type'              => array( 'courses' ),
							'posts_per_page'         => $sec_num_post,
						);

						// The Query
						$edumel_course_query = new WP_Query( $args );

						// The Loop
						if ( $edumel_course_query->have_posts() ) {
							while ( $edumel_course_query->have_posts() ) {
								$edumel_course_query->the_post();								

								$course_terms = get_the_terms(get_the_id(), 'course-category');
								
								if ( ! empty( $course_terms ) && ! is_wp_error( $course_terms ) ):
									
									$course_cat_slug = array();
									
									foreach($course_terms as $portfolio_term){
										$course_cat_slug[] = $portfolio_term->slug ;
									}
									
									$course_cat_array = join(" ", $course_cat_slug);
									$course_class_array = join(" ", $course_cat_slug);
								endif;
								
								$course_id         = get_the_ID();
								$course_students   = apply_filters( 'tutor_course_students', tutor_utils()->count_enrolled_users_by_course( $course_id ), $course_id );
								$course_duration    = get_tutor_course_duration_context( $course_id );
								$course_categories = get_tutor_course_categories( $course_id );
								$profile_url       = tutor_utils()->profile_url( $authordata->ID, true );
								?>

							<div class="course-item <?php echo esc_attr($course_class_array);?> col-lg-3 col-md-6 col-sm-6">
								<div class=" course-style-5 bg-white">
									<div class="course-header">
										<div class="course-thumb">
											<?php the_post_thumbnail('edumel_course');?>
											<div class="course-price">
												<?php
													$price = tutor_utils()->get_course_price();
												if ( null === $price ) {
													esc_html_e( 'Free', 'edumel' );
												} else {
													echo wp_kses_post( tutor_utils()->get_course_price() );
												}
												?>											
											</div>
										</div>
									</div>
				
									<div class="course-content">
										<div class="course-meta meta-style-1">
											<span class="lessons"><i class="far fa-play-circle me-2"></i><?php _e( tutor_utils()->get_lesson_count_by_course( $course_id ) . " Lectures", "edumel" ); ?> </span>
											<span class="label"><?php echo get_tutor_course_level( get_the_ID() );?></span>
										</div>
										<h4> <a href="<?php the_permalink();?>"><?php the_title();?></a> </h4>
									
										<div class="course-footer mt-20 d-flex align-items-center justify-content-between">
											<span class="students"><i class="far fa-user-alt me-2"></i><?php echo esc_html( $course_students ); ?> <?php echo esc_html__('Students' , 'edumel');?></span>
											<a href="<?php the_permalink();?>" class="rounded-btn"><i class="fa fa-long-arrow-right"></i></a>
										</div>
									</div>
								</div>
							</div>
					

								<?php

							}
						} else {
							// no posts found
						}

						// Restore original Post Data
						wp_reset_postdata();
						
						
					?>		
					
				</div>
			</div>
			<!--course-->
		</section>
		<!--course section end-->

			
		<?php } ?>
		 

<?php


	}

}
