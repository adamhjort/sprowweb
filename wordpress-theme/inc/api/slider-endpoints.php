<?php
function sprow_register_slider_endpoints() {
    register_rest_route('sprow/v1', '/testimonials', array(
        'methods' => 'GET',
        'callback' => 'sprow_get_testimonials',
        'permission_callback' => '__return_true'
    ));

    register_rest_route('sprow/v1', '/how-it-works', array(
        'methods' => 'GET',
        'callback' => 'sprow_get_hiw_slides',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'sprow_register_slider_endpoints');

function sprow_get_testimonials() {
    $testimonials = get_posts(array(
        'post_type' => 'testimonial',
        'posts_per_page' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
    ));

    $data = array();
    foreach ($testimonials as $testimonial) {
        $data[] = array(
            'quote' => $testimonial->post_content,
            'author' => get_post_meta($testimonial->ID, '_testimonial_author', true),
            'role' => get_post_meta($testimonial->ID, '_testimonial_role', true),
            'image' => get_the_post_thumbnail_url($testimonial->ID, 'full'),
        );
    }

    return rest_ensure_response($data);
}

function sprow_get_hiw_slides() {
    $slides = get_posts(array(
        'post_type' => 'hiw_slide',
        'posts_per_page' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
    ));

    $data = array();
    foreach ($slides as $slide) {
        $data[] = array(
            'title' => $slide->post_title,
            'description' => get_post_meta($slide->ID, '_slide_description', true),
            'image' => get_the_post_thumbnail_url($slide->ID, 'full'),
        );
    }

    return rest_ensure_response($data);
}