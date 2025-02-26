<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelVideoWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-video';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Video' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_video',
			[
				'label' => esc_html__( 'Video', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'sec_vid_padding',
			[
				'label' => esc_html__( 'Padding', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .video-section' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);			
		
		$this->add_control(
			'sec_cover_img',
			[
				'label' => esc_html__( 'Cover Image', 'edumel' ),
				'type' => \Elementor\Controls_Manager::MEDIA ,
			]
		);	
		
		$this->add_control(
			'sec_vid_url',
			[
				'label' => esc_html__( 'Video Url', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'https://www.youtube.com/watch?v=W9Y3DO1ylhI',
			]
		);		
		
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_cover_img = $this->get_settings_for_display( 'sec_cover_img' )['url'];
		$sec_vid_url = $this->get_settings_for_display( 'sec_vid_url' );
		
		?>
		
		<div class="video-section mt-3 mt-xl-0" style="background-image: url(<?php echo esc_url($sec_cover_img);?>);">
			<div class="video-content">		
				<a href="<?php echo esc_url($sec_vid_url);?>" class="video-icon video-popup"><i class="fa fa-play"></i></a>
			</div>
		</div>
		
		<?php 

	}

}
