export function burger() {
    let icon = document.querySelector('[data-burger]');
    let menu = document.querySelector('[data-burgermenu]');
    let close = document.querySelector('[data-close]');
    if (icon) {
        icon.addEventListener('click', () => {
            //вызов только при наличии меню
            menu ? openburger() : console.log('меню отсутствует в разметке');

            function openburger() {
                //показываем меню
                menu.classList.add('active');
                setTimeout(() => {
                    menu.style.transform = 'rotateY(0)';
                }, 300);
                //блокируем основную страницу
                document.body.classList.add('_lock');
                //запускаем закрытие окна
                close ? closewindow() : console.log('кнопка закрытия окна отсутсвует');
            }

            function closewindow() {
                close.addEventListener('click', () => {
                    menu.style.transform = 'rotateY(90deg)';

                    setTimeout(() => {
                        menu.classList.remove('active');
                        document.body.classList.remove('_lock');
                    }, 300);
                })
            }
        })
    }
}