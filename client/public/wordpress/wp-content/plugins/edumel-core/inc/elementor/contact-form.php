<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelContactFormWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-contact-form';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Contact Form' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_contact_form',
			[
				'label' => esc_html__( 'Contact Form', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

	
		$this->add_control(
			'sec_shortcode',
			[
				'label' => esc_html__( 'Enter Shortcode', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
			]
		);	

		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_shortcode = $this->get_settings_for_display( 'sec_shortcode' );
		
		?>
		
		<div class="contact__form form-row " id="contactForm">
             <?php echo do_shortcode($sec_shortcode);?>    
        </div>
		
		<?php 

	}

}
