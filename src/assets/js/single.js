import Accordion from 'accordion-js';
import Aos from 'aos';
import { burger } from './total functions/burger';
import { openModal } from './total functions/modal';

//если нужен аккордеон
let acc = document.querySelector('.single-container');
if(acc){
    new Accordion('.single-container');
    
    function doubleClickAccordeon(){
        let doubleItem = document.querySelectorAll('.ac-trigger__repeater');
        doubleItem.forEach(element => {
            element.addEventListener('click', ()=>{
                let parentbutton = element.closest('.single-container-menu');
                let closebutton = parentbutton.querySelector('button[type=button]');
                closebutton.click();
            })
        });
    }
    doubleClickAccordeon();
}

//если слайдер дотсы слева
let slickl = document.querySelector('.slick-slider-dots-left');
if(slickl){
    jQuery(document).ready(function($){
        $('.slick-slider-dots-left').slick({
           dots: true,
           arrows: false,
           slidesToShow: 1,
           slidesToScroll: 1,
           autoplay: true,
           autoplaySpeed: 3000, // Интервал между слайдами в миллисекундах
        });
     });
}

//если слайдер дотсы справа
let slickr = document.querySelector('.slick-slider-dots-right');
if(slickr){
    jQuery(document).ready(function($){
        $('.slick-slider-dots-right').slick({
           dots: true,
           arrows: false,
           slidesToShow: 1,
           slidesToScroll: 1,
           autoplay: true,
           autoplaySpeed: 3000, // Интервал между слайдами в миллисекундах
        });
     });
}



//если таблица без цветного заголовка
let table1 = document.querySelector('#table1');
if(table1){
    $(document).ready(function() {
        $('#table1').DataTable();
      });
}
//если таблица с цветным заголовком
let table2 = document.querySelector('#table2');
if(table2){
$(document).ready(function() {
    $('#table2').DataTable();
  });
}

burger();
openModal();
Aos.init({
    duration: 1000,
})