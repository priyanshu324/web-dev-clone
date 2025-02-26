<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelCTAWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-cta';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('CTA' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_cta',
			[
				'label' => esc_html__( 'CTA Options', 'edumel' ),
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
			'sec_img',
			[
				'label' => esc_html__( 'Section Image', 'edumel' ),
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
			'sec_content',
			[
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,

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

		$sec_style = $this->get_settings_for_display( 'sec_style' );
		$sec_img = $this->get_settings_for_display( 'sec_img' )['url'];
		$sec_sub_title = $this->get_settings_for_display( 'sec_sub_title' );
		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_content = $this->get_settings_for_display( 'sec_content' );
		$sec_btn_text = $this->get_settings_for_display( 'sec_btn_text' );
		$sec_btn_link = $this->get_settings_for_display( 'sec_btn_link' );
		
		if($sec_style == '2'){ ?>
		<section class="be-instructor section-padding-btm">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-xl-6 col-lg-6">
						<img src="<?php echo esc_url($sec_img);?>" alt="" class="img-fluid">
					 </div>

					<div class="col-xl-6 col-lg-6">
						<div class="section-heading mt-4 mt-lg-0">
							<span class="subheading"><?php echo edumel_wp_kses($sec_sub_title);?></span>
							<h2 class="font-lg mb-20"><?php echo edumel_wp_kses($sec_title);?></h2>
							<?php echo edumel_wp_kses($sec_content);?> 
							<?php if($sec_btn_link){ ?>
							<a href="<?php echo esc_url($sec_btn_link);?>" class="btn btn-main rounded"><?php echo esc_html($sec_btn_text);?></a>
							<?php } ?>
						</div>
					</div>
				</div>
			</div>
		</section>			
		<?php }else{ ?>
			<section class="cta-5 bg-gray">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-xl-12">
							<div class="cta-inner4">
								<div class="row align-items-center justify-content-center">
									<div class="col-xl-4 col-lg-5">
									   <div class="cta-img mb-4 mb-lg-0">
										   <img src="<?php echo esc_url($sec_img);?>" alt="" class="img-fluid">
									   </div>
									</div>
									<div class="col-xl-6 col-lg-6">
										<div class="cta-content ps-lg-4">
											<span class="subheading mb-10"><?php echo edumel_wp_kses($sec_sub_title);?></span>
											<h2 class="mb-20"><?php echo edumel_wp_kses($sec_title);?></h2>
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
		<?php } ?>
		

		
		<?php  

	}

}
