<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelInstructorWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-category';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Instructor' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_instructor',
			[
				'label' => esc_html__( 'Instructor', 'edumel' ),
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
			'sec_subtitle',
			[
				'label' => esc_html__( 'Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam',
			]
		);		

		
		$this->add_control(
			'sec_title',
			[
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Top Rated Instructors',
			]
		);	
		
		$this->add_control(
			'sec_btn_text',
			[
				'label' => esc_html__( 'Button Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'All Instructors ',
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
				'label' => esc_html__( 'Number of Post', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '5',
			]
		);	
		
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$se_style = $this->get_settings_for_display( 'se_style' );
		$sec_subtitle = $this->get_settings_for_display( 'sec_subtitle' );
		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_btn_text = $this->get_settings_for_display( 'sec_btn_text' );
		$sec_btn_link = $this->get_settings_for_display( 'sec_btn_link' );
		$number_posts = $this->get_settings_for_display( 'number_posts' );

		global $post, $authordata;
		
		if($se_style == '2'){ ?>
		
		<section class="team section-padding">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8 col-xl-6">
						<div class="section-heading text-center mb-70">
							<span class="subheading"><?php echo edumel_wp_kses($sec_subtitle);?></span>
							<h2 class="font-lg"><?php echo edumel_wp_kses($sec_title);?></h2>
						</div>
					</div>
				</div>

				<div class="row">
					<?php
					// WP_User_Query arguments
					$args = array(
						'role'           => 'tutor_instructor',
						'number'         => $number_posts,
						'order'          => 'ASC',
					);
					// The User Query
					$instructor_data    = get_users( $args );
					foreach ( $instructor_data as $instructor ) {
						
					$teacher_metadata = get_user_meta( $instructor->ID );
					$profile_url      = tutor_utils()->profile_url( $instructor->ID, true ); 
					$thumb            = isset( $teacher_metadata['_tutor_profile_photo'] ) ? wp_get_attachment_image( $teacher_metadata['_tutor_profile_photo'][0], 'full' ) : '';
					$name             = isset( $teacher_metadata['nickname'] ) ? '<h4><a href=' . $profile_url . '>' . $teacher_metadata['nickname'][0] . '</a></h4>' : '';
					$designation      = isset( $teacher_metadata['_tutor_profile_job_title'] ) ? '<p>' . $teacher_metadata['_tutor_profile_job_title'][0] . '</p>' : ''; '';
					$course_count      = tutor_utils()->get_course_count_by_instructor( $instructor->ID );
					$student_count     = tutor_utils()->get_total_students_by_instructor( $instructor->ID );
					$course_count_out  = sprintf( _n( '%s Course', '%s Courses', $course_count, 'edhub-core' ), $course_count );
					$student_count_out = sprintf( _n( '%s Student', '%s Students', $student_count, 'edhub-core' ), $student_count );
					$facebook   = get_user_meta($instructor->ID, '_tutor_profile_facebook',true ) ;
					$twitter   = get_user_meta($instructor->ID, '_tutor_profile_twitter',true ) ;
					$linkedin   = get_user_meta($instructor->ID, '_tutor_profile_linkedin',true ) ;
					$website   = get_user_meta($instructor->ID, '_tutor_profile_website',true ) ;
					$github   = get_user_meta($instructor->ID, '_tutor_profile_github',true ) ;

					?>
					<div class="col-lg-3 col-md-6 col-sm-6">
						<div class="team-item mb-5 mb-lg-0">
							<div class="team-img">
								<?php echo $thumb; ?>
								<ul class="team-socials list-inline">
									<?php if($facebook){ ?>
									<li class="list-inline-item"><a href="<?php echo esc_url($facebook);?>"> <i class="fab fa-facebook-f"></i></a></li>
									<?php } if($twitter){ ?>
									<li class="list-inline-item"><a href="<?php echo esc_url($twitter);?>"> <i class="fab fa-twitter"></i></a></li>
									<?php } if($linkedin){ ?>
									<li class="list-inline-item"><a href="<?php echo esc_url($linkedin);?>"> <i class="fab fa-linkedin-in"></i></a></li>
									<?php } if($website){ ?>
									<li class="list-inline-item"><a href="<?php echo esc_url($website);?>"> <i class="fas fa-globe"></i></a></li>
									<?php } if($github){ ?>
									<li class="list-inline-item"><a href="<?php echo esc_url($github);?>"> <i class="fab fa-github"></i></a></li>
									<?php } ?>
								</ul>
							</div>
							<div class="team-content">
								<div class="team-info">
									<?php echo $name . $designation; ?>
								</div>

								<div class="course-meta">
									<span class="duration"><i class="far fa-user-alt"></i><?php echo esc_attr( $student_count_out ); ?></span>
									<span class="lessons"><i class="far fa-play-circle me-2"></i><?php echo esc_attr( $course_count_out ); ?></span>
								</div>
							</div>
						</div>
					</div>
					

					<?php
				} ?>
				

				</div>
			</div>
		</section>		
		<?php }elseif($se_style == '3'){ ?>
		
		<div class="row ">
			<?php
			// WP_User_Query arguments
			$args = array(
				'role'           => 'tutor_instructor',
				'number'         => $number_posts,
				'order'          => 'ASC',
			);
			// The User Query
			$instructor_data    = get_users( $args );
			foreach ( $instructor_data as $instructor ) {
				
			$teacher_metadata = get_user_meta( $instructor->ID );
			$profile_url      = tutor_utils()->profile_url( $instructor->ID, true ); 
			$thumb            = isset( $teacher_metadata['_tutor_profile_photo'] ) ? wp_get_attachment_image( $teacher_metadata['_tutor_profile_photo'][0], 'full' ) : '';
			$name             = isset( $teacher_metadata['nickname'] ) ? '<h4><a href=' . $profile_url . '>' . $teacher_metadata['nickname'][0] . '</a></h4>' : '';
			$designation      = isset( $teacher_metadata['_tutor_profile_job_title'] ) ? '<p>' . $teacher_metadata['_tutor_profile_job_title'][0] . '</p>' : ''; '';
			$course_count      = tutor_utils()->get_course_count_by_instructor( $instructor->ID );
			$student_count     = tutor_utils()->get_total_students_by_instructor( $instructor->ID );
			$course_count_out  = sprintf( _n( '%s Course', '%s Courses', $course_count, 'edhub-core' ), $course_count );
			$student_count_out = sprintf( _n( '%s Student', '%s Students', $student_count, 'edhub-core' ), $student_count );
			$facebook   = get_user_meta($instructor->ID, '_tutor_profile_facebook',true ) ;
			$twitter   = get_user_meta($instructor->ID, '_tutor_profile_twitter',true ) ;
			$linkedin   = get_user_meta($instructor->ID, '_tutor_profile_linkedin',true ) ;
			$website   = get_user_meta($instructor->ID, '_tutor_profile_website',true ) ;
			$github   = get_user_meta($instructor->ID, '_tutor_profile_github',true ) ;

			?>
			
			<div class="col-lg-6 col-md-6 col-sm-6 instructor_style_3">
				<div class="team-item team-item-2">
					<div class="team-img">
						<?php echo $thumb; ?>
						<ul class="team-socials list-inline">
							<?php if($facebook){ ?>
							<li class="list-inline-item"><a href="<?php echo esc_url($facebook);?>"> <i class="fab fa-facebook-f"></i></a></li>
							<?php } if($twitter){ ?>
							<li class="list-inline-item"><a href="<?php echo esc_url($twitter);?>"> <i class="fab fa-twitter"></i></a></li>
							<?php } if($linkedin){ ?>
							<li class="list-inline-item"><a href="<?php echo esc_url($linkedin);?>"> <i class="fab fa-linkedin-in"></i></a></li>
							<?php } if($website){ ?>
							<li class="list-inline-item"><a href="<?php echo esc_url($website);?>"> <i class="fas fa-globe"></i></a></li>
							<?php } if($github){ ?>
							<li class="list-inline-item"><a href="<?php echo esc_url($github);?>"> <i class="fab fa-github"></i></a></li>
							<?php } ?>
						</ul>
					</div>
					<div class="team-content">
						<div class="team-info">
							<?php echo $name . $designation; ?>
						</div>
						<div class="course-meta">
							<span class="duration"><i class="far fa-user-alt"></i><?php echo esc_attr( $student_count_out ); ?></span>
							<span class="lessons"><i class="far fa-play-circle me-2"></i><?php echo esc_attr( $course_count_out ); ?></span>
						</div>
					</div>
				</div>
			</div>

			<?php
		} ?>

		</div>
	
		<?php }else{ ?>
		
			<section class="team section-padding">
				<div class="container">
					<div class="row mb-100">
						<div class="col-lg-8 col-xl-8">
							<div class="section-heading text-center text-lg-start">
								<h2 class="font-lg"><?php echo edumel_wp_kses($sec_title);?></h2>
								<p><?php echo edumel_wp_kses($sec_subtitle);?></p>
							</div>
						</div>
						<?php if($sec_btn_link){ ?>
						 <div class="col-xl-4 col-lg-4">
							<div class="text-center text-lg-end">
								<a href="<?php echo esc_url($sec_btn_link);?>" class="btn btn-main-outline rounded"><?php echo esc_html($sec_btn_text);?> <i class="fa fa-angle-right"></i></a>
							</div>
						</div>
						<?php } ?>
					</div>

					<div class="row">
					
					<?php
					// WP_User_Query arguments
					$args = array(
						'role'           => 'tutor_instructor',
						'number'         => $number_posts,
						'order'          => 'ASC',
					);
					// The User Query
					$instructor_data    = get_users( $args );
					foreach ( $instructor_data as $instructor ) {
						
					$teacher_metadata = get_user_meta( $instructor->ID );
					$profile_url      = tutor_utils()->profile_url( $instructor->ID, true ); 
					$thumb            = isset( $teacher_metadata['_tutor_profile_photo'] ) ? wp_get_attachment_image( $teacher_metadata['_tutor_profile_photo'][0], 'full' ) : '';
					$name             = isset( $teacher_metadata['nickname'] ) ? '<h4><a href=' . $profile_url . '>' . $teacher_metadata['nickname'][0] . '</a></h4>' : '';
					$designation      = isset( $teacher_metadata['_tutor_profile_job_title'] ) ? '<p>' . $teacher_metadata['_tutor_profile_job_title'][0] . '</p>' : ''; '';
					$course_count      = tutor_utils()->get_course_count_by_instructor( $instructor->ID );
					$student_count     = tutor_utils()->get_total_students_by_instructor( $instructor->ID );
					$course_count_out  = sprintf( _n( '%s Course', '%s Courses', $course_count, 'edhub-core' ), $course_count );
					$student_count_out = sprintf( _n( '%s Student', '%s Students', $student_count, 'edhub-core' ), $student_count );
					$facebook   = get_user_meta($instructor->ID, '_tutor_profile_facebook',true ) ;
					$twitter   = get_user_meta($instructor->ID, '_tutor_profile_twitter',true ) ;
					$linkedin   = get_user_meta($instructor->ID, '_tutor_profile_linkedin',true ) ;
					$website   = get_user_meta($instructor->ID, '_tutor_profile_website',true ) ;
					$github   = get_user_meta($instructor->ID, '_tutor_profile_github',true ) ;

					?>

					<div class="col-xl-3 col-lg-4 col-sm-6">
						<div class="team-item team-item-4 mb-70 mb-xl-0">
							<div class="team-img">
								<?php echo $thumb; ?>
								<ul class="team-socials list-inline">
									<?php if($facebook){ ?>
									<li class="list-inline-item"><a href="<?php echo esc_url($facebook);?>"> <i class="fab fa-facebook-f"></i></a></li>
									<?php } if($twitter){ ?>
									<li class="list-inline-item"><a href="<?php echo esc_url($twitter);?>"> <i class="fab fa-twitter"></i></a></li>
									<?php } if($linkedin){ ?>
									<li class="list-inline-item"><a href="<?php echo esc_url($linkedin);?>"> <i class="fab fa-linkedin-in"></i></a></li>
									<?php } if($website){ ?>
									<li class="list-inline-item"><a href="<?php echo esc_url($website);?>"> <i class="fas fa-globe"></i></a></li>
									<?php } if($github){ ?>
									<li class="list-inline-item"><a href="<?php echo esc_url($github);?>"> <i class="fab fa-github"></i></a></li>
									<?php } ?>
								</ul>
							</div>
							<div class="team-content">
								<div class="team-info">
									<?php echo $name . $designation; ?>
								</div>

								<div class="course-meta">
									<span class="duration"><i class="far fa-user-alt"></i><?php echo esc_attr( $student_count_out ); ?></span>
									<span class="lessons"><i class="far fa-play-circle me-2"></i><?php echo esc_attr( $course_count_out ); ?></span>
								</div>
							</div>
						</div>
					</div>

					<?php
				} ?>
				
		
					</div>
				</div>
			</section>		
		<?php } ?>
	
 	
		
<?php


	}

}
