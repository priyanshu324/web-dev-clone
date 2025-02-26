<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Edumel
 */

?>

<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Edumel
 */

?>

<article id="post-<?php the_ID(); ?>" class="single-post-details">
	<div class="post-single">
		<div class="single-post-content">
			<?php the_content();?>
		</div>
	</div>
</article>