import Accordion from 'accordion-js';
import Aos from 'aos';
import { burger } from './total functions/burger';
import { openModal } from './total functions/modal';

new Accordion('.accordion-container');
burger();

//дублируем клик на кнопку покупки для планшетной ориентации (при клике на цену)
function repeatClick(){
    let screenWidth = window.innerWidth;

    if (screenWidth<=992 && screenWidth >= 576){
        const buttonsPrice = document.querySelectorAll('[data-click="link-buy"]')
        // const buttonsBuy = document.querySelectorAll('[data-click="aim"]')
        for (const iterator of buttonsPrice) {
            iterator.addEventListener('click', ()=>{
                let parentDiv = iterator.closest('.servers__inner__wrapper__item');
                parentDiv.querySelector('[data-click="aim"]').click();
            });
        }
    }
}

repeatClick();
Aos.init({
    duration: 1000,
});

openModal();