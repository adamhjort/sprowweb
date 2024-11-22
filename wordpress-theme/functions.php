<?php
// Include core functionality
require get_template_directory() . '/inc/setup/theme-support.php';
require get_template_directory() . '/inc/setup/assets.php';
require get_template_directory() . '/inc/setup/post-types.php';

// Include customizer settings
require get_template_directory() . '/inc/customizer/social-links.php';

// Include API endpoints
require get_template_directory() . '/inc/api/slider-endpoints.php';

// Include widgets
require get_template_directory() . '/inc/widgets/recent-posts-widget.php';

// Translation support
function sprow_translate($text, $domain = 'sprow') {
    if (function_exists('pll__')) {
        return pll__($text);
    }
    return __($text, $domain);
}

// Register and enqueue styles and scripts
function sprow_enqueue_assets() {
    wp_enqueue_style('sprow-style', get_stylesheet_uri());
    wp_enqueue_style('sprow-fonts', get_template_directory_uri() . '/assets/fonts/fonts.css');
    wp_enqueue_script('sprow-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'sprow_enqueue_assets');

// Register navigation menus
register_nav_menus(array(
    'primary' => __('Primary Menu', 'sprow'),
    'mobile' => __('Mobile Menu', 'sprow'),
    'footer' => __('Footer Menu', 'sprow'),
));

// Register widget areas
function sprow_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer 1', 'sprow'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in footer column 1.', 'sprow'),
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="text-lg font-semibold mb-4">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer 2', 'sprow'),
        'id'            => 'footer-2',
        'description'   => __('Add widgets here to appear in footer column 2.', 'sprow'),
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="text-lg font-semibold mb-4">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer 3', 'sprow'),
        'id'            => 'footer-3',
        'description'   => __('Add widgets here to appear in footer column 3.', 'sprow'),
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="text-lg font-semibold mb-4">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer 4', 'sprow'),
        'id'            => 'footer-4',
        'description'   => __('Add widgets here to appear in footer column 4.', 'sprow'),
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="text-lg font-semibold mb-4">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'sprow_widgets_init');