import Accordion from 'accordion-js';
import { burger } from './total functions/burger';
import { openModal } from './total functions/modal';
import Aos from 'aos';
import { dataParse } from './total functions/parsedata';

//генерация флагов
function generetionsFlag(){
    fetch("./assets/images/output.json")
        .then(response => response.json())
        .then(data => {
            const country_codes = {};
            for (const countryInfo in data) {
                if (data.hasOwnProperty(countryInfo)) {
                    const countryName = countryInfo.split(" | ")[0];
                    const countryCode = countryInfo.split(" | ")[1];
                    country_codes[countryName] = countryCode;
                }
            }
            // const country_codes = {
            //     "Almaty, Kazakhstan": "KZ", "Amsterdam, Netherlands": "NL", "Chelyabinsk, Russia": "RU",
            //     "Frankfurt, Germany": "DE", "Gdansk, Poland": "PL", "Hong Kong": "CN", Singapore: "SG", "Madrid, Spain": "ES",
            //     "Los Angeles, USA": "US", "Toronto, Canada": "CA", "Sofia, Bulgaria": "BG", "London, UK": "GB", "Geneva, Switzerland": "CH",
            //     "Riga, Latvia": "LV", "Tel Aviv, Israel": "IL", "Stockholm, Sweden": "SE", "Izmir, Turkey": "TR", "Prague, Czech Republic": "CZ"
            // };
            const countryLabel = document.getElementById("country-label");
            let firstElement = true; // Флаг для отслеживания первого элемента
            for (const key in country_codes) {
                if (country_codes.hasOwnProperty(key)) {
                    const countryValue = country_codes[key];
                    const li = document.createElement("li");
                    // console.log(country_codes[key])
                    if (firstElement) {
                        li.classList.add("active");
                        firstElement = false;
                    }
                    li.classList.add("herovirtual__inner__tabs__country");
                    li.setAttribute("data-curent", countryValue);

                    const img = document.createElement("img");
                    img.src = `./assets/images/sprite.svg#herovirtual--${countryValue}`;
                    img.classList.add(`svg-herovirtual--${countryValue}-dims`, `herovirtual__inner__tabs__country__img`);
                    img.alt = `herovirtual--${countryValue}`;
                    img.width = 40;
                    img.height = 29;

                    const span = document.createElement("span");
                    span.classList.add("herovirtual__inner__tabs__country__desc");
                    span.textContent = key;

                    li.appendChild(img);
                    li.appendChild(span);
                    countryLabel.appendChild(li);
                }
            }
        })
        .catch(error => console.error("Error fetching data: ", error));
}
//рассчет одинаковой ширины карточек
function setWidth(){
    let carts = document.querySelectorAll('[data-cart]');
    carts.forEach(element => {
        if(element.classList.contains('active')){
            let count = element.childElementCount;
            let item = element.querySelectorAll('.herovirtual__inner__carts__item');
            item.forEach(el => {
                el.style.flexBasis = `calc(100%/${count})`;
            });
        }
    });
}

//смена табов
function changeTabs(){
    let cart = document?.querySelector('[data-cart]');
    let flag = document?.querySelector('[data-curent]');
    cart.classList.add('active');
    flag.classList.add('active');
    setTimeout(() => {
        cart.classList.add('animation');    
    }, 300);
    let carts = document?.querySelectorAll('[data-cart]');
    let flags = document?.querySelectorAll('[data-curent]');
    console.log(flags);
    let box = document?.querySelector('[data-container]');
    flags.forEach(element => {
        element.addEventListener('click', () =>{
            let currntFlag = element.dataset.curent;
            flags.forEach(item => {
                item.classList.remove('active');
            });
            carts.forEach(el => {
                el.classList.remove('animation');
                el.classList.remove('active');
            });
            element.classList.add('active');
            let activetab = box.querySelector(`[data-cart=${currntFlag}]`);
            if(activetab){
                activetab.classList.add('active');
                setTimeout(() => {
                    activetab.classList.add('animation');
                }, 300);
            }
            setWidth();
        })
        
    });
}

//инициализация карты - сюда подставить свой код 
function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 1
    });
}

//генерация флагов
generetionsFlag();
//парсим json
dataParse();
// где нужен фак - переносим
  new Accordion('.accordion-container');
//где нужна анимации
Aos.init({
    duration: 1000,
});


openModal();
setWidth();
// initMap();

burger();

setTimeout(() => {
    changeTabs();
}, 10000);