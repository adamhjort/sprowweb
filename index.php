<?php get_header(); ?>

<main class="min-h-screen bg-background">
    <?php if (have_posts()) : ?>
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="bg-white rounded-[20px] shadow-sm overflow-hidden">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="aspect-w-16 aspect-h-9">
                                <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover')); ?>
                            </div>
                        <?php endif; ?>
                        
                        <div class="p-6">
                            <h2 class="text-xl font-semibold mb-2">
                                <a href="<?php the_permalink(); ?>" class="hover:text-primary transition-colors">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            <div class="text-muted-foreground mb-4">
                                <?php the_excerpt(); ?>
                            </div>
                            <div class="flex items-center text-sm text-muted-foreground">
                                <span><?php echo get_the_date(); ?></span>
                                <span class="mx-2">•</span>
                                <span><?php the_author(); ?></span>
                            </div>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            
            <div class="mt-12 flex justify-center">
                <?php the_posts_pagination(array(
                    'prev_text' => __('Previous', 'sprow'),
                    'next_text' => __('Next', 'sprow'),
                    'class' => 'flex items-center gap-4'
                )); ?>
            </div>
        </div>
    <?php else : ?>
        <div class="container mx-auto px-4 py-12 text-center">
            <p class="text-lg text-muted-foreground"><?php _e('No posts found.', 'sprow'); ?></p>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>