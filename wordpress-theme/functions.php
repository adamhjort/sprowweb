<?php
function sprow_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'sprow_theme_support');

function sprow_enqueue_scripts() {
    wp_enqueue_style('sprow-style', get_stylesheet_uri());
    wp_enqueue_script('sprow-script', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'sprow_enqueue_scripts');

// Add REST API support for tags
function sprow_register_rest_fields() {
    register_rest_field('post', 'tags', array(
        'get_callback' => function($post) {
            $tags = wp_get_post_tags($post['id']);
            $tag_names = array();
            foreach($tags as $tag) {
                $tag_names[] = $tag->name;
            }
            return $tag_names;
        }
    ));
}
add_action('rest_api_init', 'sprow_register_rest_fields');

// Add custom endpoint for filtered posts
function sprow_get_filtered_posts($request) {
    $params = $request->get_params();
    $tag = isset($params['tag']) ? $params['tag'] : '';
    $page = isset($params['page']) ? intval($params['page']) : 1;
    $per_page = isset($params['per_page']) ? intval($params['per_page']) : 4;

    $args = array(
        'post_type' => 'post',
        'posts_per_page' => $per_page,
        'paged' => $page,
        'orderby' => 'date',
        'order' => 'DESC'
    );

    if (!empty($tag)) {
        $args['tag'] = $tag;
    }

    $query = new WP_Query($args);
    $posts = array();
    
    foreach($query->posts as $post) {
        $tags = wp_get_post_tags($post->ID);
        $tag_names = array_map(function($tag) {
            return $tag->name;
        }, $tags);
        
        $posts[] = array(
            'id' => $post->ID,
            'title' => $post->post_title,
            'image' => get_the_post_thumbnail_url($post->ID, 'large'),
            'readTime' => get_post_meta($post->ID, 'read_time', true) ?: '5 min read',
            'tags' => $tag_names
        );
    }

    $response = array(
        'posts' => $posts,
        'total' => $query->found_posts,
        'totalPages' => ceil($query->found_posts / $per_page)
    );

    return rest_ensure_response($response);
}

add_action('rest_api_init', function() {
    register_rest_route('sprow/v1', '/filtered-posts', array(
        'methods' => 'GET',
        'callback' => 'sprow_get_filtered_posts',
        'permission_callback' => '__return_true'
    ));
});

// Include the Recent Posts Widget
require get_template_directory() . '/inc/widgets/recent-posts-widget.php';