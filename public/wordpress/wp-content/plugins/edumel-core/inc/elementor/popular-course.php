<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelPopularCourseWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-popular-course';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Popular Course' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_popular_course',
			[
				'label' => esc_html__( 'Popular Course', 'edumel' ),
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
			'sec_title',
			[
				'label' => esc_html__( 'title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Popular Courses',
			]
		);		
		
		$this->add_control(
			'sec_content',
			[
				'label' => esc_html__( 'Content / Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Discover Your Perfect Program In Our Courses.',
			]
		);		
		
		$this->add_control(
			'sec_btn_large_text',
			[
				'label' => esc_html__( 'Button Large Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Want to help people learn, grow and achieve more in life?',
			]
		);	
		
		$this->add_control(
			'sec_btn_text',
			[
				'label' => esc_html__( 'Button Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Join now',
			]
		);			
		
		$this->add_control(
			'sec_btn_link',
			[
				'label' => esc_html__( 'Button Link', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '#',
			]
		);	
	

		$this->add_control(
			'number_posts',
			[
				'label' => esc_html__( 'Number of Posts', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '3',
			]
		);
		
		
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$se_style = $this->get_settings_for_display( 'se_style' );
		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_content = $this->get_settings_for_display( 'sec_content' );
		$sec_btn_large_text = $this->get_settings_for_display( 'sec_btn_large_text' );
		$sec_btn_text = $this->get_settings_for_display( 'sec_btn_text' );
		$sec_btn_link = $this->get_settings_for_display( 'sec_btn_link' );
		$number_posts = $this->get_settings_for_display( 'number_posts' );
		
		global $post, $authordata;
		
		if($se_style == '2'){ ?>
		
		<!--  Course style 2 -->
		<section class="course-wrapper section-padding  bg-gray">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-8">
						<div class="section-heading mb-70 text-center">
							<h2 class="font-lg"><?php echo edumel_wp_kses($sec_title);?></h2>
							<p><?php echo edumel_wp_kses($sec_content);?></p>
						</div>
					</div>
				</div>

				<div class="row justify-content-lg-center">

				<?php
						// WP_Query arguments
						$args = array(
							'post_type'              => array( 'courses' ),
							'posts_per_page'         => $number_posts,
						);

						// The Query
						$edumel_popular_course_query = new WP_Query( $args );

						// The Loop
						if ( $edumel_popular_course_query->have_posts() ) {
							while ( $edumel_popular_course_query->have_posts() ) {
								$edumel_popular_course_query->the_post();					
								$course_id         = get_the_ID();
								$course_students   = apply_filters( 'tutor_course_students', tutor_utils()->count_enrolled_users_by_course( $course_id ), $course_id );							
								$course_duration    = get_tutor_course_duration_context( $course_id );
							?>

							<div class="col-xl-3 col-lg-6 col-md-6">
								<div class="course-grid tooltip-style bg-white hover-shadow">
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
										<div class="rating mb-10">
											<?php
											$course_rating = tutor_utils()->get_course_rating( $course_id );
											tutor_utils()->star_rating_generator( $course_rating->rating_avg ); ?>

											<span><?php echo $course_rating->rating_avg;?> (<?php esc_html_e( $course_rating->rating_count ); ?> <?php esc_html_e('reviews' , 'edumel');?>)</span>
										</div>
										<h3 class="course-title mb-20"><a href="<?php the_permalink();?>"><?php the_title();?></a></h3>
										<div class="course-footer mt-20 d-flex align-items-center justify-content-between ">
											<span class="duration"><i class="far fa-clock me-2"></i>
											<?php
												if ( $course_duration ) {
													_e( $course_duration, 'edumel' );
												} ?>
											</span>
											<span class="lessons"><i class="far fa-play-circle me-2"></i><?php _e( tutor_utils()->get_lesson_count_by_course( $course_id ) . " Lessons", "edumel" ); ?></span>
										</div>
									</div>
								</div>
							 </div>
							<!-- COURSE END -->
					

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
		</section>
		<!--  Course style 2 End -->
		
		<?php }elseif($se_style == '3'){ ?>
		<!--  Course style 3 -->
		<section class="section-padding pt-0">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-8">
						<div class="heading mb-50 text-center">
							<span class="subheading"><?php echo edumel_wp_kses($sec_content);?></span>
							<h2><?php echo edumel_wp_kses($sec_title);?></h2>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">

				<?php
						// WP_Query arguments
						$args = array(
							'post_type'              => array( 'courses' ),
							'posts_per_page'         => $number_posts,
						);

						// The Query
						$edumel_popular_course_query = new WP_Query( $args );

						// The Loop
						if ( $edumel_popular_course_query->have_posts() ) {
							while ( $edumel_popular_course_query->have_posts() ) {
								$edumel_popular_course_query->the_post();					
								$course_id         = get_the_ID();
								$course_students   = apply_filters( 'tutor_course_students', tutor_utils()->count_enrolled_users_by_course( $course_id ), $course_id );							
								$course_duration    = get_tutor_course_duration_context( $course_id );
								$course_categories = get_tutor_course_categories( $course_id );
								$profile_url       = tutor_utils()->profile_url( $authordata->ID, true );
							?>

							<div class="col-xl-4 col-lg-4 col-md-6">
								<div class="course-grid course-style-3">
									<div class="course-header">
										<div class="course-thumb">
											<?php the_post_thumbnail('edumel_course');?>
										</div>
									</div>
					
									<div class="course-content">
										<div class="course-meta d-flex justify-content-between mb-20">
											<span class="category">
											<?php
												foreach ( $course_categories as $course_category ) {
													echo '<div class="ccategory">';
													_e( $course_category->name );
													echo '</div>';
												}
											?>
											</span>
											<span class="label"><i class="fas fa-signal me-2"></i><?php echo get_tutor_course_level( get_the_ID() );?></span>
										</div>
										<h3 class="course-title mb-20"><a href="<?php the_permalink();?>"><?php the_title();?></a></h3>
									 
										<div class="course-meta-info">
											<div class="d-flex align-items-center">
												<div class="author me-3">
													<?php echo get_avatar( get_the_author_meta('email') , 90 ); ?>
													<a href="<?php echo esc_url( $profile_url ); ?>"><?php echo esc_html( get_the_author() ); ?></a>
												</div>
												<span class="students"><i class="far fa-user-alt me-2"></i> <?php echo esc_html( $course_students ); ?> <?php echo esc_html__('Students' , 'edumel');?></span>
											</div>
										</div>

									   <div class="course-footer mt-20 d-flex align-items-center justify-content-between">
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
											<a href="<?php the_permalink();?>" class="btn btn-main-outline btn-radius btn-sm"><?php esc_html_e('Buy Now' , 'edumel');?> <i class="fa fa-long-arrow-right"></i></a>
										</div>
									</div>
								</div>
							 </div>
							<!-- COURSE END -->

							<?php
							}
						} else {
							// no posts found
						}

						// Restore original Post Data
						wp_reset_postdata();
					?>

				</div>

				<div class="row">
					<div class="col-xl-12">
						<div class="text-center">
							<?php echo edumel_wp_kses($sec_btn_large_text);?> <a href="<?php echo esc_html($sec_btn_link);?>" class="text-style2 text-decoration-underline fw-bold"><?php echo esc_html($sec_btn_text);?></a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!--  Course style 3 End -->
			
		<?php }elseif($se_style == '4'){ ?>

		<!--  Course style 4 -->
		<section class="section-padding bg-grey pb-70">
			<div class="container-fluid container-grid">
				<div class="row justify-content-center">
					<div class="col-xl-8">
						<div class="heading mb-100 text-center">
							<span class="subheading"><?php echo edumel_wp_kses($sec_content);?></span>
							<h2><?php echo edumel_wp_kses($sec_title);?></h2>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">

				<?php
						// WP_Query arguments
						$args = array(
							'post_type'              => array( 'courses' ),
							'posts_per_page'         => $number_posts,
						);

						// The Query
						$edumel_popular_course_query = new WP_Query( $args );

						// The Loop
						if ( $edumel_popular_course_query->have_posts() ) {
							while ( $edumel_popular_course_query->have_posts() ) {
								$edumel_popular_course_query->the_post();					
								$course_id         = get_the_ID();
								$course_students   = apply_filters( 'tutor_course_students', tutor_utils()->count_enrolled_users_by_course( $course_id ), $course_id );							
								$course_duration    = get_tutor_course_duration_context( $course_id );
								$course_categories = get_tutor_course_categories( $course_id );
								$profile_url       = tutor_utils()->profile_url( $authordata->ID, true );
							?>

							<div class="col-xl col-lg-3 col-md-6">
								<div class="course-grid course-style-4 bg-white mb-80 mb-xl-0">
									<div class="course-header">
										<div class="course-thumb">
											<?php the_post_thumbnail('edumel_course');?>
										</div>
									</div>
					
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
										<div class="d-flex align-items-center">
											<div class="author me-3">
												<?php echo get_avatar( get_the_author_meta('email') , 90 ); ?>
												<?php esc_html_e('By' , 'edumel');?> <a href="<?php echo esc_url( $profile_url ); ?>"><?php echo esc_html( get_the_author() ); ?></a>
											</div>
									   </div>
										
										<h3 class="course-title"> <a href="<?php the_permalink();?>"><?php the_title();?></a> </h3>
										<div class="course-meta">
											<span class="duration"><i class="far fa-user-alt"></i>
											<?php
												if ( $course_duration ) {
													_e( $course_duration, 'edumel' );
												} ?>
											</span>
											<span class="lessons"><i class="far fa-play-circle me-2"></i><?php _e( tutor_utils()->get_lesson_count_by_course( $course_id ) . " Lectures", "edumel" ); ?></span>
										</div>
									</div>
								</div>
							 </div>
							<!-- COURSE END -->
		

							<?php
							}
						} else {
							// no posts found
						}

						// Restore original Post Data
						wp_reset_postdata();
					?>
					

					
				</div>

				<div class="row">
					<div class="col-xl-12">
						<div class="text-center">
							<?php echo edumel_wp_kses($sec_btn_large_text);?>
							<a href="<?php echo esc_html($sec_btn_link);?>" class="text-style2 text-decoration-underline fw-bold"><?php echo esc_html($sec_btn_text);?></a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--  Course style 4 End -->	
		
		<?php }else{ ?>

			<!--  Course style 1 -->
			<section class="course-wrapper section-padding ">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-xl-8">
							<div class="section-heading mb-70 text-center">
								<h2 class="font-lg"><?php echo edumel_wp_kses($sec_title);?></h2>
								<p><?php echo edumel_wp_kses($sec_content);?></p>
							</div>
						</div>
					</div>

					<div class="row justify-content-lg-center">

					<?php
						// WP_Query arguments
						$args = array(
							'post_type'              => array( 'courses' ),
							'posts_per_page'         => $number_posts,
						);

						// The Query
						$edumel_popular_course_query = new WP_Query( $args );

						// The Loop
						if ( $edumel_popular_course_query->have_posts() ) {
							while ( $edumel_popular_course_query->have_posts() ) {
								$edumel_popular_course_query->the_post();					
								$course_id         = get_the_ID();
								$course_students   = apply_filters( 'tutor_course_students', tutor_utils()->count_enrolled_users_by_course( $course_id ), $course_id );							
								$profile_url       = tutor_utils()->profile_url( $authordata->ID, true );
								$course_duration    = get_tutor_course_duration_context( $course_id )
							?>
							
							<div class="col-xl-4 col-lg-4 col-md-6">
								<div class="course-grid bg-shadow tooltip-style">
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
										<div class="rating mb-10">
											<?php
											$course_rating = tutor_utils()->get_course_rating( $course_id );
											tutor_utils()->star_rating_generator( $course_rating->rating_avg ); ?>

											<span><?php echo $course_rating->rating_avg;?> (<?php esc_html_e( $course_rating->rating_count ); ?> <?php esc_html_e('reviews' , 'edumel');?>)</span>
										</div>

										<h3 class="course-title mb-20"> <a href="<?php the_permalink();?>"><?php the_title();?></a> </h3>

										<div class="course-footer mt-20 d-flex align-items-center justify-content-between ">
											<span class="duration"><i class="far fa-clock me-2"></i>
												<?php
												if ( $course_duration ) {
													_e( $course_duration, 'edumel' );
												} ?>
											</span>
											<span class="students"><i class="far fa-user-alt me-2"></i> <?php echo esc_html( $course_students ); ?> <?php echo esc_html__('Students' , 'edumel');?></span>
											<span class="lessons"><i class="far fa-play-circle me-2"></i> <?php _e( tutor_utils()->get_lesson_count_by_course( $course_id ) . " Lessons", "edumel" ); ?></span>
										</div>
									</div>
					
									<div class="course-hover-content">
										<div class="price">
											<?php
												$price = tutor_utils()->get_course_price();
											if ( null === $price ) {
												esc_html_e( 'Free', 'edumel' );
											} else {
												echo wp_kses_post( tutor_utils()->get_course_price() );
											}
											?>											
										</div>
										<h3 class="course-title mb-20 mt-30"> <a href="<?php the_permalink();?>"><?php the_title();?></a></h3>
										<div class="course-meta d-flex align-items-center mb-20">
											<div class="author me-4">
												<?php echo get_avatar( get_the_author_meta('email') , 90 ); ?>
												<a href="<?php echo esc_url( $profile_url ); ?>"><?php echo esc_html( get_the_author() ); ?></a>
										
											</div>
											<span class="lesson"> <i class="far fa-file-alt"></i> <?php _e( tutor_utils()->get_lesson_count_by_course( $course_id ) . " Lessons", "edumel" ); ?></span>
										</div>
										<p class="mb-20"><?php echo edumel_trip_content(15); ?></p>
										<a href="<?php the_permalink();?>" class="btn btn-grey btn-sm rounded"><?php echo esc_html_e('Join Now' , 'edumel');?> <i class="fal fa-angle-right"></i></a>
									</div>
								</div>
							 </div>
							<!-- COURSE END -->
						

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
			</section>

			<!--  Course style 1 End -->
			
		<?php } ?>



<?php


	}

}
