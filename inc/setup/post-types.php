<?php
function sprow_register_post_types() {
    // Register Testimonials
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Testimonials', 'sprow'),
            'singular_name' => __('Testimonial', 'sprow'),
        ),
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
    ));

    // Register How It Works Slides
    register_post_type('hiw_slide', array(
        'labels' => array(
            'name' => __('How It Works Slides', 'sprow'),
            'singular_name' => __('Slide', 'sprow'),
        ),
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-slides',
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'sprow_register_post_types');