<?php
/**
Template Name: Login and Registration
 */

get_header();
edumel_single_banner();
?>



<div class="page-wrapper">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-xl-8 mx-auto">
			
				<?php
				while ( have_posts() ) :
					the_post();

					get_template_part( 'template-parts/content', 'reg-page' );
					
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