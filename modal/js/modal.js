const open = document.querySelector('#open');
const modalContainer = document.querySelector('.modal-container');

const openModal = () => {
  modalContainer.classList.add('show');
}

const closeModal = (event) => {
  if(event.target === modalContainer) {
    modalContainer.classList.remove('show');
  }
}

open.addEventListener("click", openModal);
window.addEventListener("click", closeModal);