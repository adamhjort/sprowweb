
jQuery(document).ready(function($) {
    // Mobile menu toggle
    $('.mobile-menu-button').on('click', function() {
        $('.mobile-menu').toggleClass('hidden');
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.mobile-menu').length && 
            !$(event.target).closest('.mobile-menu-button').length) {
            $('.mobile-menu').addClass('hidden');
        }
    });

    // Add floating class to nav on scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $('header nav > div').addClass('nav-floating');
        } else {
            $('header nav > div').removeClass('nav-floating');
        }
    });
});
