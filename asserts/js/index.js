function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
        modal.classList.add('mostrar');
}

const about = document.querySelector('#about');
about.addEventListener('click', () => {
    iniciaModal('modal-about');
});