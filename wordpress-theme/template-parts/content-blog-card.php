<?php
$categories = get_the_category();
$read_time = get_post_meta(get_the_ID(), 'read_time', true) ?: '5 min read';
?>

<article class="bg-white rounded-[30px] shadow-[0px_0px_6px_rgba(0,0,0,0.05)] overflow-hidden">
    <?php if (has_post_thumbnail()) : ?>
        <div class="p-5 relative bg-cover bg-center h-[258px]" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>')">
            <div class="bg-white/50 rounded-[10px] px-2 py-2 w-fit">
                <span class="text-[14px] leading-[18px] font-semibold text-[#161616]">
                    <?php echo esc_html($read_time); ?>
                </span>
            </div>
        </div>
    <?php endif; ?>

    <div class="p-[20px] space-y-4">
        <?php if (!empty($categories)) : ?>
            <div class="flex flex-wrap gap-2">
                <?php foreach ($categories as $category) : ?>
                    <span class="bg-[#FFC8D5] text-[#161616] rounded-[20px] px-3 py-1.5 text-[12px] font-semibold">
                        <?php echo esc_html($category->name); ?>
                    </span>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <h2 class="text-[24px] leading-[31px] font-semibold text-[#161616]">
            <a href="<?php the_permalink(); ?>">
                <?php the_title(); ?>
            </a>
        </h2>
    </div>
</article>