<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package edumel
 */
$edumel_tags_list = get_the_tag_list( '', esc_html_x( ' ', '', 'edumel' ) );
?>

<div class="post-single">
	
	<div class="post-thumb">
		<?php the_post_thumbnail('edumel_single_blog');?>
	</div>

   <div class="single-post-content">
		
		<h3 class="post-title"><?php the_title();?></h3>
		<div class="entry-content">
			<?php the_content();?>
		</div>
	</div>

   <!--  Share -->
   <div class="blog-footer-meta d-md-flex justify-content-between align-items-center">
		<div class="post-tags mb-4 mb-md-0">
			<?php echo edumel_wp_kses($edumel_tags_list);?>
		</div>

   </div>
   

	

</div>