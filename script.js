'use strict';

// variable defining for the DOM elements
// modal show close overlay

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// button classes

const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// iterate through each of the button and show the button name or add an evenlistener to do something if you click that button

// in this case open and show with the overlay

// function for opening the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  console.log(btnOpenModal[i].addEventListener('click', openModal));

// now close the overlay window with different keys
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// close when you click outside the modal window
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// implement this as a function so we can call this as function right.

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// now closing

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// how to respond to a keypress events
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
