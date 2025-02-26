<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelBannerWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-banner';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Banner' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_banner',
			[
				'label' => esc_html__( 'Banner', 'edumel' ),
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

				],
				
			]
		);	

		$this->add_control(
			'sec_bg_color',
			[
				'label' => esc_html__( 'Background Color', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR ,
				'default' => '#2F2D51',
				'selectors' => [
					'{{WRAPPER}} .banner-style-4' => 'background: {{VALUE}}',
					'{{WRAPPER}} .banner-style-2' => 'background: {{VALUE}}',
				],
			]
		);	
		
		$this->add_control(
			'sec_subheading_color',
			[
				'label' => esc_html__( 'Subheading Color', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR ,
				'default' => '#015ABD',
				'selectors' => [
					'{{WRAPPER}} .banner-style-3 .subheading' => 'color: {{VALUE}}',
				],
			]
		);			
		
		$this->add_control(
			'sec_text_color',
			[
				'label' => esc_html__( 'Text Color', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR ,
				'default' => '#fff',
				'selectors' => [
					'{{WRAPPER}} .banner-style-4 .banner-content .subheading' => 'color: {{VALUE}}',
					'{{WRAPPER}} .banner-style-4 .banner-content h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .banner-style-4 .banner-content p' => 'color: {{VALUE}}',
					'{{WRAPPER}} .banner-style-2 .banner-content .subheading' => 'color: {{VALUE}}',
					'{{WRAPPER}} .banner-style-2 .banner-content h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .banner-style-2 .banner-content p' => 'color: {{VALUE}}',
					'{{WRAPPER}} .banner-style-3 .banner-content h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .banner-style-3 .banner-content p' => 'color: {{VALUE}}',
				],
			]
		);	
		
		$this->add_control(
			'sec_bgimage',
			[
				'label' => esc_html__( 'Background', 'edumel' ),
				'type' => \Elementor\Controls_Manager::MEDIA ,

			]
		);		
		
		$this->add_control(
			'sec_secimage',
			[
				'label' => esc_html__( 'Section Image - 700*480', 'edumel' ),
				'type' => \Elementor\Controls_Manager::MEDIA ,

			]
		);	
		
		$this->add_control(
			'sec_subtitle',
			[
				'label' => esc_html__( 'Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => ' Over 3000 Course Available ',
			]
		);	
		
		$this->add_control(
			'sec_title',
			[
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Upgrade your learning Skills & Upgrade your life',
			]
		);			
		
		$this->add_control(
			'sec_animation_text',
			[
				'label' => esc_html__( 'Animation Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => '	<b class="is-visible">design</b>
								<b>coding</b>
								<b>develop</b>',
			]
		);	
		
		$this->add_control(
			'sec_content',
			[
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam libero magni reiciendis quam ipsa blanditiis, facilis velit eaque illo?',
			]
		);			
		
		$this->add_control(
			'sec_1st_btn_text',
			[
				'label' => esc_html__( 'First Button Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Find Courses',
			]
		);			
		
		$this->add_control(
			'sec_1st_btn_link',
			[
				'label' => esc_html__( 'First Button Link', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '# ',
			]
		);		
		
		$this->add_control(
			'sec_2nd_btn_text',
			[
				'label' => esc_html__( '2nd Button Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Get Started',
			]
		);			
		
		$this->add_control(
			'sec_2nd_btn_link',
			[
				'label' => esc_html__( 'First Button Link', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '# ',
			]
		);	
		
		$this->end_controls_section();


	}
	
	protected function render(){		

		$sec_style = $this->get_settings_for_display( 'sec_style' );
		$sec_bgimage = $this->get_settings_for_display( 'sec_bgimage' )['url'];
		$sec_secimage = $this->get_settings_for_display( 'sec_secimage' )['url'];
		$sec_subtitle = $this->get_settings_for_display( 'sec_subtitle' );
		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_animation_text = $this->get_settings_for_display( 'sec_animation_text' );
		$sec_content = $this->get_settings_for_display( 'sec_content' );
		$sec_1st_btn_text = $this->get_settings_for_display( 'sec_1st_btn_text' );
		$sec_1st_btn_link = $this->get_settings_for_display( 'sec_1st_btn_link' );
		$sec_2nd_btn_text = $this->get_settings_for_display( 'sec_2nd_btn_text' );
		$sec_2nd_btn_link = $this->get_settings_for_display( 'sec_2nd_btn_link' );
		
		?>

	<?php if($sec_style == '1'){ ?>
	
		<!-- Banner Section Start -->
		<section class="banner-style-4 banner-padding" <?php if($sec_bgimage){ ?>style="Background: url(<?php echo esc_url($sec_bgimage);?>);"<?php } ?>>
			<div class="container">
				<div class="row align-items-center justify-content-center">
					<div class="col-md-12 col-xl-6 col-lg-6">
						<div class="banner-content ">
							<span class="subheading"><?php echo edumel_wp_kses($sec_subtitle);?></span>
							<h1><?php echo edumel_wp_kses($sec_title);?></h1>
							<p class="mb-40"><?php echo edumel_wp_kses($sec_content);?></p>

							<div class="btn-container">
								<?php if($sec_1st_btn_link){ ?>
								<a href="<?php echo esc_url($sec_1st_btn_link);?>" class="btn btn-main rounded"><?php echo esc_html($sec_1st_btn_text);?></a> 
								<?php } if($sec_2nd_btn_link){ ?>							
								<a href="<?php echo esc_url($sec_2nd_btn_link);?>" class="btn btn-white rounded ms-2"><?php echo esc_html($sec_2nd_btn_text);?></a> 
								<?php } ?>							
							</div>
						</div>
					</div>

					<div class="col-md-12 col-xl-6 col-lg-6">
						<div class="banner-img-round mt-5 mt-lg-0 ps-5">
							<img src="<?php echo esc_url($sec_secimage);?>" alt="" class="img-fluid">
						</div>
					</div>
				</div> <!-- / .row -->
			</div> <!-- / .container -->
		</section>
		<!-- Banner Section End -->
		
	<?php }elseif($sec_style == '2'){ ?>
	

		<!-- Banner Section Start -->
		<section class="banner-style-2" <?php if($sec_bgimage){ ?>style="Background-image: url(<?php echo esc_url($sec_bgimage);?>); backgorund-size: cover;"<?php } ?>>
			<div class="container">
				<div class="row align-items-center justify-content-center">
					<div class="col-md-12 col-xl-8 col-lg-10">
						<div class="banner-content text-center">
							<span class="subheading"><?php echo edumel_wp_kses($sec_subtitle);?></span>
							<h1 class="cd-headline clip is-full-width"><?php echo edumel_wp_kses($sec_title);?>
								<span class="cd-words-wrapper">
									<?php echo edumel_wp_kses($sec_animation_text);?>
								</span>
							</h1>

							<p><?php echo edumel_wp_kses($sec_content);?></p>
							
						   <div class="btn-container">
								<?php if($sec_1st_btn_link){ ?>
								<a href="<?php echo esc_url($sec_1st_btn_link);?>" class="btn btn-main rounded"><?php echo esc_html($sec_1st_btn_text);?></a> 
								<?php } if($sec_2nd_btn_link){ ?>							
								<a href="<?php echo esc_url($sec_2nd_btn_link);?>" class="btn btn-white rounded ms-2"><?php echo esc_html($sec_2nd_btn_text);?></a> 
								<?php } ?>							   

						   </div>
						</div>
					</div>
				</div> <!-- / .row -->
			</div> <!-- / .container -->
		</section>
		<!-- Banner Section End -->	
		
		<?php }elseif($sec_style == '3'){ ?>

		<!-- Banner Section Start -->
		<section class="banner-style-3 banner-padding" <?php if($sec_bgimage){ ?>style="Background: url(<?php echo esc_url($sec_bgimage);?>);"<?php } ?>>
			<div class="container">
				<div class="row align-items-center justify-content-center">
					<div class="col-md-12 col-xl-7 col-lg-10">
						<div class="banner-content text-center">
							<span class="subheading"><?php echo edumel_wp_kses($sec_subtitle);?></span>
							<h1><?php echo edumel_wp_kses($sec_title);?></h1>
							<p><?php echo edumel_wp_kses($sec_content);?></p>
							<?php if($sec_1st_btn_link){ ?>
							<a href="<?php echo esc_url($sec_1st_btn_link);?>" class="btn btn-main rounded"><?php echo esc_html($sec_1st_btn_text);?></a> 
							<?php } if($sec_2nd_btn_link){ ?>							
							<a href="<?php echo esc_url($sec_2nd_btn_link);?>" class="btn btn-white rounded ms-2"><?php echo esc_html($sec_2nd_btn_text);?></a> 
							<?php } ?>					
						</div>
					</div>
				</div> <!-- / .row -->
			</div> <!-- / .container -->
		</section>
		<!-- Banner Section End -->		
		
	<?php } ?>
<?php

	}

}
