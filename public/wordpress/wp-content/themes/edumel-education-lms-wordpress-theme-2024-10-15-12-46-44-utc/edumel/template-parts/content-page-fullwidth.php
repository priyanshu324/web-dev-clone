<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Edumel
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="post-single">
	<?php if(has_post_thumbnail()){ ?>
		<div class="post-thumb">
			<?php the_post_thumbnail('edumel_single_blog');?>
		</div>
	<?php } ?>
	   <div class="single-post-content">
	
			<div class="entry-content">
				<?php
					the_content();

					wp_link_pages(
						array(
							'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'edumel' ),
							'after'  => '</div>',
						)
					);
					?>
					
			</div>
		</div>

	</div>
</article><!-- #post-<?php the_ID(); ?> -->