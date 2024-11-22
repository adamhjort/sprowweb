<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <nav class="border-b">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold text-primary">
                <?php
                if (has_custom_logo()) {
                    the_custom_logo();
                } else {
                    echo bloginfo('name');
                }
                ?>
            </div>
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container_class' => 'hidden md:flex space-x-6',
                'menu_class' => 'flex space-x-6'
            ));
            ?>
            <div class="flex space-x-4">
                <button class="px-4 py-2 text-foreground hover:text-primary transition-colors">Login</button>
                <button class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors">Sign up</button>
            </div>
        </div>
    </nav>