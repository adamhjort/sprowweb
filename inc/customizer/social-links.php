<?php
function sprow_customize_register($wp_customize) {
    $wp_customize->add_section('sprow_social_links', array(
        'title'    => __('Social Links', 'sprow'),
        'priority' => 120,
    ));

    $wp_customize->add_setting('sprow_linkedin_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('sprow_linkedin_url', array(
        'label'    => __('LinkedIn URL', 'sprow'),
        'section'  => 'sprow_social_links',
        'type'     => 'url',
    ));

    $wp_customize->add_setting('sprow_instagram_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('sprow_instagram_url', array(
        'label'    => __('Instagram URL', 'sprow'),
        'section'  => 'sprow_social_links',
        'type'     => 'url',
    ));
}
add_action('customize_register', 'sprow_customize_register');