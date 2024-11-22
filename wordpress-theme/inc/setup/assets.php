<?php
function sprow_enqueue_scripts() {
    wp_enqueue_style('sprow-style', get_stylesheet_uri());
    wp_enqueue_script('sprow-script', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'sprow_enqueue_scripts');