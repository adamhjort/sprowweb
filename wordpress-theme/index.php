
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
                <!-- Hero Section -->
                <section class="text-center mb-16">
                    <h1 class="text-[64px] leading-[83px] font-bold text-[#161616] font-['Chakra_Petch'] mb-6">
                        Empowering Teams.<br/>
                        Elevating Leaders.
                    </h1>
                    <p class="text-[20px] leading-[26px] text-[#161616] max-w-[800px] mx-auto mb-8">
                        Sprow is an AI-powered platform that connects employees and managers for seamless growth. Using traditional HR tools, Sprow unifies all aspects of employee development.
                    </p>
                    <div class="flex justify-center gap-4">
                        <a href="/signup" class="inline-flex h-[50px] items-center justify-center rounded-[10px] bg-[#FF93AD] px-8 font-semibold text-[#161616] hover:bg-[#FF7A9C] transition-colors">
                            Sign up
                        </a>
                    </div>
                </section>

                <!-- How It Works Section -->
                <?php get_template_part('template-parts/content', 'how-it-works'); ?>

                <!-- Blog Section -->
                <?php get_template_part('template-parts/content', 'blog'); ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
