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
            <div class="mt-12 pt-8 border-t text-center text-muted-foreground">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>