'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal); //We do not write closeModal() because this will immediately execute the function instead of when we call the function.
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  // console.log(event.key);
  //if the event press key is 'Escape' and the modal does not contain the hidden class, execute the closeModal() function.👇
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
