<?php
function sprow_enqueue_scripts() {
    // Deregister default styles that might conflict
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    
    // Enqueue theme styles
    wp_enqueue_style('sprow-style', get_stylesheet_uri());
    wp_enqueue_style('sprow-main', get_template_directory_uri() . '/assets/css/main.css');
    
    // Enqueue theme scripts
    wp_enqueue_script('sprow-script', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'sprow_enqueue_scripts');

// Add support for editor styles
function sprow_add_editor_styles() {
    add_theme_support('editor-styles');
    add_editor_style('assets/css/main.css');
}
add_action('after_setup_theme', 'sprow_add_editor_styles');