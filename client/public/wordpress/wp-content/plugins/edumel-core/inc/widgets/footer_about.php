<?php

class edumel_footer_about_Widget extends WP_Widget {
 
    function __construct() {
 
        parent::__construct(
            'edumel-footer-about',  // Base ID
            'Edumel: Footer About'   // Name
        );
 
        add_action( 'widgets_init', function() {
            register_widget( 'edumel_footer_about_Widget' );
        });
 
    }
 
    
 
    public function widget( $args, $instance ) {
 
        echo $args['before_widget'];
 
        if ( ! empty( $instance['title'] ) ) {
            echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        }
		
		$logo = $instance['logo'];
		$desc = $instance['desc'];
		$fsiname = $instance['fsiname'];
		$fslink = $instance['fslink'];
		$ssiname = $instance['ssiname'];
		$sslink = $instance['sslink'];
		$tsiname = $instance['tsiname'];
		$tslink = $instance['tslink'];
		$fosiname = $instance['fosiname'];
		$foslink = $instance['foslink'];
		
	?>


		<div class="widget footer-widget mb-5 mb-lg-0">
			<div class="footer-logo">
				<a href="<?php echo esc_url(home_url('/'));?>" ><img src="<?php echo esc_url($logo);?>" alt="<?php echo esc_attr(get_the_title());?>"></a>
			</div>
			
			<p class="mt-4"><?php echo edumel_wp_kses($desc );?></p>

			<div class="footer-socials mt-5">
				<span class="me-2"><?php esc_html_e('Connect :' , 'edumel');?></span>
					<?php if($fslink){ ?>
					
						<a href="<?php echo esc_url($fslink);?>">
							<i class="<?php echo esc_attr($fsiname);?>"></i>
						</a>
					
					<?php } if($sslink){ ?>
					
						<a href="<?php echo esc_url($sslink);?>">
							<i class="<?php echo esc_attr($ssiname);?>"></i>
						</a>
					
					<?php } if($tslink){ ?>
					
						<a href="<?php echo esc_url($tslink);?>">
							<i class="<?php echo esc_attr($tsiname);?>"></i>
						</a>
					
					<?php } if($foslink){ ?>
					
						<a href="<?php echo esc_url($foslink);?>">
							<i class="<?php echo esc_attr($fosiname);?>"></i>
						</a>
					
					<?php } ?>

			</div>
		</div>
					
	 
	<?php
	
	echo $args['after_widget'];
    }
 
    public function form( $instance ) {
 
        $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( '', 'edumel' );
        $logo = ! empty( $instance['logo'] ) ? $instance['logo'] : esc_html__( '', 'edumel' );
        $desc = ! empty( $instance['desc'] ) ? $instance['desc'] : esc_html__( '', 'edumel' );
        $fsiname = ! empty( $instance['fsiname'] ) ? $instance['fsiname'] : esc_html__( '', 'edumel' );
        $fslink = ! empty( $instance['fslink'] ) ? $instance['fslink'] : esc_html__( '', 'edumel' );
        $ssiname = ! empty( $instance['ssiname'] ) ? $instance['ssiname'] : esc_html__( '', 'edumel' );
        $sslink = ! empty( $instance['sslink'] ) ? $instance['sslink'] : esc_html__( '', 'edumel' );
        $tsiname = ! empty( $instance['tsiname'] ) ? $instance['tsiname'] : esc_html__( '', 'edumel' );
        $tslink = ! empty( $instance['tslink'] ) ? $instance['tslink'] : esc_html__( '', 'edumel' );
        $fosiname = ! empty( $instance['fosiname'] ) ? $instance['fosiname'] : esc_html__( '', 'edumel' );
        $foslink = ! empty( $instance['foslink'] ) ? $instance['foslink'] : esc_html__( '', 'edumel' );
        
		?>
		
        <p>
        <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php echo esc_html__( 'Title:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'logo' ) ); ?>"><?php echo esc_html__( 'Enter Logo url:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'logo' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'logo' ) ); ?>" type="text" value="<?php echo esc_attr( $logo ); ?>">
        </p>   

		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'desc' ) ); ?>"><?php echo esc_html__( 'Description:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'desc' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'desc' ) ); ?>" type="text" value="<?php echo esc_attr( $desc ); ?>">
        </p>
		
		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'fsiname' ) ); ?>"><?php echo esc_html__( 'First Social Icon Name:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'fsiname' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'fsiname' ) ); ?>" type="text" value="<?php echo esc_attr( $fsiname ); ?>">
        </p>
		
		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'fslink' ) ); ?>"><?php echo esc_html__( 'First Social Link:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'fslink' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'fslink' ) ); ?>" type="text" value="<?php echo esc_attr( $fslink ); ?>">
        </p>
		
		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'ssiname' ) ); ?>"><?php echo esc_html__( 'Second Social Icon Name:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'ssiname' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'ssiname' ) ); ?>" type="text" value="<?php echo esc_attr( $ssiname ); ?>">
        </p>
		
		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'sslink' ) ); ?>"><?php echo esc_html__( 'Second Social Link:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'sslink' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'sslink' ) ); ?>" type="text" value="<?php echo esc_attr( $sslink ); ?>">
        </p>		
		
		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'tsiname' ) ); ?>"><?php echo esc_html__( 'Third Social Icon Name:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'tsiname' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'tsiname' ) ); ?>" type="text" value="<?php echo esc_attr( $tsiname ); ?>">
        </p>
		
		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'tslink' ) ); ?>"><?php echo esc_html__( 'Third Social Link:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'tslink' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'tslink' ) ); ?>" type="text" value="<?php echo esc_attr( $tslink ); ?>">
        </p>		
		
		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'fosiname' ) ); ?>"><?php echo esc_html__( 'Fourth Social Icon Name:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'fosiname' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'fosiname' ) ); ?>" type="text" value="<?php echo esc_attr( $fosiname ); ?>">
        </p>
		
		<p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'foslink' ) ); ?>"><?php echo esc_html__( 'Fourth Social Link:', 'edumel' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'foslink' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'foslink' ) ); ?>" type="text" value="<?php echo esc_attr( $foslink ); ?>">
        </p>
		
        <?php
 
    }
 
    public function update( $new_instance, $old_instance ) {
 
        $instance = array();
 
        $instance['title'] = ( !empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
        $instance['logo'] = ( !empty( $new_instance['logo'] ) ) ? $new_instance['logo'] : '';
        $instance['desc'] = ( !empty( $new_instance['desc'] ) ) ? $new_instance['desc'] : '';
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

$edumel_footer_about = new edumel_footer_about_Widget();

?>