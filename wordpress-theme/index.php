<?php get_header(); ?>

<main class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-20 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            <?php echo get_theme_mod('hero_title', 'Empowering Teams.<br>Elevating Leaders.'); ?>
        </h1>
        <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up">
            <?php echo get_theme_mod('hero_description', 'Sprow is an AI-powered platform that connects employees and managers for seamless growth.'); ?>
        </p>
        <button class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors animate-fade-up">
            <?php echo get_theme_mod('hero_button_text', 'Sign up'); ?>
        </button>
    </section>

    <!-- Blog Posts -->
    <section class="container mx-auto px-4 py-12">
        <div class="grid md:grid-cols-3 gap-8">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <article class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="aspect-video">
                            <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover')); ?>
                        </div>
                    <?php endif; ?>
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-4">
                            <a href="<?php the_permalink(); ?>" class="hover:text-primary transition-colors">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        <div class="text-muted-foreground mb-4">
                            <?php the_excerpt(); ?>
                        </div>
                        <a href="<?php the_permalink(); ?>" class="text-primary hover:text-primary-hover transition-colors">
                            Read more →
                        </a>
                    </div>
                </article>
            <?php endwhile; endif; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>