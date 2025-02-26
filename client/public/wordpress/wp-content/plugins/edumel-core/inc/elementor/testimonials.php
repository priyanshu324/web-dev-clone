<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelTestimonialsWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-testimonials';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Testimonials' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_testimonials',
			[
				'label' => esc_html__( 'Testimonials', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'sec_style',
			[
				'label' => esc_html__( 'Style', 'edumel' ),
				'type' => \Elementor\Controls_Manager::SELECT ,
				'default' => '1',
				'options' => [
					'1'  => esc_html__( '1', 'edumel' ),
					'2' => esc_html__( '2', 'edumel' ),
					'3' => esc_html__( '3', 'edumel' ),
					'4' => esc_html__( '4', 'edumel' ),

				],
				
			]
		);	

		
		$this->add_control(
			'sec_subtitle', [
				'label' => esc_html__( 'Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'default' => 'Students Feedback ',

			]
		);	
		
		$this->add_control(
			'sec_title', [
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'default' => 'Our Students Says',

			]
		);	
			
		$this->add_control(
			'sec_content', [
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'label_block' => true,
				'default' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium officia cupiditate .',

			]
		);	
		
		$this->add_control(
			'sec_btn_text', [
				'label' => esc_html__( 'Button Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'default' => 'Join Now',
			]
		);	
				
		$this->add_control(
			'sec_btn_link', [
				'label' => esc_html__( 'Button Link', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'default' => '#',
			]
		);		
		
		$this->add_control(
			'sec_numb_of_post', [
				'label' => esc_html__( 'Number of Post', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'default' => '-1',
			]
		);	
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_style = $this->get_settings_for_display( 'sec_style' );
		$sec_subtitle = $this->get_settings_for_display( 'sec_subtitle' );
		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_content = $this->get_settings_for_display( 'sec_content' );
		$sec_btn_text = $this->get_settings_for_display( 'sec_btn_text' );
		$sec_btn_link = $this->get_settings_for_display( 'sec_btn_link' );
		$sec_numb_of_post = $this->get_settings_for_display( 'sec_numb_of_post' );
		
		if($sec_style == '2'){ ?>
		<!-- Testimonial section start -->
		<section class="testimonial-2 section-padding-top pb-70 ">
			<div class="container">
				<div class="row ">
					<div class="col-xl-4">
						<div class="section-heading mb-5 mb-xl-0">
							<span class="subheading"><?php echo esc_html($sec_subtitle);?></span>
							<h2 class="font-lg mb-10"><?php echo edumel_wp_kses($sec_title);?></h2>
							<p class="mb-20"><?php echo edumel_wp_kses($sec_content);?></p>
							<?php if($sec_btn_link){ ?>
							<a href="<?php echo esc_url($sec_btn_link);?>" class="btn btn-main rounded"><?php echo esc_html($sec_btn_text);?></a>
							<?php } ?>
						</div>
					</div>
					<div class="col-lg-12 col-xl-8">
						<div class="testimonials-slides-2 owl-carousel owl-theme">
						<?php
							// WP_Query arguments
							$args = array(
								'post_type'              => array( 'testimonials' ),
								'posts_per_page'         => $sec_numb_of_post,
							);

							// The Query
							$edumel_testi_query = new WP_Query( $args );

							// The Loop
							if ( $edumel_testi_query->have_posts() ) {
								while ( $edumel_testi_query->have_posts() ) {
									$edumel_testi_query->the_post(); 
									$edumel_test_designation = get_post_meta(get_the_ID(), '_edumel_test_designation', true);
									
									?>
									<div class="testimonial-item">
									   <div class="testimonial-inner">
										   <div class="quote-icon"><i class="flaticon-left-quote"></i></div>
										   
											<div class="testimonial-text mb-30">
												<?php the_content();?>
											</div>

											<div class="client-info d-flex align-items-center">
												<div class="client-img">
													<?php the_post_thumbnail('edumel_testi');?>
												</div>
												<div class="testimonial-author">
													<h4><?php the_title();?></h4>
													<span class="meta"><?php echo esc_html($edumel_test_designation);?></span>
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
				</div>
			</div>
		</section>
		<!-- Testimonial section End -->		
		<?php }elseif($sec_style == '3'){ ?>

		<!-- Testimonial section start -->
		<section class="testimonial section-padding">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-6">
						<div class="section-heading text-center mb-50">
							<span class="subheading"><?php echo esc_html($sec_subtitle);?></span>
							<h2 class="font-lg"><?php echo edumel_wp_kses($sec_title);?></h2>
						</div>
					</div>
				</div>
				<div class="row align-items-center">
					<div class="col-lg-12 col-xl-12">
						<div class="testimonials-slides owl-carousel owl-theme">


						<?php
							// WP_Query arguments
							$args = array(
								'post_type'              => array( 'testimonials' ),
								'posts_per_page'         => $sec_numb_of_post,
							);

							// The Query
							$edumel_testi_query = new WP_Query( $args );

							// The Loop
							if ( $edumel_testi_query->have_posts() ) {
								while ( $edumel_testi_query->have_posts() ) {
									$edumel_testi_query->the_post(); 
									$edumel_test_designation = get_post_meta(get_the_ID(), '_edumel_test_designation', true);
									
									?>
									
									<div class="testimonial-item">
									   <div class="testimonial-inner">
										   <div class="quote-icon"><i class="flaticon-left-quote"></i></div>
										   
											<div class="testimonial-text mb-30">
												<?php the_content();?>
											</div>

											<div class="client-info d-flex align-items-center">
												<div class="client-img">
													<?php the_post_thumbnail('edumel_testi');?>
												</div>
												<div class="testimonial-author">
													<h4><?php the_title();?></h4>
													<span class="meta"><?php echo esc_html($edumel_test_designation);?></span>
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
				</div>
			</div>
		</section>
		<!-- Testimonial section End -->
		
		<?php }elseif($sec_style == '4'){ ?>
		<!-- Testimonial section start -->
		<section class="testimonial section-padding">
			<div class="container-fluid container-grid">
				<div class="row justify-content-center">
					<div class="col-xl-6">
						<div class="section-heading text-center mb-50">
							<span class="subheading"><?php echo esc_html($sec_subtitle);?></span>
							<h2 class="font-lg"><?php echo edumel_wp_kses($sec_title);?></h2>
						</div>
					</div>
				</div>
				<div class="row align-items-center">
					<div class="col-lg-12 col-xl-12">
						<div class="testimonials-slides-3 owl-carousel owl-theme">

						<?php
							// WP_Query arguments
							$args = array(
								'post_type'              => array( 'testimonials' ),
								'posts_per_page'         => $sec_numb_of_post,
							);

							// The Query
							$edumel_testi_query = new WP_Query( $args );

							// The Loop
							if ( $edumel_testi_query->have_posts() ) {
								while ( $edumel_testi_query->have_posts() ) {
									$edumel_testi_query->the_post(); 
									$edumel_test_designation = get_post_meta(get_the_ID(), '_edumel_test_designation', true);
									
									?>

										<div class="testimonial-item">
										   <div class="testimonial-inner">
											   <div class="quote-icon"><i class="flaticon-left-quote"></i></div>
											   
												<div class="testimonial-text mb-30">
													<?php the_content();?>
												</div>

												<div class="client-info d-flex align-items-center">
													<div class="client-img">
														<?php the_post_thumbnail('edumel_testi');?>
													</div>
													<div class="testimonial-author">
														<h4><?php the_title();?></h4>
														<span class="meta"><?php echo esc_html($edumel_test_designation);?></span>
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
				</div>
			</div>
		</section>
		<!-- Testimonial section End -->			
		<?php }else{ ?>
		<!-- Testimonial section start -->
		<section class="testimonial-4 section-padding bg-gray">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-6">
						<div class="section-heading text-center mb-50">
							<h2 class="font-lg"><?php echo esc_html($sec_subtitle);?></h2>
							<p><?php echo edumel_wp_kses($sec_title);?></p>
						</div>
					</div>
				</div>
				<div class="row align-items-center">
					<div class="col-lg-12 col-xl-12">
						<div class="testimonials-slides owl-carousel owl-theme">

						<?php
							// WP_Query arguments
							$args = array(
								'post_type'              => array( 'testimonials' ),
								'posts_per_page'         => $sec_numb_of_post,
							);

							// The Query
							$edumel_testi_query = new WP_Query( $args );

							// The Loop
							if ( $edumel_testi_query->have_posts() ) {
								while ( $edumel_testi_query->have_posts() ) {
									$edumel_testi_query->the_post(); 
									$edumel_test_designation = get_post_meta(get_the_ID(), '_edumel_test_designation', true);
									
									?>

										<div class="testimonial-item">
										   <div class="testimonial-inner">
											   <div class="quote-icon"><i class="flaticon-left-quote"></i></div>
											   
												<div class="testimonial-text mb-30">
													<?php the_content();?>
												</div>

												<div class="client-info d-flex align-items-center">
													<div class="client-img">
														<?php the_post_thumbnail('edumel_testi');?>
													</div>
													<div class="testimonial-author">
														<h4><?php the_title();?></h4>
														<span class="meta"><?php echo esc_html($edumel_test_designation);?></span>
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
				</div>
			</div>
		</section>
		<!-- Testimonial section End -->			
		<?php }  ?>
		

		
		<?php 

	}

}
