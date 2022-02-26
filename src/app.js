import './scss/style.scss';
import 'bootstrap';

import { WOW } from 'wowjs';

import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

/*Se inicializa el plugin para las animaciones*/
var wow = new WOW({
    live: false,
    scrollContainer: null
});

/*Script para el slider banner*/
if ($.contains(document.body, document.getElementById('slider-home-banner'))) {

    var mySwiperOurBeliefs = new Swiper('#slider-home-banner', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
        }
    });
}

if ($.contains(document.body, document.getElementById('slider-news'))) {

    var slider_customers = new Swiper('#slider-news', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
            768: {
                slidesPerView: 2
            },
        }
    });

    $(document).on('click', '.btn-news', function (event) {
        event.preventDefault();

        var item = $(this).data('item');

        if (item) {
            slider_customers.slidePrev();
        } else {
            slider_customers.slideNext();
        }
    });
}

$(document).on('click', '.btn-target', function (event) {
    event.preventDefault();

    var item = $(this).attr('href');

    $('html').animate({ scrollTop: $(item).offset().top - 50 }, 1000);
});

/*Se agregan las animaciones para toda la pagina que no cargan de menera recurrente*/
wow.init();