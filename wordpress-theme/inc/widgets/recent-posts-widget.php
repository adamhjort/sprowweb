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
        
        $query_args = array(
            'post_type' => 'post',
            'posts_per_page' => 4,
            'post_status' => 'publish',
            'post__not_in' => array($current_post_id),
            'orderby' => 'date',
            'order' => 'DESC'
        );

        $recent_posts = new WP_Query($query_args);

        if ($recent_posts->have_posts()) :
            echo '<div class="max-w-[1000px] mx-auto mt-12">';
            echo '<h2 class="text-2xl font-semibold mb-6">Recent Posts</h2>';
            echo '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">';
            
            while ($recent_posts->have_posts()) : $recent_posts->the_post();
                get_template_part('template-parts/content', 'blog-card');
            endwhile;

            echo '</div>';
            echo '</div>';
        endif;

        wp_reset_postdata();
    }
}

function register_sprow_recent_posts_widget() {
    register_widget('Sprow_Recent_Posts_Widget');
}
add_action('widgets_init', 'register_sprow_recent_posts_widget');