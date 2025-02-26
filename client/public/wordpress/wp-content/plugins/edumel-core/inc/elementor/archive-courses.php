<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelArchiveCoursesWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-archive-courses';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Archive Courses' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_archive_courses',
			[
				'label' => esc_html__( 'Archive Courses', 'edumel' ),
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
				],
			]
		);
		

		$this->add_control(
			'se_num_post',
			[
				'label' => esc_html__( 'Pagination number of Post', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '6',
				
			]
		);
		
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$se_style = $this->get_settings_for_display( 'se_style' );
		$se_num_post = $this->get_settings_for_display( 'se_num_post' );
		global $post, $authordata;
		?>
<section class="section-padding course">

   <div class="container">
        <div class="row">
			<?php		
		$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
		$args = array(
			'post_type' => 'courses',
			'posts_per_page' => $se_num_post,
			'paged' => $paged
		);
		$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post();
		$course_id         = get_the_ID();
		$course_students   = apply_filters( 'tutor_course_students', tutor_utils()->count_enrolled_users_by_course( $course_id ), $course_id );
		$course_duration = get_tutor_course_duration_context( $course_id, true );
		$course_categories = get_tutor_course_categories( $course_id );	
		$profile_url       = tutor_utils()->profile_url( $authordata->ID, true );
			if($se_style == '2'){
				
			?>
				<div class="col-xl-4 col-lg-6 col-md-6">
					<div class="course-grid course-style-4 bg-white mb-80">
						<div class="course-header">
							<div class="course-thumb">
								<?php the_post_thumbnail('edumel_course');?>
							</div>
						</div>

						<div class="course-content">
							<span class="course-price">
								<?php
									$price = tutor_utils()->get_course_price();
								if ( null === $price ) {
									esc_html_e( 'Free', 'tutor' );
								} else {
									echo wp_kses_post( tutor_utils()->get_course_price() );
								}
								?>							
							</span>

						   <div class="d-flex align-items-center">
								<div class="author me-3">
									<?php echo get_avatar( get_the_author_meta('email') , 90 ); ?>
									<a href="<?php echo esc_url( $profile_url ); ?>"><?php echo esc_html( get_the_author() ); ?></a>
								</div>
						   </div>
							
							<h3 class="course-title"><a href="<?php the_permalink();?>"><?php echo the_title();?></a></h3>
							<div class="course-meta">
								<span class="duration"><i class="far fa-user-alt"></i><?php
												if ( $course_duration ) {
													_e( $course_duration, 'edumel' );
												} ?></span>
								<span class="lessons"><i class="far fa-play-circle me-2"></i><?php _e( tutor_utils()->get_lesson_count_by_course( $course_id ) . " Lectures", "edumel" ); ?></span>
							</div>
						</div>
					</div>
				</div>		
				
			<?php
			}elseif($se_style == '3'){ ?>
			
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


			<?php }else{ ?>
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
			<?php }
		
		endwhile;
			?>
			
			
<div class="navigation pagination cours_pag text-center">
     <?php
     $big = 999999999;
     echo paginate_links( array(
          'base' => str_replace( $big, '%#%', get_pagenum_link( $big ) ),
          'format' => '?paged=%#%',
          'current' => max( 1, get_query_var('paged') ),
          'total' => $loop->max_num_pages,
          'prev_text' => '&laquo;',
          'next_text' => '&raquo;'
     ) );
?>
</div>
<?php wp_reset_postdata(); ?>
       </div>
		
    </div>
</section>
		<?php


	}

}
