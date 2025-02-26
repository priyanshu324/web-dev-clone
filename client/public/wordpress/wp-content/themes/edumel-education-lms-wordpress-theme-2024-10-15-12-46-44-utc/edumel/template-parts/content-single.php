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
		<div class="post-meta">
			<span class="post-author"><?php edumel_posted_by();?></span>
			<span class="post-date"><i class="fa fa-calendar-alt mr-2"></i><?php echo get_the_time('M d, Y');?></span>
			<span class="post-comments"><i class="far fa-comments"></i><?php comments_popup_link( esc_html__( '0 comment', 'edumel' ), esc_html__( '1 Comment', 'edumel' ), esc_html__( '% Comments', 'edumel' ) ); ?></span>
		</div>
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
   

	<!--  Author -->
	<div class="post-single-author mb-5">
		<div class="author-img">
			<?php echo get_avatar( get_the_author_meta('email') , 90 ); ?>
		</div>
		<div class="author-info">
			<h4><a href="<?php echo esc_url(get_author_posts_url( get_the_author_meta( 'ID' ) )); ?>"><?php the_author(); ?></a></h4>
			<span><?php echo get_the_author_meta('designation');?></span>
			<p><?php echo get_the_author_meta('description');?></p>
		</div>
	</div>

</div>