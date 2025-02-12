<?php

class edumel_footer_contact_info_Widget extends WP_Widget {
 
    function __construct() {
 
        parent::__construct(
            'edumel-footer-contact-info',  // Base ID
            'Edumel: Footer Contact Info'   // Name
        );
 
        add_action( 'widgets_init', function() {
            register_widget( 'edumel_footer_contact_info_Widget' );
        });
 
    }
 
    
 
    public function widget( $args, $instance ) {
 
        echo $args['before_widget'];
 
        if ( ! empty( $instance['title'] ) ) {
            echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        }
		
		$phone_number = $instance['phone_number'];
		$email_address = $instance['email_address'];
		$location = $instance['location'];
		
	?>

		<div class="footer_contact_info">
			<ul class="list-unstyled footer-links">
				<li><a href="#"><?php echo edumel_wp_kses($phone_number);?></a></li>
				<li><a href="#"><?php echo edumel_wp_kses($email_address);?></a></li>
				<li><a href="#"><?php echo edumel_wp_kses($location);?></a></li>
			</ul>
		</div>
					
	 
	<?php
	
	echo $args['after_widget'];
    }
 
    public function form( $instance ) {
 
        $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( '', 'edumel' );
		
		$phone_number = ! empty( $instance['phone_number'] ) ? $instance['phone_number'] : esc_html__( '', 'edumel' );
		$email_address = ! empty( $instance['email_address'] ) ? $instance['email_address'] : esc_html__( '', 'edumel' );		
		$location = ! empty( $instance['location'] ) ? $instance['location'] : esc_html__( '', 'edumel' );

		?>
		
        <p>
        <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php echo esc_html__( 'Title:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>


		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'phone_number' ) ); ?>"><?php echo esc_html__( 'Phone Number:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'phone_number' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'phone_number' ) ); ?>" type="text" value="<?php echo esc_attr( $phone_number ); ?>">
        </p>		
		

		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'email_address' ) ); ?>"><?php echo esc_html__( 'Email Address:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'email_address' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'email_address' ) ); ?>" type="text" value="<?php echo esc_attr( $email_address ); ?>">
        </p>	


		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'location' ) ); ?>"><?php echo esc_html__( 'Location:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'location' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'location' ) ); ?>" type="text" value="<?php echo esc_attr( $location ); ?>">
        </p>		
		

        <?php
 
    }
 
    public function update( $new_instance, $old_instance ) {
 
        $instance = array();
 
        $instance['title'] = ( !empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
        $instance['phone_label'] = ( !empty( $new_instance['phone_label'] ) ) ? $new_instance['phone_label'] : '';
        $instance['phone_number'] = ( !empty( $new_instance['phone_number'] ) ) ? $new_instance['phone_number'] : '';
        $instance['email_label'] = ( !empty( $new_instance['email_label'] ) ) ? $new_instance['email_label'] : '';
        $instance['email_address'] = ( !empty( $new_instance['email_address'] ) ) ? $new_instance['email_address'] : '';
        $instance['loc_label'] = ( !empty( $new_instance['loc_label'] ) ) ? $new_instance['loc_label'] : '';
        $instance['location'] = ( !empty( $new_instance['location'] ) ) ? $new_instance['location'] : '';
        $instance['follow_us'] = ( !empty( $new_instance['follow_us'] ) ) ? $new_instance['follow_us'] : '';
        $instance['fsiname'] = ( !empty( $new_instance['fsiname'] ) ) ? $new_instance['fsiname'] : '';
        $instance['fslink'] = ( !empty( $new_instance['fslink'] ) ) ? $new_instance['fslink'] : '';
        $instance['ssiname'] = ( !empty( $new_instance['ssiname'] ) ) ? $new_instance['ssiname'] : '';
        $instance['sslink'] = ( !empty( $new_instance['sslink'] ) ) ? $new_instance['sslink'] : '';
        $instance['tsiname'] = ( !empty( $new_instance['tsiname'] ) ) ? $new_instance['tsiname'] : '';
        $instance['tslink'] = ( !empty( $new_instance['tslink'] ) ) ? $new_instance['tslink'] : '';
        $instance['fosiname'] = ( !empty( $new_instance['fosiname'] ) ) ? $new_instance['fosiname'] : '';
        $instance['foslink'] = ( !empty( $new_instance['foslink'] ) ) ? $new_instance['foslink'] : '';
 
        return $instance;
    }
 
}

$edumel_footer_contact_info = new edumel_footer_contact_info_Widget();

?>