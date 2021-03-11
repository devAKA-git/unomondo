<?php
/**
 * @package 	WordPress
 * @subpackage 	EcoNature Child
 * @version		1.0.0
 * 
 * Child Theme Functions File
 * Created by CMSMasters
 * 
 */


function econature_child_enqueue_styles() {
    wp_enqueue_style('theme-root-style', get_template_directory_uri() . '/style.css' );
	
    wp_enqueue_style('econature-style', get_stylesheet_directory_uri() . '/style.css', array('theme-style'));
}

add_action('wp_enqueue_scripts', 'econature_child_enqueue_styles');
?>