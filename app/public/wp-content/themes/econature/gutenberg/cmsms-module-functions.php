<?php
/**
 * @package 	WordPress
 * @subpackage 	EcoNature
 * @version 	1.4.8
 * 
 * Gutenberg Functions
 * Created by CMSMasters
 * 
 */


/* Load Parts */
require_once(get_template_directory() . '/gutenberg/function/module-colors.php');
require_once(get_template_directory() . '/gutenberg/function/module-fonts.php');


/* Register CSS Styles and Scripts */
function cmsms_gutenberg_support() {
	$color_palettes = cmsms_gutenberg_editor_color_palettes_styles();
	
	add_theme_support('editor-color-palette', $color_palettes);
}

add_action('after_setup_theme', 'cmsms_gutenberg_support');


/* Block Editor Color Palettes and Styles */
function cmsms_gutenberg_editor_color_palettes_styles( $get_styles = false ) {
	$colors = cmsms_color_picker_palettes();

	$color_palettes = array();
	$styles_out = '';

	$index = 1;

	foreach ($colors as $color) {
		$color_palettes[] = array(
            'slug' => 'color-' . $index,
			'color' => $color,
		);

		if ( $get_styles ) {
			$styles_out .= "
			.has-color-{$index}-color {
				color: {$color};
			}

			.has-color-{$index}-background-color {
				background-color: {$color};
			}
			";
		}

		$index += 1;
	}

	if ( $get_styles && '' !== $styles_out ) {
		return $styles_out;
	}

	return $color_palettes;
}


/* Enqueue Block Editor Styles */
function cmsms_gutenberg_editor_styles() {
	wp_deregister_style('wp-block-library-theme');
	wp_register_style('wp-block-library-theme', '');
	
    wp_enqueue_style('econature-gutenberg-editor-style', get_theme_file_uri( '/gutenberg/css/editor-style.css' ), false, '1.0', 'all');
	
	
	if (is_rtl()) {
		wp_enqueue_style('econature-gutenberg-editor-style-rtl', get_template_directory_uri() . '/gutenberg/css/module-rtl.css', array(), '1.0.0', 'screen');
	}
	
	
	// Scripts
	wp_enqueue_script('econature-gutenberg-editor-options-script', get_template_directory_uri() . '/gutenberg/js/editor-options.js', array('jquery'), '1.0.0', true);
	
	
	$gutenberg_module_styles = cmsms_gutenberg_module_colors('', true);
	$gutenberg_module_styles .= cmsms_gutenberg_module_fonts('', true);
	
	wp_add_inline_style('econature-gutenberg-editor-style', $gutenberg_module_styles);
}

add_action('enqueue_block_editor_assets', 'cmsms_gutenberg_editor_styles');


/* Enqueue Frontend Styles */
function cmsms_gutenberg_frontend_styles() {
	wp_enqueue_style('econature-gutenberg-frontend-style', get_template_directory_uri() . '/gutenberg/css/frontend-style.css', array(), '1.0.0', 'screen');
	
	
	if (is_rtl()) {
		wp_enqueue_style('econature-gutenberg-frontend-rtl', get_template_directory_uri() . '/gutenberg/css/module-rtl.css', array(), '1.0.0', 'screen');
	}
}

add_action('wp_enqueue_scripts', 'cmsms_gutenberg_frontend_styles');

