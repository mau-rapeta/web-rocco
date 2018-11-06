
// change navbar color with scroll

$(window).scroll(function() {
    if($(document).scrollTop() > 150) {
        $('.header').addClass('white-bckgrnd');
    }
    else {
        $('.header').removeClass('white-bckgrnd');
    }
});

// scroll animation 

$('.page-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// color del navbar en móvil

$('#navi-toggle').change(function() {
    if(this.checked) {
        $('.header').addClass('trans-bckgrnd');
    } else {
        $('.header').removeClass('trans-bckgrnd');
    }
});

// slick actions

$(window).resize(function() {
    $('.proyectos__grid').not('.slick-initialized').slick('resize');
});

$(window).on('orientationchange', function () {
    $('.proyectos__grid').not('.slick-initialized').slick('resize');
});

$(window).resize(function() {
    $('.slider').not('.slick-initialized').slick('resize');
});

$(window).on('orientationchange', function () {
    $('.slider').not('.slick-initialized').slick('resize');
});

$(document).ready(function() {
    $('.proyectos__grid').slick(proyectosSlickSet());

    $('.card__link').click(function() {
        $("html").animate({ scrollTop: 0 }, 800);
        $('.slider').slick({
            infinite: true,
            dots: true,
            customPaging: (slider, i) => {
                return '<span class="dot">0'+ (i+1) +'.</span>';
            },
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: "unslick"
                }
            ],
            prevArrow: '<span class="slickArrow slickArrow--prev slickArrow--more"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>',
            nextArrow: '<span class="slickArrow slickArrow--next slickArrow--more"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>'
        });
    });

    $('.proyectos__return').click(function() {
        if ($(window).width() < 991) {
            $("html").animate({ scrollTop: 200 }, 800);
        } else {
            $("html").animate({ scrollTop: 0 }, 800);
        }
        $('.slider').slick('unslick');
        $('.clientes').slick('unslick');
        $('.clientes').slick(clientesSlickSet());
    });

    $('.clientes').slick(clientesSlickSet());
});

///// Slick elements settings //////

function proyectosSlickSet() {
    return {
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        prevArrow: '<span class="slickArrow slickArrow--prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="slickArrow slickArrow--next"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>'
    }
}

function clientesSlickSet() {
    return {
        infinite: true,
        dots: true,
        customPaging: (slider, i) => {
            return '<span class="dot">0'+ (i+1) +'.</span>';
        },
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '<span class="slickArrow slickArrow--prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="slickArrow slickArrow--next"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>'
    }
}


// $('.prod-dest__prev').click(function(){
//     $('.proyectos__grid').slick('slickPrev');
// });
  
// $('.prod-dest__next').click(function(){
//     $('.proyectos__grid').slick('slickNext');
// });