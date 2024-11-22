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
                        <?php echo get_the_title(); ?>
                    </h1>
                    <p class="text-[20px] leading-[26px] text-[#161616] max-w-[800px]">
                        Explore Sprow's blog for expert insights on HR strategies, employee engagement, and team
                        management. Stay updated on the latest trends in workplace culture, leadership
                        development, and AI-powered tools to help your organization and employees grow.
                    </p>

                    <!-- Categories -->
                    <div class="flex flex-wrap gap-[10px]">
                        <?php
                        $categories = get_categories();
                        foreach($categories as $category) : ?>
                            <a href="<?php echo get_category_link($category->term_id); ?>"
                               class="flex justify-center items-center px-[20px] py-[10px] rounded-[20px] font-['Chakra_Petch'] text-[14px] leading-[18px] font-semibold text-[#161616] transition-colors whitespace-nowrap
                                    <?php echo is_category($category->term_id) ? 'bg-[#FF93AD]' : 'bg-white border border-[#A29F95]'; ?>">
                                <?php echo $category->name; ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Blog Posts Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <?php get_template_part('template-parts/content', 'blog-card'); ?>
                    <?php endwhile; endif; ?>
                </div>

                <!-- Pagination -->
                <div class="mt-12 flex justify-center">
                    <?php the_posts_pagination(); ?>
                </div>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>