<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-background'); ?>>
    <?php wp_body_open(); ?>
    
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <nav class="nav-floating">
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between h-20">
                    <!-- Logo -->
                    <div class="flex-shrink-0">
                        <?php if (has_custom_logo()) : ?>
                            <?php the_custom_logo(); ?>
                        <?php else : ?>
                            <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
                                <?php bloginfo('name'); ?>
                            </a>
                        <?php endif; ?>
                    </div>

                    <!-- Primary Menu -->
                    <div class="hidden md:flex items-center space-x-8">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'container' => false,
                            'menu_class' => 'flex space-x-8',
                            'link_class' => 'nav-link',
                            'fallback_cb' => false,
                        ));
                        ?>
                    </div>

                    <!-- Action Buttons -->
                    <div class="hidden md:flex items-center space-x-4">
                        <a href="/demo" class="nav-button">Request Demo</a>
                        <a href="/login" class="nav-button">Login</a>
                        <a href="/signup" class="nav-button">Sign Up</a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="md:hidden">
                        <button type="button" class="mobile-menu-button p-2">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div class="mobile-menu hidden md:hidden">
                <div class="container mx-auto px-4 py-4">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'mobile',
                        'container' => false,
                        'menu_class' => 'space-y-4',
                        'link_class' => 'nav-link block',
                        'fallback_cb' => false,
                    ));
                    ?>
                    <div class="mt-4 space-y-2">
                        <a href="/demo" class="nav-button block text-center">Request Demo</a>
                        <a href="/login" class="nav-button block text-center">Login</a>
                        <a href="/signup" class="nav-button block text-center">Sign Up</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>