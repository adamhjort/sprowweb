<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-background'); ?>>
    <?php wp_body_open(); ?>
    
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-[10px] py-4">
        <nav class="max-w-[1420px] w-full mx-auto">
            <div class="grid grid-cols-2 lg:grid-cols-3 items-center h-[70px] px-2 lg:px-4 max-w-full">
                <!-- Logo -->
                <div class="flex justify-start">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <div class="text-2xl font-bold text-primary w-[134px] h-[70px] flex items-center">
                            <?php bloginfo('name'); ?>
                        </div>
                    <?php endif; ?>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden lg:flex justify-center items-center gap-8">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => 'flex gap-8',
                        'fallback_cb' => false,
                        'items_wrap' => '<ul class="%2$s">%3$s</ul>',
                        'link_before' => '<span class="text-[14px] leading-[18px] font-semibold font-[\'Chakra_Petch\'] text-[#161616] hover:text-[#FF93AD] transition-colors whitespace-nowrap">',
                        'link_after' => '</span>'
                    ));
                    ?>
                </div>
                
                <!-- Actions -->
                <div class="hidden lg:flex justify-end items-center space-x-4">
                    <a href="/demo" class="text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] whitespace-nowrap px-2">Request demo</a>
                    <div class="w-[1px] h-4 bg-[#A29F95] opacity-50"></div>
                    <a href="/login" class="text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] whitespace-nowrap px-2">Login</a>
                    <a href="/signup" class="h-[35px] bg-[#FF93AD] hover:bg-[#FF7A9C] rounded-[10px] text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] px-4 flex items-center justify-center">
                        Sign up
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="lg:hidden flex justify-end">
                    <button type="button" class="mobile-menu-button p-2">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
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
                        'link_class' => 'block text-foreground hover:text-primary transition-colors px-4 py-2',
                        'fallback_cb' => false,
                    ));
                    ?>
                    <div class="mt-4 space-y-2">
                        <a href="/demo" class="block text-center text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] whitespace-nowrap px-4 py-2">Request demo</a>
                        <a href="/login" class="block text-center text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] whitespace-nowrap px-4 py-2">Login</a>
                        <a href="/signup" class="block text-center h-[35px] bg-[#FF93AD] hover:bg-[#FF7A9C] rounded-[10px] text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] px-4 flex items-center justify-center">Sign up</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>