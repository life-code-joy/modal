'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for(let i = 0; i < btnsShowModal.length ; i++){
  btnsShowModal[i].addEventListener('click', openModal);
}



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//eventlistener - 3 types of key presses are available -> keyup, keydown, keypress

document.addEventListener('keypress', function(e) {
  // console.log(e.key);
  if(e.key === 'c' && !modal.classList.contains('hidden')){
    // console.log('c was pressed');
    
      closeModal();
    
  }
});


