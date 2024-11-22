<?php
function sprow_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    add_theme_support('custom-logo', array(
        'height'      => 70,
        'width'       => 134,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    register_nav_menus(array(
        'primary' => __('Primary Menu', 'sprow'),
        'mobile' => __('Mobile Menu', 'sprow'),
        'footer' => __('Footer Menu', 'sprow'),
    ));

    load_theme_textdomain('sprow', get_template_directory() . '/languages');
    add_editor_style();
}
add_action('after_setup_theme', 'sprow_theme_support');