<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelCTAintroWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-cta-intro';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('CTA Intro' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_cta_intro',
			[
				'label' => esc_html__( 'CTA Intro', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
	
		$this->add_control(
			'sec_sub_title',
			[
				'label' => esc_html__( 'Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Let Us Help',
			]
		);	
		
		$this->add_control(
			'sec_title',
			[
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Finding Your Right Courses',
			]
		);	
		
		$this->add_control(
			'sec_btn_text',
			[
				'label' => esc_html__( 'Button Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Get started',
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
		
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_sub_title = $this->get_settings_for_display( 'sec_sub_title' );
		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_btn_text = $this->get_settings_for_display( 'sec_btn_text' );
		$sec_btn_link = $this->get_settings_for_display( 'sec_btn_link' );
		
		?>
		
		<section class="cta-intro section-padding-btm">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-7 col-lg-8 col-md-12">
						<div class="cta-inner-wrapper">
						   <div class="row justify-content-between align-items-center">
							   <div class="col-xl-8 col-lg-8 col-md-6">
									<div class="section-heading mb-3 mb-lg-0 text-center text-md-start">
										<span class="text-color"><?php echo esc_html($sec_sub_title);?></span>
										<h4><?php echo edumel_wp_kses($sec_title);?></h4>
									</div>
							   </div>

							   <div class="col-xl-4 col-lg-4 col-md-6">
								   <div class="text-center text-md-end">
										<?php if($sec_btn_link){ ?>
										<a href="<?php echo esc_url($sec_btn_link);?>" class="btn btn-main rounded"><?php echo esc_html($sec_btn_text);?></a>
										<?php } ?>
								  </div>
							   </div>
						   </div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<?php  

	}

}
