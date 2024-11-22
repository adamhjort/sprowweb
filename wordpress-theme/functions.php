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

// Add REST API support for tags, read time, and author
function sprow_register_rest_fields() {
    // Register read time field
    register_rest_field('post', 'readTime', array(
        'get_callback' => function($post) {
            $read_time = get_post_meta($post['id'], 'read_time', true);
            return !empty($read_time) ? $read_time : '5 min read';
        }
    ));

    // Register tags field
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

    // Register featured image field
    register_rest_field('post', 'image', array(
        'get_callback' => function($post) {
            return get_the_post_thumbnail_url($post['id'], 'large');
        }
    ));

    // Register author field
    register_rest_field('post', 'author_info', array(
        'get_callback' => function($post) {
            $author_id = $post['author'];
            return array(
                'name' => get_the_author_meta('display_name', $author_id),
                'avatar' => get_avatar_url($author_id, array('size' => 96))
            );
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
    $exclude_id = isset($params['exclude_id']) ? intval($params['exclude_id']) : 0;

    $args = array(
        'post_type' => 'post',
        'posts_per_page' => $per_page,
        'paged' => $page,
        'orderby' => 'date',
        'order' => 'DESC',
        'post__not_in' => $exclude_id ? array($exclude_id) : array()
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
            'tags' => $tag_names,
            'excerpt' => get_the_excerpt($post->ID),
            'date' => get_the_date('F j, Y', $post->ID)
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

// Add custom meta box for read time
function sprow_add_read_time_meta_box() {
    add_meta_box(
        'read_time_meta_box',
        'Read Time',
        'sprow_read_time_meta_box_html',
        'post',
        'side',
        'default'
    );
}
add_action('add_meta_boxes', 'sprow_add_read_time_meta_box');

function sprow_read_time_meta_box_html($post) {
    $value = get_post_meta($post->ID, 'read_time', true);
    ?>
    <label for="read_time">Read Time:</label>
    <input type="text" id="read_time" name="read_time" value="<?php echo esc_attr($value); ?>" placeholder="e.g., 5 min read">
    <?php
}

function sprow_save_read_time_meta_box($post_id) {
    if (array_key_exists('read_time', $_POST)) {
        update_post_meta(
            $post_id,
            'read_time',
            sanitize_text_field($_POST['read_time'])
        );
    }
}
add_action('save_post', 'sprow_save_read_time_meta_box');

// Include the Recent Posts Widget
require get_template_directory() . '/inc/widgets/recent-posts-widget.php';