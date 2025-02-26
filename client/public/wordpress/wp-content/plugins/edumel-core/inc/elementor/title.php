<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelTitleWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-title';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Title' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_title',
			[
				'label' => esc_html__( 'Title', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'sec_title_style',
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
			'sec_title_alignment',
			[
				'label' => esc_html__( 'Alignment', 'edumel' ),
				'type' => \Elementor\Controls_Manager::SELECT ,
				'default' => '1',
				'options' => [
					'1'  => esc_html__( 'Left', 'edumel' ),
					'2' => esc_html__( 'Center', 'edumel' ),
	
				],
				
			]
		);	
	
		$this->add_control(
			'sec_title',
			[
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Popular Courses',
			]
		);	
		
		$this->add_control(
			'sec_content',
			[
				'label' => esc_html__( 'Content / Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Discover Your Perfect Program In Our Courses.',
			]
		);		
		
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_title_style = $this->get_settings_for_display( 'sec_title_style' );
		$sec_title_alignment = $this->get_settings_for_display( 'sec_title_alignment' );
		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_content = $this->get_settings_for_display( 'sec_content' );
		
		if($sec_title_style == '2'){ ?>
		
		<div class="section-heading <?php if($sec_title_alignment=='2' ){
				echo esc_attr(' text-center');
			}else{ echo esc_attr(' text-left'); } ?> ">
			
			<?php if($sec_content){ ?>
			<span class="subheading"><?php echo edumel_wp_kses($sec_content);?></span>
			<?php } ?>
			<?php if($sec_title){ ?>
			<h2 class="font-lg"><?php echo edumel_wp_kses($sec_title);?></h2>
			<?php } ?>
		</div>
		<?php }else{ ?>
		<div class="section-heading <?php if($sec_title_alignment=='2' ){
				echo esc_attr(' text-center');
			}else{ echo esc_attr(' text-left'); } ?>">
			<?php if($sec_title){ ?>
			<h2 class="font-lg"><?php echo edumel_wp_kses($sec_title);?></h2>
			<?php } ?>
			<?php if($sec_content){ ?>
			<p><?php echo edumel_wp_kses($sec_content);?></p>
			<?php } ?>			

		</div>
		<?php } 

	}

}
