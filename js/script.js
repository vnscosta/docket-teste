$(function(){
    $('.media__carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
});