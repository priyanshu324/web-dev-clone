<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelNewsletterWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-newsletter';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Newsletter' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_newsletter',
			[
				'label' => esc_html__( 'Newsletter Options', 'edumel' ),
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
			'sec_sub_title',
			[
				'label' => esc_html__( 'Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => ' Not sure where to start? ',
			]
		);	
		
		$this->add_control(
			'sec_title',
			[
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => ' Want to know Special Offers & Updates of new courses?',
			]
		);	
				
		$this->add_control(
			'sec_news_shortcode',
			[
				'label' => esc_html__( 'Enter Shortcode', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
			]
		);		
		
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_bg_img = $this->get_settings_for_display( 'sec_bg_img' )['url'];
		$sec_sub_title = $this->get_settings_for_display( 'sec_sub_title' );
		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_news_shortcode = $this->get_settings_for_display( 'sec_news_shortcode' );
		
		?>
		
		<section class="cta-5">
			<div class="container">
				<div class="cta-inner2" style="background: url(<?php echo esc_url($sec_bg_img);?>);">
					<div class="row align-items-center justify-content-between">
						<div class="col-xl-6">
							<div class="cta-content ">
								<span class="subheading"><?php echo esc_html($sec_sub_title);?></span>
								<h2 class="mb-4 mb-xl-0"><?php echo edumel_wp_kses($sec_title);?></h2>
							</div>
						</div>
						<div class="col-xl-6 text-lg-end">
							<div class="subscribe-form">
								<?php echo do_shortcode($sec_news_shortcode);?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<?php  

	}

}
