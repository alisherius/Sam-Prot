

$( document ).ready(function() {
    $('.slider-wrapper').slick({
        infinite: false,
        speed: 300,
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });

    $('.tabs-list').on('click', '.tab-item:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.portfolio-tabs_wrapper').find('div.tab-description').removeClass('active').eq($(this).index()).addClass('active');
    });

    $(".text-left .features-item_img-wrapper img").animated("slideInRight", "slideOutRight");
    $(".text-left .features-item_text-wrapper").animated("slideInLeft", "slideOutLeft");
    $(".text-right .features-item_img-wrapper img").animated("slideInLeft", "slideOutLeft");
    $(".text-right .features-item_text-wrapper").animated("slideInRight", "slideOutRight");
});

