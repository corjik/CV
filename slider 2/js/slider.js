const slides = document.querySelectorAll('.slide');
const prev = document.querySelectorAll("[data-action='prev']")[0];
const next = document.querySelectorAll("[data-action='next']")[0];
const first = document.querySelectorAll("[data-action='first']")[0];
const last = document.querySelectorAll("[data-action='last']")[0];

slides[0].classList.add('slide-current');

var currentSlide = document.querySelector(".slide-current");

checkBorder();
next.addEventListener('click', switchSlide);
prev.addEventListener('click', switchSlide);
last.addEventListener('click', edge);
first.addEventListener('click', edge);

function checkBorder() {
  if (currentSlide.previousElementSibling === null) {
    prev.classList.add('disabled');
    first.classList.add('disabled');
  }
  else {
    prev.classList.remove('disabled');
    first.classList.remove('disabled');
  };
  if (currentSlide.nextElementSibling === null) {
    next.classList.add('disabled');
    last.classList.add('disabled');
  }
  else {
    next.classList.remove('disabled');
    last.classList.remove('disabled');
  };
}

function switchSlide() {
  if (this.classList.contains('disabled')) {
    event.preventDefault();
    return;
  }
  else {
    currentSlide.classList.remove('slide-current');
      if (this === next){
        currentSlide.nextElementSibling.classList.add('slide-current');  
      }
      else{
        currentSlide.previousElementSibling.classList.add('slide-current');  
      };
    currentSlide = document.querySelector(".slide-current");
    checkBorder()      
  };
}

function edge() {
  currentSlide.classList.remove('slide-current');
  if (this === first) {
    slides[0].classList.add('slide-current');  
  }
  else {
    slides[slides.length-1].classList.add('slide-current');  
  };
  currentSlide = document.querySelector(".slide-current");
  checkBorder();
}