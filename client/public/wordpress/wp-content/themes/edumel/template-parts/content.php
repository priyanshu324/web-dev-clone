<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package edumel
 */

?>

<article id="post-<?php the_ID(); ?>" class="col-xl-6">
	<div class="blog-item mb-30">
	<?php if(has_post_thumbnail()){ ?>
		<div class="post-thumb">
			<a href="<?php the_permalink();?>"><?php the_post_thumbnail('edumel_blog');?></a>
		</div>
	<?php } ?>	

		<div class="blog-content">
			<div class="post-meta">
				<span class="post-author"><?php edumel_posted_by();?></span>
				<span class="post-date"><i class="fa fa-calendar-alt mr-2"></i><?php echo get_the_time('M d, Y');?></span>
				
			</div>
			<h3 class="post-title"> <a href="<?php the_permalink();?>"><?php the_title();?></a></h3>
			
			<?php the_excerpt();?>
			<?php wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'edumel' ),
				'after'  => '</div>',
			)
		); ?>
		</div>
	</div>
</article>