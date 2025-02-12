<?php
/**
Template Name: Page Builder Template
 */

get_header();

$edumel_rev_alias =  get_post_meta(get_the_ID(),'_edumel_rev_slider_alias',true); 

if($edumel_rev_alias){
 if (class_exists('RevSlider')) putRevSlider($edumel_rev_alias);
}

$edumel_hide_banner = get_post_meta(get_the_ID(), '_edumel_hide_banner', true);

if($edumel_hide_banner == true){
	
}else{
	edumel_single_banner();
}
?>

<div class="page-builder-template">
	<?php
	while ( have_posts() ) :
		the_post();

		the_content();

	endwhile; // End of the loop. ?>
						
</div>

<?php

get_footer();