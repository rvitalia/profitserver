import { burger } from "./total functions/burger";
import Aos from "aos";
import { openModal } from "./total functions/modal";


burger();
Aos.init({
    duration: 1000,
});
openModal();