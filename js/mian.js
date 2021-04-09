'use strict';

const navarea   = document.querySelectorAll('nav li');
const smoothAreas = document.querySelectorAll('section');

for (let i = 0; i < navarea.length; i++){
  navarea[i].addEventListener('click', function () {
    let smoothY = smoothAreas[i].getBoundingClientRect();
    window.scrollTo({
      top: smoothY.y,
      behavior: 'smooth',
    });
  });
};

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
})
