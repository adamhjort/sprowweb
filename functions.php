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

// Register navigation menus
function sprow_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'sprow'),
        'mobile' => __('Mobile Menu', 'sprow'),
        'footer' => __('Footer Menu', 'sprow')
    ));
}
add_action('after_setup_theme', 'sprow_register_menus');

// Add custom classes to menu items
function sprow_menu_classes($classes, $item, $args) {
    if(isset($args->link_class)) {
        $classes[] = $args->link_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'sprow_menu_classes', 1, 3);

// Register widget areas
function sprow_widgets_init() {
    register_sidebar(array(
        'name'          => __('Primary Sidebar', 'sprow'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'sprow'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'sprow'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'sprow'),
        'before_widget' => '<div class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'sprow_widgets_init');

// Enqueue scripts and styles
function sprow_enqueue_scripts() {
    wp_enqueue_style('sprow-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
    wp_enqueue_style('sprow-main', get_template_directory_uri() . '/assets/css/main.css', array(), wp_get_theme()->get('Version'));
    wp_enqueue_script('sprow-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), wp_get_theme()->get('Version'), true);
}
add_action('wp_enqueue_scripts', 'sprow_enqueue_scripts');

// Add theme support
function sprow_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 70,
        'width'       => 134,
        'flex-width'  => true,
        'flex-height' => true,
    ));
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'sprow_theme_support');