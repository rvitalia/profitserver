import { burger } from "./total functions/burger";
import Accordion from 'accordion-js';
import { openModal } from "./total functions/modal";
import Aos from "aos";

//смена табов
function changeTabs(){
    let containerTabs = document.querySelector('.knowledgeask__inner__top__tabs');
    let actiontabs = containerTabs.querySelectorAll('[data-select]');
    let containerTabsMain = document.querySelector('.knowledgeask__inner__bottom');
    let actionTabsMain = containerTabsMain.querySelectorAll('[data-current]');
    actiontabs.forEach(element => {
        element.addEventListener('click', ()=>{
            //убираем активный клас с табов управления
            for (const tab of actiontabs) {
                if(tab.classList.contains('active')){
                    tab.classList.remove('active');
                }
            }
            //убираем активный класс с окна таба отображения
            for (const tabMain of actionTabsMain) {
                if(tabMain.classList.contains('active')){
                    tabMain.classList.remove('active');
                    tabMain.style.opacity = '0';
                }
            }
            //добавляем активные классы
            let currentValue = element.dataset.select;
            element.classList.add('active');
            let currentActiveTab = containerTabsMain.querySelector(`[data-current="${currentValue}"]`);
            if(currentActiveTab){
                currentActiveTab.classList.add('active');
                setTimeout(() => {
                    currentActiveTab.style.opacity = '1';
                }, 300);
            }
        })
    });
}

//установка активных значений при загрузке
function firstStart(){
    let actiontab = document.querySelector('[data-select]');
    actiontab.click();
}

//исключаем работу в мобильной версии
function checkScreen(){
    let screenwidth = window.innerWidth;
    screenwidth > 710 ? (changeTabs(), firstStart()) : console.log("");
}

//аккордеон для разрешения меньше 710пкс
new Accordion('.accordion-knowledge');

burger();
checkScreen();
openModal();

Aos.init({
    duration:1000,
})