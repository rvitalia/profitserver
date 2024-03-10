import Aos from "aos";
import { burger } from "./total functions/burger";
import { openModal } from "./total functions/modal";

// console.log('work');
function initMap(){
    var map = new google.maps.Map(document.getElementById('aboutmap--about'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 1
      });
}
// initMap();
burger();
openModal();
Aos.init({
  duration: 1000,
})