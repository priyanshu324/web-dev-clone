<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelStepWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-step';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Step' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_step',
			[
				'label' => esc_html__( 'Step', 'edumel' ),
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

				],
				
			]
		);	
		
		$this->add_control(
			'step_icon_color', [
				'label' => esc_html__( 'Icon Color', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'label_block' => true,
				'default' => '#fff',
				'selectors' => [
					'{{WRAPPER}} .step-item .step-number' => 'color: {{VALUE}}',
				],

			]
		);		
		
		$this->add_control(
			'step_icon_bgcolor', [
				'label' => esc_html__( 'Background Icon Color', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'label_block' => true,
				'default' => '#DD246E',
				'selectors' => [
					'{{WRAPPER}} .step-item .step-number' => 'background: {{VALUE}}',
					'{{WRAPPER}} .feature-style-left .feature-icon' => 'background: {{VALUE}}',
				],

			]
		);	
		
		$this->add_control(
			'step_icon', [
				'label' => esc_html__( 'Icon', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'default' => '1',

			]
		);		
		
		$this->add_control(
			'step_title', [
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'default' => 'Signup with all info',

			]
		);	
			
		$this->add_control(
			'step_content', [
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'label_block' => true,
				'default' => 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.',

			]
		);	
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_style = $this->get_settings_for_display( 'sec_style' );
		$step_icon = $this->get_settings_for_display( 'step_icon' );
		$step_title = $this->get_settings_for_display( 'step_title' );
		$step_content = $this->get_settings_for_display( 'step_content' );
		
		if($sec_style == '2'){ ?>
			
			<div class="feature-item feature-style-left">
				<div class="feature-icon icon-bg-3 icon-radius">
					<i class="<?php echo esc_attr($step_icon);?>"></i>
				</div>
				<div class="feature-text">
					<h4><?php echo esc_html($step_title);?></h4>
					<p><?php echo edumel_wp_kses($step_content);?></p>
				</div>
			</div>			
		<?php }else{ ?>
		<div class="step-item">
			<div class="step-number"><?php echo esc_html($step_icon);?></div>
			<div class="step-text">
				<h5><?php echo esc_html($step_title);?></h5>
				<p><?php echo edumel_wp_kses($step_content);?></p>
			</div>
		</div>				
		<?php }  ?>
		

		
		<?php 

	}

}
