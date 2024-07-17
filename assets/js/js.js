$('.partners').owlCarousel({
    items: 6,
    margin:20,
    autoplay:true,
    loop:true,
    autoplayTimeout:4000,
    dots:true,
    nav:true,
    responsive : {
        0 : {
            items:2
        },
        600 : {
            items:4
        },
        900: {
            items:5
        }
    }
});

$('.doctor-carousel').owlCarousel({
    // items:2,
    loop:true,
    margin :20,
    responsive:{
        0: {
            items:1
        },
        600: {
            items:2
        },
        900: {
            items:4
        }
    }
});