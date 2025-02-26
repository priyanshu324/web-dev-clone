<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelCTALargeWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-cta-large';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('CTA Large' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_cta_large',
			[
				'label' => esc_html__( 'CTA Options', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
	
		$this->add_control(
			'sec_bg_img',
			[
				'label' => esc_html__( 'Background Image', 'edumel' ),
				'type' => \Elementor\Controls_Manager::MEDIA ,
			]
		);		
		
		$this->add_control(
			'sec_1st_subtitle',
			[
				'label' => esc_html__( '1st Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '# Become a Instructor',
			]
		);	
		
		$this->add_control(
			'sec_1st_title',
			[
				'label' => esc_html__( '1st Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Become a Instructor at Tutori',
			]
		);	
		
		$this->add_control(
			'sec_1st_btn_text',
			[
				'label' => esc_html__( '1st Button Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Apply Now ',
			]
		);		
		
		$this->add_control(
			'sec_1st_btn_link',
			[
				'label' => esc_html__( '1st Button Link', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '#',
			]
		);				
		
		$this->add_control(
			'sec_2nd_subtitle',
			[
				'label' => esc_html__( '2nd Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '# Want to join',
			]
		);	
		
		$this->add_control(
			'sec_2nd_title',
			[
				'label' => esc_html__( '2nd Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Become a Instructor at Tutori',
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
				'label' => esc_html__( '2nd Button Link', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '#',
			]
		);		
		
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_bg_img = $this->get_settings_for_display( 'sec_bg_img' )['url'];
		$sec_1st_subtitle = $this->get_settings_for_display( 'sec_1st_subtitle' );
		$sec_1st_title = $this->get_settings_for_display( 'sec_1st_title' );
		$sec_1st_btn_text = $this->get_settings_for_display( 'sec_1st_btn_text' );
		$sec_1st_btn_link = $this->get_settings_for_display( 'sec_1st_btn_link' );
		$sec_2nd_subtitle = $this->get_settings_for_display( 'sec_2nd_subtitle' );
		$sec_2nd_title = $this->get_settings_for_display( 'sec_2nd_title' );
		$sec_2nd_btn_text = $this->get_settings_for_display( 'sec_2nd_btn_text' );
		$sec_2nd_btn_link = $this->get_settings_for_display( 'sec_2nd_btn_link' );
		
		?>
		
		<section class="cta">
			<div class="container">
				<div class="row cta-inner-section g-0" style='background: url("<?php echo esc_url($sec_bg_img);?>") 50% 50%;' >
					<div class="col-xl-6 col-lg-6">
						<div class="info-box style-1">
							<span class="subtitle"><?php echo esc_html($sec_1st_subtitle);?></span>
							<h2 class="font-lg mb-20 mt-10"><?php echo edumel_wp_kses($sec_1st_title);?></h2>
							<?php if($sec_1st_btn_link){ ?>
							<a href="<?php echo esc_url($sec_1st_btn_link);?>" class="btn btn-main-2 rounded"><?php echo esc_html($sec_1st_btn_text);?> <i class="fa fa-angle-right"></i></a>
							<?php } ?>
						</div>
					</div>

					<div class="col-xl-6 col-lg-6">
						<div class="info-box">
							<span class="subtitle"><?php echo esc_html($sec_2nd_subtitle);?></span>
							<h2 class="font-lg mb-20 mt-10"><?php echo edumel_wp_kses($sec_2nd_title);?></h2>
							<?php if($sec_2nd_btn_link){ ?>
							<a href="<?php echo esc_url($sec_2nd_btn_link);?>" class="btn btn-main-2 rounded"><?php echo esc_html($sec_2nd_btn_text);?> <i class="fa fa-angle-right"></i></a>
							<?php } ?>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<?php  

	}

}
