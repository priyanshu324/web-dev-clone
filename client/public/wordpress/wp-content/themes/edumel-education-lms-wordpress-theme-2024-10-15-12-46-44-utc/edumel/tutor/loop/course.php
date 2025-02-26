<?php
/**
 * A single course loop
 *
 * @package Tutor\Templates
 * @subpackage CourseLoopPart
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 1.4.3
 */
 
$course_id         = get_the_ID();
$course_students   = apply_filters( 'tutor_course_students', tutor_utils()->count_enrolled_users_by_course( $course_id ), $course_id );
$course_lesson = get_post_meta(get_the_ID(),'_edumel_course_lesson', true);
$course_duration = get_tutor_course_duration_context( $course_id, true );

?>
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
					