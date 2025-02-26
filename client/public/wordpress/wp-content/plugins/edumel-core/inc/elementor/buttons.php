<?php

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class EdumelButtonsWidget extends \Elementor\Widget_Base{
	
	public function get_name() {
		
		return 'edumel-buttons';
	}
	public function get_icon() {
		
		return 'eicon-shortcode';
	}
	public function get_title() {
		return esc_html__('Buttons' , 'edumel');
	}
	
	public function get_categories() {
		return ['edumel-category'];
	}
	
	protected function register_controls() {

		$this->start_controls_section(
		'edumel_buttons',
			[
				'label' => esc_html__( 'Buttons', 'edumel' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'sec_button_style',
			[
				'label' => esc_html__( 'Style', 'edumel' ),
				'type' => \Elementor\Controls_Manager::SELECT ,
				'default' => '1',
				'options' => [
					'1'  => esc_html__( 'Button 1', 'edumel' ),
					'2' => esc_html__( 'Button 2', 'edumel' ),
					'3' => esc_html__( 'Button 3', 'edumel' ),
					'4' => esc_html__( 'Button 4', 'edumel' ),
					'5' => esc_html__( 'Button 5', 'edumel' ),
	
				],
				
			]
		);	
	
		$this->add_control(
			'sec_text',
			[
				'label' => esc_html__( 'Text', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => 'Sign Up',
			]
		);	
		
		$this->add_control(
			'sec_link',
			[
				'label' => esc_html__( 'Link', 'edumel' ),
				'type' => \Elementor\Controls_Manager::TEXT ,
				'default' => '#',
			]
		);	
		
		
		$this->end_controls_section();

	}
	
	protected function render(){		

		$sec_button_style = $this->get_settings_for_display( 'sec_button_style' );
		$sec_text = $this->get_settings_for_display( 'sec_text' );
		$sec_link = $this->get_settings_for_display( 'sec_link' );
		
		if($sec_button_style == '1'){ ?>
			<a href="<?php echo esc_url($sec_link);?>" class="btn btn-main rounded"><?php echo esc_html($sec_text);?></a>
		<?php }elseif($sec_button_style == '3'){ ?>
		
			<a href="<?php echo esc_url($sec_link);?>" class="btn btn-main-outline rounded"><?php echo esc_html($sec_text);?></a>
		
		<?php }elseif($sec_button_style == '4'){ ?>
		
			<a href="<?php echo esc_url($sec_link);?>" class="btn btn-main-2 rounded"><?php echo esc_html($sec_text);?></a>
		
		<?php }elseif($sec_button_style == '5'){ ?>
			
			<a href="<?php echo esc_url($sec_link);?>" class="btn btn-main-outline btn-radius btn-sm"><?php echo esc_html($sec_text);?></a>
		
		<?php }else{ ?>
			<a href="<?php echo esc_url($sec_link);?>" class="btn btn-white rounded"><?php echo esc_html($sec_text);?></a>		
		<?php }
		?>

		
		

<?php

	}

}
