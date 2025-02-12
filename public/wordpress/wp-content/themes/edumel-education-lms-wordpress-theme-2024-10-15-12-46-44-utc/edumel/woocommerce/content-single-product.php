<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
?>
<div class="single_product_content section-padding">
	<div id="product-<?php the_ID(); ?>" <?php wc_product_class( '', $product ); ?>>
		<div class="row">
			<!-- Product Details Image -->
			<div class="col-md-6 col-xs-12">
				<div class="pd_img fix sin_p_left">
					<?php do_action( 'woocommerce_before_single_product_summary' );?>
				</div>
			</div>

			<!-- Product Details Content -->
			<div class="col-md-6 col-xs-12">
				<div class="prdct_dtls_content sin_p_right">
					<h3 class="pd_title"><?php the_title();?></h3>
						<div class="pd_price_dtls fix">
							<!-- Product Price -->
							<div class="single_price">
								<?php woocommerce_template_single_price();?>
							</div>
							<!-- Product Ratting -->
							<div class="pd_ratng">
								<div class="rtngs">
									<?php woocommerce_template_single_rating();?>
								</div>
							</div>
						</div>
						<div class="pd_text">

							<p><?php woocommerce_template_single_excerpt();?></p>					
						</div>
						
						
						
						<!-- Product Action -->
						<div class="product-actions">
							<?php woocommerce_template_single_add_to_cart();?>
						</div>
						<?php woocommerce_template_single_meta();?>
						<div class="pd_share_area fix">
							<h4><?php esc_html_e('Share this on:' , 'edumel');?></h4>
							<div class="pd_social_icon">
								<?php echo do_shortcode('[Sassy_Social_Share]') ?>
							</div>
						</div>
					</div>
				</div>
		</div>
		
		<div class="row">
			<div class="col-12">					
				<div class="pd_tab_area fix">									
					<?php 
					
						woocommerce_output_product_data_tabs();
					
					?>
				</div>
			</div>
		</div>
		
		<div class="related_prdct_area text-center">		
			<?php woocommerce_output_related_products();?>
		</div>
		
	</div>
			


	<?php
	/**
	 * Hook: woocommerce_before_single_product_summary.
	 *
	 * @hooked woocommerce_show_product_sale_flash - 10
	 * @hooked woocommerce_show_product_images - 20
	 */

	?>

	<div class="summary entry-summary">
		<?php
		/**
		 * Hook: woocommerce_single_product_summary.
		 *
		 * @hooked woocommerce_template_single_title - 5
		 * @hooked woocommerce_template_single_rating - 10
		 * @hooked woocommerce_template_single_price - 10
		 * @hooked woocommerce_template_single_excerpt - 20
		 * @hooked woocommerce_template_single_add_to_cart - 30
		 * @hooked woocommerce_template_single_meta - 40
		 * @hooked woocommerce_template_single_sharing - 50
		 * @hooked WC_Structured_Data::generate_product_data() - 60
		 */

		?>
	</div>

	<?php
	/**
	 * Hook: woocommerce_after_single_product_summary.
	 *
	 * @hooked woocommerce_output_product_data_tabs - 10
	 * @hooked woocommerce_upsell_display - 15
	 * @hooked woocommerce_output_related_products - 20
	 */

	?>
</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>
