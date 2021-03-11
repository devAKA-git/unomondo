<?php
/**
 * @package 	WordPress
 * @subpackage 	EcoNature
 * @version 	1.4.6
 * 
 * Website WooCommerce Functions
 * Created by CMSMasters
 * 
 */


/* Woocommerce Dynamic Cart */
function cmsms_woocommerce_cart_dropdown() {
	echo '<div class="cmsms_dynamic_cart">' . 
		'<a href="javascript:void(0);" class="cmsms_dynamic_cart_button cmsms-icon-basket-3"></a>' . 
		'<div class="widget_shopping_cart_content"></div>' . 
	'</div>';
}


/* Woocommerce Header Cart Link */
function cmsms_woocommerce_cart_link() {
	echo '<div class="cmsms_dynamic_cart_link">' . 
		'<a href="' . esc_url(wc_get_cart_url()) . '" class="cmsms_dynamic_cart_button cmsms-icon-basket-3"></a>' . 
	'</div>';
}


/* Woocommerce Add to Cart Button */
function cmsms_woocommerce_add_to_cart_button() {
	global $product;
	
	
	if (
		$product->is_purchasable() && 
		$product->is_type( 'simple' ) && 
		$product->is_in_stock()
	) {
		echo '<a href="' . esc_url($product->add_to_cart_url()) . '" data-product_id="' . esc_attr($product->get_id()) . '" data-product_sku="' . esc_attr($product->get_sku()) . '" class="add_to_cart_button cmsms_add_to_cart_button product_type_simple ajax_add_to_cart cmsms-icon-basket">' . esc_html__('Add to Cart', 'econature') . '</a>';
	}
	
	echo '<a href="' . esc_url(get_permalink($product->get_id())) . '" data-product_id="' . esc_attr($product->get_id()) . '" data-product_sku="' . esc_attr($product->get_sku()) . '" class="cmsms_details_button cmsms-icon-menu">' . esc_html__('Show Details', 'econature') . '</a>';
}


/* Woocommerce Rating */

function cmsms_woocommerce_rating($icon_trans = '', $icon_color = '', $in_review = false, $comment_id = '', $show = true) {
	global $product;
	
	
	if (get_option( 'woocommerce_enable_review_rating') === 'no') {
		return;
	}
	
	
	$rating = (($in_review) ? intval(get_comment_meta($comment_id, 'rating', true)) : ($product->get_average_rating() ? $product->get_average_rating() : '0'));
	
	$itemprop = $in_review ? 'reviewRating' : 'aggregateRating';
	
	$itemtype = $in_review ? 'Rating' : 'AggregateRating';
	
	
	$out = "
<div class=\"cmsms_star_rating\" itemprop=\"{$itemprop}\" itemscope itemtype=\"//schema.org/{$itemtype}\" title=\"" . sprintf(esc_html__('Rated %s out of 5', 'econature'), $rating) . "\">
<div class=\"cmsms_star_trans_wrap\">
	<span class=\"{$icon_trans} cmsms_star\"></span>
	<span class=\"{$icon_trans} cmsms_star\"></span>
	<span class=\"{$icon_trans} cmsms_star\"></span>
	<span class=\"{$icon_trans} cmsms_star\"></span>
	<span class=\"{$icon_trans} cmsms_star\"></span>
</div>
<div class=\"cmsms_star_color_wrap\" style=\"width:" . (($rating / 5) * 100) . "%\">
	<div class=\"cmsms_star_color_inner\">
		<span class=\"{$icon_color} cmsms_star\"></span>
		<span class=\"{$icon_color} cmsms_star\"></span>
		<span class=\"{$icon_color} cmsms_star\"></span>
		<span class=\"{$icon_color} cmsms_star\"></span>
		<span class=\"{$icon_color} cmsms_star\"></span>
	</div>
</div>
<span class=\"rating dn\"><strong itemprop=\"ratingValue\">" . esc_html($rating) . "</strong> " . esc_html__('out of 5', 'econature') . "</span>
</div>
";
	
	
	if ($show) {
		echo cmsms_return_content($out);
	} else {
		return $out;
	}
}


function cmsms_woocommerce_demo_store($html, $notice) {
	return '<div class="woocommerce-store-notice demo_store">' . 
		'<a href="#" class="cmsms-icon-cancel-5 woocommerce-store-notice__dismiss-link"></a>' . 
		'<p>' . wp_kses_post($notice) . '</p>' . 
	'</div>';
}

add_filter('woocommerce_demo_store', 'cmsms_woocommerce_demo_store', 10, 2);

remove_action('wp_footer', 'woocommerce_demo_store');
add_action('cmsms_after_main', 'woocommerce_demo_store');


function cmsms_woocommerce_support() {
    add_theme_support('woocommerce', array( 
		'thumbnail_image_width' => 540, 
		'single_image_width' => 600 
	));
}

add_action('after_setup_theme', 'cmsms_woocommerce_support');


add_filter('woocommerce_enqueue_styles', '__return_false');

