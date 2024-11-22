<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-[10px] py-4">
        <div class="max-w-[1420px] w-full mx-auto">
            <div class="grid grid-cols-2 lg:grid-cols-3 items-center h-[70px] px-2 lg:px-4 max-w-full">
                <!-- Logo -->
                <div class="flex justify-start">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    } else {
                        echo '<div class="text-2xl font-bold text-primary w-[134px] h-[70px] flex items-center">';
                        bloginfo('name');
                        echo '</div>';
                    }
                    ?>
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
                        'link_before' => '<span class="text-[14px] leading-[18px] font-semibold font-[\'Chakra_Petch\'] text-[#161616] hover:text-primary transition-colors whitespace-nowrap">',
                        'link_after' => '</span>'
                    ));
                    ?>
                </div>
                
                <!-- Actions -->
                <div class="hidden lg:flex justify-end items-center space-x-4">
                    <button class="text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] whitespace-nowrap px-2">Request demo</button>
                    <div class="w-[1px] h-4 bg-[#A29F95] opacity-50"></div>
                    <button class="text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] whitespace-nowrap px-2">Login</button>
                    <button class="h-[35px] bg-[#FF93AD] hover:bg-primary-hover rounded-[10px] text-[14px] leading-[18px] font-semibold font-['Chakra_Petch'] text-[#161616] px-4">
                        Sign up
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <div class="lg:hidden flex justify-end">
                    <button class="text-foreground p-2" aria-label="Toggle mobile menu" data-toggle="mobile-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <!-- Mobile Menu -->
                <div class="mobile-menu hidden lg:hidden fixed inset-0 bg-white z-50">
                    <div class="p-4">
                        <button class="text-foreground p-2 float-right" aria-label="Close mobile menu" data-toggle="mobile-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'mobile',
                            'container' => false,
                            'menu_class' => 'flex flex-col space-y-4 pt-4',
                            'fallback_cb' => false,
                            'link_before' => '<span class="text-foreground hover:text-primary transition-colors px-4 py-2">',
                            'link_after' => '</span>'
                        ));
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </nav>