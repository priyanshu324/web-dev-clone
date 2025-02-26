<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelFeatureWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-feature';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Feature' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_feature',
			[
				'label' => esc_html__( 'Feature', 'edumel' ),
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
			'feat_icon_color', [
				'label' => esc_html__( 'Icon COLOR', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'label_block' => true,
				'default' => '#F14D5D',
				'selectors' => [
					'{{WRAPPER}} .feature-style-top .feature-icon' => 'color: {{VALUE}}',
				],

			]
		);	
		
		$this->add_control(
			'feat_icon', [
				'label' => esc_html__( 'Icon', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'default' => 'flaticon-video-camera',

			]
		);		
		
		$this->add_control(
			'feat_title', [
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'default' => 'Remote Learning',

			]
		);	
			
		$this->add_control(
			'feat_content', [
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'label_block' => true,
				'default' => 'Develop skills for career of various majors including language',

			]
		);	
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_style = $this->get_settings_for_display( 'sec_style' );
		$feat_icon = $this->get_settings_for_display( 'feat_icon' );
		$feat_title = $this->get_settings_for_display( 'feat_title' );
		$feat_content = $this->get_settings_for_display( 'feat_content' );
		
		if($sec_style == '2'){ ?>
			<div class="feature-item feature-style-top mb-4 mb-lg-0">
				<div class="feature-icon">
					<i class="<?php echo esc_attr($feat_icon);?>"></i>
				</div>
				<div class="feature-text">
					<h4><?php echo esc_html($feat_title);?></h4>
					<p><?php echo edumel_wp_kses($feat_content);?></p>
				</div>
			</div>			
		<?php }else{ ?>
		<div class="feature-item feature-style-top hover-shadow rounded border-0">
			<div class="feature-icon">
				<i class="<?php echo esc_attr($feat_icon);?>"></i>
			</div>
			<div class="feature-text">
				<h4><?php echo esc_html($feat_title);?></h4>
				<p><?php echo edumel_wp_kses($feat_content);?></p>
			</div>
		</div>			
		<?php }  ?>
		

		
		<?php 

	}

}
