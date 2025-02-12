<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelFeatureIntroWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-feature-intro';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Feature Intro' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_feature_intro',
			[
				'label' => esc_html__( 'Feature Intro', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

	
		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'feat_style', [
				'label' => esc_html__( 'Style', 'edumel' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'default' => '1',
				'options' => [
					'1'  => esc_html__( '1', 'edumel' ),
					'2' => esc_html__( '2', 'edumel' ),
					'3' => esc_html__( '3', 'edumel' ),

				],
			]
		);
		
		$repeater->add_control(
			'feat_icon', [
				'label' => esc_html__( 'Icon', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);	
		
		$repeater->add_control(
			'feat_title', [
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);	
		
		$repeater->add_control(
			'feat_content', [
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'label_block' => true,
			]
		);			
		
	
		$this->add_control(
			'feature_options',
			[
				'label' => esc_html__
				( 'Feature Options', 'edumel' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[																																						
						'feat_icon' => 'fad fa-users',							
						'feat_title' => 'Get Certificate',							
						'feat_content' => 'Lorem ipsum dolor seat ameat dui too consecteture',																																																					
																																																									
					],
		
				],

			]
		);	
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$feature_options = $this->get_settings_for_display( 'feature_options' );
		
		 ?>
		
		<!--  Feature Intro Start -->
		<section class="features-intro">
			<div class="container">
				<div class="feature-inner">
					<div class="row">
					<?php
						foreach ($feature_options as $item ) { ?>						
							<div class="col-xl-4 col-lg-4">
								<div class="feature-item feature-style-left">
									<div class="feature-icon icon-bg-<?php if($item['feat_style'] == '2'){  echo esc_attr('2');}elseif($item['feat_style'] == '3'){  echo esc_attr('3');}else{ echo esc_attr('1');} ?>">
										<i class="<?php echo esc_attr($item['feat_icon']);?>"></i>
									</div>
									<div class="feature-text">
										<h4><?php echo esc_html($item['feat_title']);?></h4>
										<p><?php echo edumel_wp_kses($item['feat_content']);?></p>
									</div>
								</div>
							</div>
						

					<?php } ?>	

					</div>
				</div>
			</div>
		</section>
		<!--  Feature Intro End -->		
		<?php 

	}

}
