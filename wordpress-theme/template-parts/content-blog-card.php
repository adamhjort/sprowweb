<?php
$categories = get_the_category();
$tags = get_the_tags();
$read_time = get_post_meta(get_the_ID(), 'read_time', true) ?: '5 min read';
?>

<article class="bg-white rounded-[30px] shadow-[0px_0px_6px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
    <?php if (has_post_thumbnail()) : ?>
        <div class="p-5">
            <div class="relative bg-cover bg-center h-[258px] rounded-[20px]" style="background-image: url('<?php echo get_the_post_thumbnail_url(null, 'large'); ?>')">
                <div class="absolute top-4 left-4">
                    <div class="bg-white/50 backdrop-blur-sm rounded-[10px] px-2 py-2">
                        <span class="text-[14px] leading-[18px] font-semibold text-[#161616]">
                            <?php echo esc_html($read_time); ?>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>

    <div class="p-[20px] space-y-4">
        <?php if ($tags) : ?>
            <div class="flex flex-wrap gap-2">
                <?php foreach ($tags as $tag) : ?>
                    <a href="<?php echo get_tag_link($tag->term_id); ?>" 
                       class="bg-[#FFC8D5] text-[#161616] rounded-[20px] px-3 py-1.5 text-[12px] font-semibold hover:bg-[#FFB1C3] transition-colors">
                        <?php echo esc_html($tag->name); ?>
                    </a>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <h2 class="text-[24px] leading-[31px] font-semibold text-[#161616]">
            <a href="<?php the_permalink(); ?>" class="hover:text-[#FF93AD] transition-colors">
                <?php the_title(); ?>
            </a>
        </h2>

        <div class="text-[16px] leading-[21px] text-[#666666]">
            <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
        </div>

        <div class="text-[14px] leading-[18px] text-[#666666]">
            <?php echo get_the_date('F j, Y'); ?>
        </div>
    </div>
</article>