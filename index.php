<?php get_header(); ?>

<main class="min-h-screen bg-background">
    <div class="relative w-full max-w-[1440px] mx-auto overflow-hidden">
        <div class="absolute inset-0 w-full" style="height: 1500px;">
            <img 
                src="<?php echo get_template_directory_uri(); ?>/assets/images/background-pattern.png"
                alt="Background pattern"
                class="w-full h-full object-cover opacity-50"
                style="object-position: center 100px; object-fit: cover; transform: scale(1.2);"
            />
        </div>

        <div class="container mx-auto px-4 pt-32 pb-20 relative">
            <div class="max-w-[1274px] mx-auto">
                <!-- Header -->
                <div class="mb-16 space-y-6">
                    <h1 class="text-[64px] leading-[83px] font-bold text-[#161616] font-['Chakra_Petch']">
                        Blog
                    </h1>
                    <p class="text-[20px] leading-[26px] text-[#161616] max-w-[800px]">
                        Explore Sprow's blog for expert insights on HR strategies, employee engagement, and team
                        management. Stay updated on the latest trends in workplace culture, leadership
                        development, and AI-powered tools to help your organization and employees grow.
                    </p>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-[10px]">
                        <a href="<?php echo get_home_url(); ?>" 
                           class="flex justify-center items-center px-[20px] py-[10px] rounded-[20px] font-['Chakra_Petch'] text-[14px] leading-[18px] font-semibold text-[#161616] transition-colors whitespace-nowrap
                                <?php echo !is_tag() ? 'bg-[#FF93AD]' : 'bg-white border-2 border-[#A29F95]'; ?>">
                            All
                        </a>
                        <?php
                        $tags = get_tags();
                        foreach($tags as $tag) : ?>
                            <a href="<?php echo get_tag_link($tag->term_id); ?>"
                               class="flex justify-center items-center px-[20px] py-[10px] rounded-[20px] font-['Chakra_Petch'] text-[14px] leading-[18px] font-semibold text-[#161616] transition-colors whitespace-nowrap
                                    <?php echo is_tag($tag->term_id) ? 'bg-[#FF93AD]' : 'bg-white border-2 border-[#A29F95]'; ?>">
                                <?php echo $tag->name; ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Blog Posts Grid -->
                <?php if (have_posts()) : ?>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <?php while (have_posts()) : the_post(); ?>
                            <?php get_template_part('template-parts/content', 'blog-card'); ?>
                        <?php endwhile; ?>
                    </div>

                    <!-- Pagination -->
                    <div class="mt-12 flex justify-center">
                        <?php
                        echo paginate_links(array(
                            'prev_text' => __('Previous'),
                            'next_text' => __('Next'),
                            'class' => 'flex items-center gap-4'
                        ));
                        ?>
                    </div>
                <?php else : ?>
                    <div class="w-full text-center py-12">
                        <p class="text-lg text-muted-foreground">
                            <?php
                            if (is_tag()) {
                                echo 'No posts available in this category.';
                            } else {
                                echo 'No posts available.';
                            }
                            ?>
                        </p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>