// navigation menu


const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');
const body = document.body;

menu.addEventListener('click', () => {
  body.classList.add('active');
})
close.addEventListener('click', () => {
  body.classList.remove('active');
})

// carousel 

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.right');
const prev = document.querySelector('.left');
const navLists = document.querySelectorAll('.nav__list a');

const auto = false;
const intervalTime = 5000;
let slideInterval; 

const nextSlide = () => {
  const current = document.querySelector('.current')
  current.classList.remove('current');
  if(current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
   

  
  } else {
    slides[0].classList.add('current');
  
    
  }
  setTimeout(() => current.classList.remove('current'));
 
}

const prevSlide = () => {

  const current = document.querySelector('.current')

  current.classList.remove('current');
  if(current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
   
  } else {
    slides[slides.length -1].classList.add('current');
  
  }
  setTimeout(() => current.classList.remove('current'));
 
}
next.addEventListener('click', e => {
  nextSlide();
  updateNavLinksColor();
  });

prev.addEventListener('click', e => {
  prevSlide();
  updateNavLinksColor();
  });

if(auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// update the nav link colors based on current slide

function updateNavLinksColor() {
  slides.forEach((slide, index) => {
    if (slide.classList.contains('current')) {
      if (index === 2 || index === 3) { // 0-based index, so 2 is the 3rd slide, 3 is the 4th
        navLists.forEach(link => {
          link.classList.add('active');
        });
      } else {
        navLists.forEach(link => {
          link.classList.remove('active');
        });

      }
     
    }
  });
}

