<?php
/**
Template Name: Full Width
 */

get_header();

$edumel_hide_banner = get_post_meta(get_the_ID(), '_edumel_hide_banner', true);

if($edumel_hide_banner == true){
	
}else{
	edumel_single_banner();
}

?>


<div class="page-wrapper">
	<div class="container">
		<div class="row">
			<div class="col-12">
			
				<?php
				while ( have_posts() ) :
					the_post();

					get_template_part( 'template-parts/content', 'page-fullwidth' );
					
					?>

				<?php
					// If comments are open or we have at least one comment, load up the comment template.
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;

				endwhile; // End of the loop. ?>
						
			</div> 
		</div>
	</div>
</div>

<?php

get_footer();