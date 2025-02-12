<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelInstructorContentWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-instructor-content';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Instructor Content' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_instructor_content',
			[
				'label' => esc_html__( 'Instructor Content', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'sec_subtitle',
			[
				'label' => esc_html__( 'Subtitle', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Start Today',
			]
		);	
		
		$this->add_control(
			'sec_title',
			[
				'label' => esc_html__( 'Title', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Our Top Instructors',
			]
		);	
		
		$this->add_control(
			'sec_content',
			[
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA ,
				'default' => 'Do you want to be an instructor? Do you want to share your knowledge with everyone? If you have any skill then you can easily share your knowledge online or offline through iLive platform & make money.',
			]
		);		
		
		$this->add_control(
			'sec_btn_text',
			[
				'label' => esc_html__( 'Button Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => 'Start Teaching today',
			]
		);		
		
		$this->add_control(
			'sec_btn_link',
			[
				'label' => esc_html__( 'Button Link', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => '#',
			]
		);

		$repeater = new \Elementor\Repeater();
		
		$repeater->add_control(
			'inst_content', [
				'label' => esc_html__( 'Content', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'label_block' => true,
			]
		);			
		
	
		$this->add_control(
			'inst_options',
			[
				'label' => esc_html__
				( 'Options', 'edumel' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[																																											
						'inst_content' => 'Lorem ipsum dolor seat ameat dui too consecteture',																																																					
																																																									
					],
		
				],

			]
		);	
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_subtitle = $this->get_settings_for_display( 'sec_subtitle' );
		$sec_title = $this->get_settings_for_display( 'sec_title' );
		$sec_content = $this->get_settings_for_display( 'sec_content' );
		$sec_btn_text = $this->get_settings_for_display( 'sec_btn_text' );
		$sec_btn_link = $this->get_settings_for_display( 'sec_btn_link' );
		$inst_options = $this->get_settings_for_display( 'inst_options' );
		
		?>
		
		<div class="section-heading">
			<span class="subheading"><?php echo esc_html($sec_subtitle);?></span>
			<h2 class="font-lg mb-20"><?php echo esc_html($sec_title);?></h2>
			<p class="mb-30"><?php echo edumel_wp_kses($sec_content);?></p>
			   
			<ul class="list-item mb-40">
				<?php
					foreach ($inst_options as $item ) { ?>	
						<li><i class="fa fa-check"></i><h5><?php echo edumel_wp_kses($item['inst_content']);?></h5></li>						
				<?php } ?>						
			

			</ul>
			<?php if($sec_btn_link){ ?>
			<a href="<?php echo esc_url($sec_btn_link);?>" class="btn btn-main rounded"><?php echo esc_html($sec_btn_text);?></a>
			<?php } ?>
		</div>		
		
		<?php  

	}

}
