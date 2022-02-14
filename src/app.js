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

/*Todos los "load" cargan los bloques recurrentes*/
$('header').load("header.html");
$('footer').load("footer.html");

/*Script para el slider banner*/
if ($.contains(document.body, document.getElementById('slider-home-banner'))) {

    var mySwiperOurBeliefs = new Swiper('#slider-home-banner', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}

/*Se agregan las animaciones para toda la pagina que no cargan de menera recurrente*/
wow.init();