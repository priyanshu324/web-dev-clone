<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Edumel
 */

get_header();
edumel_single_banner();
?>
<div class="page-wrapper">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-xl-8">
			
			<?php
			while ( have_posts() ) :
				the_post();

				get_template_part( 'template-parts/content', 'single' );


				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>			

      		</div><!-- End Col -->
			
      		<div class="col-lg-4 col-xl-4">
				<div class="blog-sidebar mt-5 mt-lg-0">
					<?php get_sidebar();?>
				</div>
      		</div>
		</div>
	</div>
</div>


<?php
get_footer();
