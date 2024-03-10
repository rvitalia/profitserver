export function openModal() {

    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    const buttonSubmit = document.querySelector('[data-modal="open"]');
    const modal = document.querySelector('[data-modal="modal"]');
    const buttonClose = document.querySelectorAll('[data-close]');

    if(modal){
        buttonSubmit.addEventListener('click', (event) => {
            // отключить если необходимо
            event.preventDefault();
    
            document.body.style.paddingRight = paddingOffset;
            let fixwindow = document.querySelectorAll('.fix__block');
    
            fixwindow.forEach(element => {
                element.style.paddingRight = paddingOffset;
            });
    
            modal.classList.add('active-page');
            document.body.classList.add('_lock');
    
            setTimeout(function () {
                modal.classList.add('animation');
            }, 400)
    
            buttonClose.forEach(element => {
                element.addEventListener('click', () => {
                    modal.classList.remove('animation');
                    setTimeout(function () {
                        modal.classList.remove('active-page');
                        fixwindow.forEach(element => {
                            element.style.paddingRight = 0;
                        });
                        document.body.style.paddingRight = 0;
                        document.body.classList.remove('_lock');
                    }, 400)
                })
            });  
        })
    }

}