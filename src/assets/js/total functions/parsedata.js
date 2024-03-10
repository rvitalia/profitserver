export function dataParse() {
  const objectContrys = {
    'Almaty, Kazakhstan': 'KZ',
    'Amsterdam, Netherlands': 'NL',
    'Chelyabinsk, Russia': 'RU',
    'Frankfurt, Germany': 'DE',
    'Gdansk, Poland': 'PL',
    'Hong Kong': 'CN',
    'Singapore': 'SG',
    'Madrid, Spain': 'ES',
    'Los Angeles, USA': 'US',
    'Toronto, Canada': 'CA',
    'Sofia, Bulgaria': 'BG',
    'London, UK': 'GB',
    'Geneva, Switzerland': 'CH',
    'Riga, Latvia': 'LV',
    'Tel Aviv, Israel': 'IL',
    'Stockholm, Sweden': 'SE',
    'Izmir, Turkey': 'TR',
    'Prague, Czech Republic': 'CZ'
  }

  // Замените URL на адрес вашего API
  const apiUrl = './assets/images/usd.json';

  // Выполнение GET-запроса с использованием Fetch API
  fetch(apiUrl)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Ошибка при выполнении запроса');
      }
    })
    .then(data => {
      const dataArr = Object.entries(data);
      // console.log(dataArr);
      //=====================сверим общее количество разметки в странице и в json файле==============================
      //считываем контейнер с флагами
      const boxFlags = document.querySelector('.herovirtual__inner__tabs');
      const boxTariffs = document.querySelector('[data-container]');

      const htmlFlags = boxFlags.childElementCount;
      const jsonObjects = Object.keys(data).length;

      (htmlFlags == jsonObjects) ? parseObject() : console.log('разметка не соответствует json файлу. проверьте разметку. Количество стран не совпадает с полученными данными из json файла')

      function parseObject() {

        //получаем каждую страну отдельно
        for (const iterator of dataArr) {
          // ===============================Работаем с флагами=============================================

          //Получаем названия стран и вставляем в нужное место
          let countryName = iterator[0];
          let currentFlag;
          for (const key in objectContrys) {
            if (key == countryName) {
              currentFlag = objectContrys[key];
            }
          }
          //устанавливаем текст
          const boxFlag = boxFlags.querySelector(`[data-curent="${currentFlag}"]`);
          const countryDesc = boxFlag.querySelector('.herovirtual__inner__tabs__country__desc');
          countryDesc.textContent = iterator[0];

          // console.log(currentFlag);
          // console.log(iterator[0]);

          //==============================работаем  с тарифами - получаем объекты с тарифами==============================================
          // console.log(iterator[1]);
          const countryTariffs = boxTariffs.querySelector(`[data-cart="${currentFlag}"]`);
          //выберем все тарифы
          let tariffsItem = countryTariffs.children;
          //исключим из коллекции dedicated

          let difference = countryTariffs.childElementCount - Object.keys(iterator[1]).length;

          //подсказки о соответствии разметки с кодом
          if (countryTariffs.querySelector('.herovirtual__inner__carts__item--dedicated')) {
            difference > 1 ? console.log('тарифов в стране' + ' ' + currentFlag + ' ' + 'больше чем нужно') : "";
          }
          else {
            difference < 1 ? console.log('тарифов в стране' + ' ' + currentFlag + ' ' + 'меньше чем нужно') : "";
          }

          difference == 1 ? insertData() : '';

          function insertData() {
            let i = 0;
            for (const item of tariffsItem) {
              //не трогаем выделенные сервера
              if (!item.classList.contains('herovirtual__inner__carts__item--dedicated')) {
                // console.log(item);
                const currentTariffs = Object.values(iterator[1]);
                // console.log(currentTariffs[i]);
                //парсим прайс лист
                const priceList = `
                            <li>
                                <span>${currentTariffs[i]['month']} usd/mon</span>
                                <p>if payment for 1 months</p>
                            </li>
                            <li>
                                <span>${currentTariffs[i]['3 month']} usd/mon</span>
                                <p>if payment for 3 months</p>
                            </li>
                            <li>
                                <span>${currentTariffs[i]['6 month']} usd/mon</span>
                                <p>if payment for 6 months</p>
                            </li>
                            <li>
                                <span>${currentTariffs[i]['12 month']} usd/mon</span>
                                <p>if payment for 12 months</p>
                            </li>
                  `;
                const parrentPrice = item.querySelector('.herovirtual__inner__carts__item__price__desc');
                parrentPrice.innerHTML = '';
                parrentPrice.insertAdjacentHTML('beforeend', priceList);

                //докидываем остальные объекты по тарифу.
                const priceMonth = currentTariffs[i]['month'];
                item.querySelector('.herovirtual__inner__carts__item__price').textContent = '$ ' + priceMonth;
                const counts = item.querySelectorAll('.herovirtual__inner__carts__item__count');
                const cores = currentTariffs[i]['Cores'];
                counts[0].textContent = cores;
                const ram = currentTariffs[i]['RAM'];
                counts[1].textContent = ram + 'GB';
                const ssd = currentTariffs[i]['SSD'];
                counts[2].textContent = ssd + 'GB';
                // для разрешения меньше 1100px
                item.querySelector('.herovirtual__inner__carts__item__buy__price').textContent = '$ ' + priceMonth;
              }
              i++;
            }
          }



          // console.log(tariffsItem);
        }

      }
      // Обработка данных API
    })
    .catch(error => {
      console.error(error);
    });
}