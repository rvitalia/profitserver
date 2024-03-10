import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { burger } from './total functions/burger';
import Accordion from 'accordion-js';
import { openModal } from './total functions/modal';
import Aos from 'aos';


new Accordion('.accordion-container');

//проверка разрешения и запуск слайдера для планшета
function checkWidth(){
    let width = window.innerWidth;
    if(width > 576 && width <= 992){
        const swiper = new Swiper('.swiper__hosting', {
            slidesPerView: 3,
            spaceBetween: 8,
            modules: [Pagination],
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            // Responsive breakpoints
          breakpoints: {
            // when window width is >= 575px
            575: {
                slidesPerView: 1,
            },
            710: {
              slidesPerView: 2,
            },
            // when window width is >= 860px
            860: {
                slidesPerView: 3,
            },
          }
        });
    }
}

checkWidth();

burger();
openModal();
Aos.init({
  duration:1000,
})