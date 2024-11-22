<?php
class Sprow_Recent_Posts_Widget extends WP_Widget {
    public function __construct() {
        parent::__construct(
            'sprow_recent_posts',
            'Sprow Recent Posts',
            array('description' => 'Displays recent blog posts in a grid layout')
        );
    }

    public function widget($args, $instance) {
        $current_post_id = get_the_ID();
        $current_tag = get_query_var('tag');
        
        $query_args = array(
            'post_type' => 'post',
            'posts_per_page' => 4,
            'post_status' => 'publish',
            'post__not_in' => array($current_post_id),
            'orderby' => 'date',
            'order' => 'DESC'
        );

        if (!empty($current_tag)) {
            $query_args['tag'] = $current_tag;
        }

        $recent_posts = new WP_Query($query_args);

        if ($recent_posts->have_posts()) :
            echo '<div class="max-w-[1000px] mx-auto mt-12">';
            echo '<h2 class="text-2xl font-semibold mb-6">Recent Posts</h2>';
            
            // First post (featured)
            if ($recent_posts->have_posts()) : $recent_posts->the_post();
                echo '<div class="w-full lg:w-[536px] mb-8">';
                get_template_part('template-parts/content', 'blog-card-featured');
                echo '</div>';
            endif;

            // Other posts (horizontal)
            echo '<div class="w-full lg:w-[708px] flex flex-col gap-[30px]">';
            while ($recent_posts->have_posts()) : $recent_posts->the_post();
                get_template_part('template-parts/content', 'blog-card-horizontal');
            endwhile;
            echo '</div>';

            // Load more button (only if there are more posts)
            $total_posts = $recent_posts->found_posts;
            if ($total_posts > 4) {
                echo '<div class="flex justify-center mt-12">';
                echo '<button class="load-more-posts px-6 py-3 bg-white text-black rounded-full border border-black hover:bg-gray-100">Load more</button>';
                echo '</div>';
            }

            echo '</div>';
        endif;

        wp_reset_postdata();
    }
}

function register_sprow_recent_posts_widget() {
    register_widget('Sprow_Recent_Posts_Widget');
}
add_action('widgets_init', 'register_sprow_recent_posts_widget');
