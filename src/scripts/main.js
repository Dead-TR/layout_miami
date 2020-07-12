'use strict';

const consultationForm = document.querySelector('.consultation__form');
const contactForm = document.querySelector('.contact__form');

function clean(evnt) {
  evnt.preventDefault();
  document.location.href = './';
}

consultationForm.addEventListener('submit', clean);
contactForm.addEventListener('submit', clean);
