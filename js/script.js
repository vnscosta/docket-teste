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
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });
});
$('.menu__mobile--btn').click( function(){
    $('.menu__mobile--btn').toggleClass('active');
    $('.menu').toggleClass('active');
})
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
    $(window).bind('scroll', function () {
        if($(window).scrollTop() > 350){
            $('nav').css('position','fixed');
            $('nav').css('background-color','#5A5789');
        }else{
            $('nav').css('position','sticky');
            $('nav').css('background-color','transparent');
        };
    })
};