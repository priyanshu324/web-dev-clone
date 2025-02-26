<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelContactInfoWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-contact-info';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Contact Info' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_contact_info',
			[
				'label' => esc_html__( 'Contact Info', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

	
		$this->add_control(
			'sec_title',
			[
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'What\'s your story? <br> Get in touch',
			]
		);	
		
		$this->add_control(
			'sec_content',
			[
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores Feel Free to contact with us',
			]
		);		

		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'con_icon', [
				'label' => esc_html__( 'Icon', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);		

		$repeater->add_control(
			'cont_content', [
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);
		
		$this->add_control(
			'con_info_options',
			[
				'label' => esc_html__
				( 'Contact Info Options', 'edumel' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[																																						
						'con_icon' => 'fa fa-envelope',							
						'cont_content' => 'support@email.com',																																																					
																																																									
					],
		
				],

			]
		);					
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_content = $this->get_settings_for_display( 'sec_content' );
		$con_info_options = $this->get_settings_for_display( 'con_info_options' );
		
		?>
		
			<div class="contact-info-wrapper mb-5 mb-lg-0">
			   <h3><?php echo edumel_wp_kses($sec_title);?></h3>
			   <p><?php echo edumel_wp_kses($sec_content);?></p>

				<?php
					foreach ($con_info_options as $item ) { ?>						
						<div class="contact-item">
							<i class="<?php echo esc_attr($item['con_icon']);?>"></i>
							<h5><?php echo edumel_wp_kses($item['cont_content']);?></h5>
						</div>
						
						
				<?php } ?>	
				
			</div>
		<?php 

	}

}
