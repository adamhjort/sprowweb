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