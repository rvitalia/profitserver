function returnedWindow() {
    let modal = document?.querySelector('[data-modal="returned"]');
    if (modal) {

        let buttonCloses = modal.querySelectorAll('[data-close]');
        for (const buttonClose of buttonCloses) {
            buttonClose.addEventListener('click', () => {
                modal.style.opacity = "0";
                setTimeout(() => {
                    modal.classList.remove('active');
                }, 300);
            })
        }
    }
}

returnedWindow();

