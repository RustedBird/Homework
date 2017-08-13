;(function ($) {
    $(function () {
        $('.slider').slick({
            infinite: true,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="left-arrow">',
            nextArrow: '<div class="right-arrow">',
            autoplay: true,
            autoplaySpeed: 1000
        });
    });

})(jQuery);