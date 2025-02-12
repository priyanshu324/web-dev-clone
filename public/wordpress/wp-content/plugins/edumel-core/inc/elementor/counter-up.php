<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelCounterUpWidget extends Elementor\Widget_Base{
	public function get_name() {
		
		return 'edumel-counter-up';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Counter Up' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_counter_up',
			[
				'label' => esc_html__( 'Counter Up', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'count_style', [
				'label' => esc_html__( 'Style', 'edumel' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'options' => [
					'1'  => esc_html__( '1', 'edumel' ),
					'2' => esc_html__( '2', 'edumel' ),
				],				
				'default' => '1',

			]
		);		
		
		$this->add_control(
			'count_bg_color', [
				'label' => esc_html__( 'Background Color', 'edumel' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'label_block' => true,
				'default' => '#2A3E61',
				'selectors' => [
					'{{WRAPPER}} .counter-inner' => 'background: {{VALUE}}',
				],

			]
		);	
		
		$this->add_control(
			'count_subtitle', [
				'label' => esc_html__( 'Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'label_block' => true,
				'default' => '10,000+ Trusted Clients All Over The World ',

			]
		);	
		
		$this->add_control(
			'count_title', [
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'label_block' => true,
				'default' => 'Some reasons why Start Your Online Learning with Us',

			]
		);	
		

		$repeater = new \Elementor\Repeater();
		$repeater->add_control(
			'coun_title', [
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);			
		
		$repeater->add_control(
			'count_number', [
				'label' => esc_html__( 'Number', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);		

		$repeater->add_control(
			'count_number_nsign', [
				'label' => esc_html__( 'If No Sign', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);
		
		$repeater->add_control(
			'count_number_percent', [
				'label' => esc_html__( 'If Percent', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);

		$this->add_control(
			'counter_options',
			[
				'label' => esc_html__
				( 'Counter Options', 'edumel' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[																																						
						'coun_title' => 'Students',							
						'count_number' => '120',																																																					
																																																									
					],
		
				],

			]
		);			
		
		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'coun_style', [
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
			'coun_icon', [
				'label' => esc_html__( 'Icon', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);			
		
		$repeater->add_control(
			'coun_title', [
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);			
		
		$repeater->add_control(
			'count_number', [
				'label' => esc_html__( 'Number', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);		

		$repeater->add_control(
			'count_number_k', [
				'label' => esc_html__( 'If K', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);
		
		$repeater->add_control(
			'count_number_percent', [
				'label' => esc_html__( 'If Percent', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);		

		$this->add_control(
			'counter_style_two_options',
			[
				'label' => esc_html__
				( 'Counter Style Two', 'edumel' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[																															
						'coun_icon' => 'flaticon-man',							
						'coun_title' => 'Students',							
						'count_number' => '120',																																																																																																		
																																																										
					],
		
				],

			]
		);	

		
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$count_style = $this->get_settings_for_display( 'count_style' );
		$count_subtitle = $this->get_settings_for_display( 'count_subtitle' );
		$count_title = $this->get_settings_for_display( 'count_title' );
		$counter_options = $this->get_settings_for_display( 'counter_options' );
		$counter_style_two_options = $this->get_settings_for_display( 'counter_style_two_options' );

		if($count_style == '1'){	
		
		?>

		<!-- Counter Section start -->
		<section class="counter-section4">
			<div class="container">
				<div class="row justify-content-center" >
					<div class="col-xl-12 counter-inner">
						<div class="row">
						
					<?php
						foreach ($counter_options as $item ) { ?>						
							
							<div class="col-lg-3 col-md-6">
								<div class="counter-item mb-5 mb-lg-0">
									<div class="count">
										<?php if($item['count_number_percent']){ ?>
											<span class="counter h2"><?php echo esc_html($item['count_number_percent']);?></span> <span>%</span>
										<?php }elseif($item['count_number_nsign']){ ?>
											<span class="counter h2"><?php echo esc_html($item['count_number_nsign']);?></span>
										<?php }else{ ?>
											<span class="counter h2"><?php echo esc_html($item['count_number']);?></span><span>+</span>
										<?php } ?>

									</div>
									<p><?php echo esc_html($item['coun_title']);?></p>
								</div>
							</div>
					<?php } ?>					
						   

						</div>
					</div>
			   </div>
			</div>
		</section>
		<!-- COunter Section End -->

		
		<?php }else{ ?>

		<!-- Counter Section start -->
		<section class="counter-section-2">
			<div class="container">
				<div class="row align-items-center justify-content-center" >
					<div class="col-xl-5 pr-xl-5 col-lg-8">
						<div class="section-heading mb-5 mb-xl-0 text-center text-xl-start">
							 <span class="subheading"><?php echo edumel_wp_kses($count_subtitle);?></span>
							 <h2 class="font-lg"><?php echo edumel_wp_kses($count_title);?></h2>
						</div>
					 </div>

					<div class="col-xl-7">
						<div class="row">
							<?php
								foreach ($counter_style_two_options as $item ) { ?>						
							
								<div class="col-lg-4 col-md-6">
									<div class="counter-box bg-<?php if($item['coun_style'] == '2'){  echo esc_attr('2');}elseif($item['coun_style'] == '3'){  echo esc_attr('3');}else{ echo esc_attr('1');} ?> mb-4 mb-lg-0">
										<i class="<?php echo esc_attr($item['coun_icon']);?>"></i>
										<div class="count">

										<?php if($item['count_number_percent']){ ?>
											<span class="counter"><?php echo esc_html($item['count_number_percent']);?></span> <span>%</span>
										<?php }elseif($item['count_number_k']){ ?>
											<span class="counter"><?php echo esc_html($item['count_number_k']);?></span> <span>k</span>
										<?php }else{ ?>
											<span class="counter"><?php echo esc_html($item['count_number']);?></span>
										<?php } ?>
										</div>
										<p><?php echo esc_html($item['coun_title']);?></p>
									</div>
								</div>
								
							<?php } ?>	

						</div>
					</div>
			   </div>
			</div>
		</section>
		<!-- COunter Section End -->
		
		<?php } ?>
<?php
		
	}

}
