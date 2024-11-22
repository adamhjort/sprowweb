<article class="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <?php if (has_post_thumbnail()) : ?>
        <div class="aspect-w-16 aspect-h-9">
            <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover')); ?>
        </div>
    <?php endif; ?>
    
    <div class="p-6">
        <?php
        $categories = get_the_category();
        if ($categories) : ?>
            <div class="flex flex-wrap gap-2 mb-4">
                <?php foreach ($categories as $category) : ?>
                    <span class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        <?php echo esc_html($category->name); ?>
                    </span>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <h2 class="text-xl font-semibold mb-2 hover:text-primary transition-colors">
            <a href="<?php the_permalink(); ?>">
                <?php the_title(); ?>
            </a>
        </h2>

        <div class="text-muted-foreground mb-4">
            <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
        </div>

        <div class="flex items-center text-sm text-muted-foreground">
            <span><?php echo get_the_date(); ?></span>
            <span class="mx-2">•</span>
            <span><?php echo get_the_author(); ?></span>
        </div>
    </div>
</article>