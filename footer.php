<footer class="border-t">
    <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <?php if (is_active_sidebar('footer-1')) : ?>
                <div><?php dynamic_sidebar('footer-1'); ?></div>
            <?php endif; ?>
            <?php if (is_active_sidebar('footer-2')) : ?>
                <div><?php dynamic_sidebar('footer-2'); ?></div>
            <?php endif; ?>
            <?php if (is_active_sidebar('footer-3')) : ?>
                <div><?php dynamic_sidebar('footer-3'); ?></div>
            <?php endif; ?>
            <?php if (is_active_sidebar('footer-4')) : ?>
                <div><?php dynamic_sidebar('footer-4'); ?></div>
            <?php endif; ?>
        </div>
        <div class="mt-12 pt-8 border-t">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p class="text-muted-foreground">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
                <div class="flex space-x-4 mt-4 md:mt-0">
                    <?php if (get_theme_mod('sprow_linkedin_url')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('sprow_linkedin_url')); ?>" target="_blank" rel="noopener noreferrer" class="text-[#161616] hover:text-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('sprow_instagram_url')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('sprow_instagram_url')); ?>" target="_blank" rel="noopener noreferrer" class="text-[#161616] hover:text-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>