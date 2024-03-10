import Accordion from 'accordion-js';
import Aos from 'aos';
import { burger } from './total functions/burger';
import { openModal } from './total functions/modal';


new Accordion('.accordion-container');
burger();
Aos.init({
    duration: 1000,
})
openModal();