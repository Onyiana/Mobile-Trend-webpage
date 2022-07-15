
$(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 10,
    dots:true,
    arrows:true,
    nav:true,
    navText : ['<i class="ri-arrow-left-s-line owl-prev"></i>','<i class="ri-arrow-right-s-line owl-next"></i>'],
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:2,
        },
        1000:{
            items:4,
            loop:true
        }
    }
});