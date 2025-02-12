<?php
/**
 * Template for displaying single course
 *
 * @package Tutor\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 1.0.0
 */

$course_id     = get_the_ID();
$course_rating = tutor_utils()->get_course_rating( $course_id );
$is_enrolled   = tutor_utils()->is_enrolled( $course_id, get_current_user_id() );

// Prepare the nav items.
$course_nav_item = apply_filters( 'tutor_course/single/nav_items', tutor_utils()->course_nav_items(), $course_id );
$is_public       = \TUTOR\Course_List::is_public( $course_id );
$is_mobile       = wp_is_mobile();

$enrollment_box_position = tutor_utils()->get_option( 'enrollment_box_position_in_mobile', 'bottom' );
if ( '-1' === $enrollment_box_position ) {
	$enrollment_box_position = 'bottom';
}
$student_must_login_to_view_course = tutor_utils()->get_option( 'student_must_login_to_view_course' );

tutor_utils()->tutor_custom_header();

if ( ! is_user_logged_in() && ! $is_public && $student_must_login_to_view_course ) {
	tutor_load_template( 'login' );
	tutor_utils()->tutor_custom_footer();
	return;
}
edumel_single_course_banner();
?>

<section class="page-wrapper edutim-course-single edutim-course-content">
<?php do_action( 'tutor_course/single/before/wrap' ); ?>
<div <?php tutor_post_class( 'tutor-full-width-course-top tutor-course-top-info tutor-page-wrap tutor-wrap-parent' ); ?>>
	<div class="tutor-course-details-page container">
		<div class="row tutor-gx-xl-5">
			<main class="col-lg-7 col-xl-8">
				<?php tutor_utils()->has_video_in_single() ? tutor_course_video() : get_tutor_course_thumbnail(); ?>
				<?php do_action( 'tutor_course/single/before/inner-wrap' ); ?>
				<?php ( isset( $is_enrolled ) && $is_enrolled ) ? tutor_course_enrolled_lead_info() : tutor_course_lead_info(); ?>
				<?php if ( $is_mobile && 'top' === $enrollment_box_position ) : ?>
					<div class="tutor-mt-32">
						<?php tutor_load_template( 'single.course.course-entry-box' ); ?>
					</div>
				<?php endif; ?>

				<div class="tutor-course-details-tab tutor-mt-32">
					<?php if ( is_array( $course_nav_item ) && count( $course_nav_item ) > 1 ) : ?>
						<div class="tutor-is-sticky">
							<?php tutor_load_template( 'single.course.enrolled.nav', array( 'course_nav_item' => $course_nav_item ) ); ?>
						</div>
					<?php endif; ?>
					<div class="tutor-tab tutor-pt-24">
						<?php foreach ( $course_nav_item as $key => $subpage ) : ?>
							<div id="tutor-course-details-tab-<?php echo esc_attr( $key ); ?>" class="tutor-tab-item<?php echo 'info' == $key ? ' is-active' : ''; ?>">
								<?php
									do_action( 'tutor_course/single/tab/' . $key . '/before' );

									$method = $subpage['method'];
								if ( is_string( $method ) ) {
									$method();
								} else {
									$_object = $method[0];
									$_method = $method[1];
									$_object->$_method( get_the_ID() );
								}

									do_action( 'tutor_course/single/tab/' . $key . '/after' );
								?>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
				<?php do_action( 'tutor_course/single/after/inner-wrap' );?>
				
				<?php $instructors = tutor_utils()->get_instructors_by_course();?>
						<h4 class="mb-4 mt-5">
						<?php 
						
						count( $instructors ) > 1 ? _e( 'Your Instructors', 'edumel' ) : _e( 'Your Instructor', 'edumel' ); ?>
						</h4>
						<?php 

						
						
						foreach ( $instructors as $instructor ) {
		
						$avatar            = wp_get_attachment_image( $instructor->tutor_profile_photo, 'full' );
						$name              = $instructor->display_name ;
						$sub_title         = $instructor->tutor_profile_job_title ;
						$bio               = $instructor->tutor_profile_bio;
						$profile_url      = tutor_utils()->profile_url( $instructor->ID, true ); 

						$teacher_metadata = get_user_meta( $instructor->ID );
						$facebook   = get_user_meta($instructor->ID, '_tutor_profile_facebook',true ) ;
						$twitter   = get_user_meta($instructor->ID, '_tutor_profile_twitter',true ) ;
						$linkedin   = get_user_meta($instructor->ID, '_tutor_profile_linkedin',true ) ;
						$website   = get_user_meta($instructor->ID, '_tutor_profile_website',true ) ;
						$github   = get_user_meta($instructor->ID, '_tutor_profile_github',true ) ;
						?>
						<div class="single-instructor-box mb-5">
							<div class="row align-items-center">	
								<div class="col-lg-4 col-md-4">
									<div class="instructor-image">										
										<?php echo edumel_wp_kses($avatar); ?>
									</div>
								</div>

								<div class="col-lg-8 col-md-8">
									<div class="instructor-content">
										<h4><a href="<?php echo esc_url($profile_url); ?>"><?php echo esc_html($name); ?></a></h4>
										<span class="sub-title"><?php echo esc_html($sub_title); ?></span>
										
										<p><?php echo edumel_wp_kses($bio); ?></p>
										
										
										<div class="intructor-social-links">
											<span class="me-2"><?php esc_html_e('Follow Me:' , 'edumel');?> </span>					
												<?php if($facebook){ ?>
												<a href="<?php echo esc_url($facebook);?>"> <i class="fab fa-facebook-f"></i></a>
												<?php } if($twitter){ ?>
												<a href="<?php echo esc_url($twitter);?>"> <i class="fab fa-twitter"></i></a>
												<?php } if($linkedin){ ?>
												<a href="<?php echo esc_url($linkedin);?>"> <i class="fab fa-linkedin-in"></i></a>
												<?php } if($website){ ?>
												<a href="<?php echo esc_url($website);?>"> <i class="fas fa-globe"></i></a>
												<?php } if($github){ ?>
												<a href="<?php echo esc_url($github);?>"> <i class="fab fa-github"></i></a>
												<?php } ?>
										</div>
									
									</div>
								</div>
							</div>
						</div>
						<?php } ?>
									
			</main>

			<aside class="col-lg-5 col-xl-4">
				<?php $sidebar_attr = apply_filters( 'tutor_course_details_sidebar_attr', '' ); ?>
				<div class="tutor-single-course-sidebar tutor-mt-40 tutor-mt-xl-0 course-sidebar" <?php echo esc_attr( $sidebar_attr ); ?> >
					<div class="course-widget course-details-info">
						<?php do_action( 'tutor_course/single/before/sidebar' ); ?>

						<?php if ( ( $is_mobile && 'bottom' === $enrollment_box_position ) || ! $is_mobile ) : ?>
							<?php tutor_load_template( 'single.course.course-entry-box' ); ?>
						<?php endif ?>

						<div class="tutor-single-course-sidebar-more tutor-mt-24">
							<?php tutor_course_instructors_html(); ?>
							<?php tutor_course_requirements_html(); ?>
							<?php tutor_course_tags_html(); ?>
							<?php tutor_course_target_audience_html(); ?>
						</div>
					</div>

				<div class="course-latest">
					<h4 class="mb-4"><?php esc_html_e('Popular Courses' , 'edumel');?></h4>
					<ul class="recent-posts course-popular">

					<?php
						$popular_post = edumel_setPostViews(get_the_ID());	
						// WP_Query arguments
						$args = array(
							
							'post_type'              => array( 'courses' ),
							'posts_per_page'         => '3',
							'meta_key'         => $popular_post,
							'orderby' => 'meta_value_num',	
							'order' => 'DESC',	
						);

						// The Query
						$edumel_rel_course_query = new WP_Query( $args );

						// The Loop
						if ( $edumel_rel_course_query->have_posts() ) {
							while ( $edumel_rel_course_query->have_posts() ) {
								$edumel_rel_course_query->the_post();															
								?>
								
								<li>
									<div class="widget-post-thumb">
										<a href="<?php the_permalink();?>"><?php the_post_thumbnail('edumel_course_popurlar');?></a>
									</div>
									<div class="widget-post-body">
										<h6><a href="<?php the_permalink();?>"><?php echo the_title();?></a></h6>
										<h5>
											<?php
												$price = tutor_utils()->get_course_price();
											if ( null === $price ) {
												esc_html_e( 'Free', 'edumel' );
											} else {
												echo wp_kses_post( tutor_utils()->get_course_price() );
											}
											?>										
										</h5>
									</div>
								</li>
								
								<?php

							}
						} else {
							// no posts found
						}

						// Restore original Post Data
						wp_reset_postdata();
						
						
					?>	
					
						

						
					</ul>
					<?php do_action( 'tutor_course/single/after/sidebar' ); ?>
				</div>
				</div>
			</aside>
		</div>
	</div>
</div>
</section>
<?php do_action( 'tutor_course/single/after/wrap' ); ?>

<section class="section-padding related-course bg-grey">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="section-heading">
                    <h4 class="mb-4"><?php echo esc_html__('Related Courses You may Like' ,'edumel');?></h4>
                </div>
            </div>
        </div>

        <div class="row">

				<?php

				// WP_Query arguments
				$args = array(
					'post_type'              => array( 'courses' ),
					'posts_per_page'         => '3',
					'post__not_in'    => array(get_the_ID()),
				);

				// The Query
				$edumel_rel_course_query = new WP_Query( $args );

				// The Loop
				if ( $edumel_rel_course_query->have_posts() ) {
					while ( $edumel_rel_course_query->have_posts() ) {
						$edumel_rel_course_query->the_post();								

						$course_id         = get_the_ID();
						$course_students   = apply_filters( 'tutor_course_students', tutor_utils()->count_enrolled_users_by_course( $course_id ), $course_id );
						$course_lesson = get_post_meta(get_the_ID(),'_edumel_course_lesson', true);
						$course_duration = get_tutor_course_duration_context( $course_id, true );							
						?>

						<div class="col-xl-4 col-lg-4">
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
										<span class="lessons"><i class="far fa-play-circle me-2"></i><?php echo esc_html( tutor_utils()->get_lesson_count_by_course( $course_id ) );  ?> <?php echo esc_html__('Lectures' , 'edumel');?> </span>
										<span class="label"> <?php echo get_tutor_course_level( get_the_ID() );?></span>
									</div>
									<h4><a href="<?php the_permalink();?>"><?php echo the_title();?></a></h4>
								
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
</section>
<?php
tutor_utils()->tutor_custom_footer();
