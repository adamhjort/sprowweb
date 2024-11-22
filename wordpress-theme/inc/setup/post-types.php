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

// Add custom fields for testimonials and slides
function sprow_register_meta_boxes() {
    add_meta_box(
        'testimonial_details',
        __('Testimonial Details', 'sprow'),
        'sprow_testimonial_meta_box',
        'testimonial',
        'normal',
        'high'
    );

    add_meta_box(
        'hiw_slide_details',
        __('Slide Details', 'sprow'),
        'sprow_hiw_slide_meta_box',
        'hiw_slide',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'sprow_register_meta_boxes');

function sprow_testimonial_meta_box($post) {
    wp_nonce_field('sprow_testimonial_meta_box', 'sprow_testimonial_meta_box_nonce');
    $author = get_post_meta($post->ID, '_testimonial_author', true);
    $role = get_post_meta($post->ID, '_testimonial_role', true);
    ?>
    <p>
        <label for="testimonial_author"><?php _e('Author Name', 'sprow'); ?></label><br>
        <input type="text" id="testimonial_author" name="testimonial_author" value="<?php echo esc_attr($author); ?>" class="widefat">
    </p>
    <p>
        <label for="testimonial_role"><?php _e('Author Role', 'sprow'); ?></label><br>
        <input type="text" id="testimonial_role" name="testimonial_role" value="<?php echo esc_attr($role); ?>" class="widefat">
    </p>
    <?php
}

function sprow_hiw_slide_meta_box($post) {
    wp_nonce_field('sprow_hiw_slide_meta_box', 'sprow_hiw_slide_meta_box_nonce');
    $description = get_post_meta($post->ID, '_slide_description', true);
    ?>
    <p>
        <label for="slide_description"><?php _e('Slide Description', 'sprow'); ?></label><br>
        <textarea id="slide_description" name="slide_description" class="widefat" rows="4"><?php echo esc_textarea($description); ?></textarea>
    </p>
    <?php
}

function sprow_save_meta_boxes($post_id) {
    // Save testimonial meta
    if (isset($_POST['testimonial_author'])) {
        update_post_meta($post_id, '_testimonial_author', sanitize_text_field($_POST['testimonial_author']));
    }
    if (isset($_POST['testimonial_role'])) {
        update_post_meta($post_id, '_testimonial_role', sanitize_text_field($_POST['testimonial_role']));
    }
    
    // Save slide meta
    if (isset($_POST['slide_description'])) {
        update_post_meta($post_id, '_slide_description', sanitize_textarea_field($_POST['slide_description']));
    }
}
add_action('save_post', 'sprow_save_meta_boxes');