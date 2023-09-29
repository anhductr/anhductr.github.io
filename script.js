'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
    );
    
  section1.scrollIntoView({ behavior: 'smooth' });
});


document.querySelector('.nav__links').addEventListener('click', function (e) {
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
  }
});

///////////////////////////////////////
// Tabbed component
//for tabbed componnent
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  
  if(!clicked) return;
  
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
  
});


///////////////////////////////////////
// Menu fade animation
const nav = document.querySelector('.nav');
function menuFade(e) {
  let navLink = e.target;  
  if(navLink.classList.contains('nav__link')){
    let navItems = navLink.closest('.nav').querySelectorAll('.nav__link');
    let logo = navLink.closest('.nav').querySelector('img');
    navItems.forEach(t => { 
      if(t !== navLink){
        t.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
}

nav.addEventListener('mouseover', menuFade.bind(0.5));
nav.addEventListener('mouseout', menuFade.bind(1));

///////////////////////////////////////
// Sticky navigation: Intersection Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

function sticky(e) {
  const [entry] = e;
  
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const observer = new IntersectionObserver(sticky, {
  root: null, 
  threshold: 0,
  rootMargin: `-${navHeight}px`, //âm để xác định vị trí phần tử nav sẽ xuất hiện và specify sao cho đúng kích thước với nav
});

observer.observe(header);



// ///////////////////////////////////////
//revealing section when scroll
const allSections = document.querySelectorAll('.section');

function stickyNav(entries, observer){
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting) return; 
  entry.target.classList.remove('section--hidden');
  // observer.unobeserve(entry.target);
}

const sectionObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.15,
})

allSections.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
})


//Layzy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
function loadImg(entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
}

const lazyObs = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "50px",
})

imgTargets.forEach(img => lazyObs.observe(img));

// ///////////////////////////////////////
// // Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let currentSlide = 0;
const slidesLen = slides.length;

function goToSlide(currentSlide) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - currentSlide ) * 100}%)`;
  });  
}

function nextSlide() {
  if(currentSlide === slidesLen - 1){
    currentSlide = 0;
  }else{
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
}

function prevSlide() {
  if(currentSlide === 0){
    currentSlide = slidesLen - 1;
  }else{
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
}


function createDots() {
  slides.forEach((_, i) => dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`));
}


function activateDot(currentSlide) {
  document.querySelectorAll('.dots__dot').forEach(t => t.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${currentSlide}"]`).classList.add('dots__dot--active');
}

function init(){
  goToSlide(0); 
  createDots();
  activateDot(0);
}

init();

btnRight.addEventListener('click', function(){
  nextSlide();
});

btnLeft.addEventListener('click', prevSlide);

dotContainer.addEventListener('click', function(e){
  if(!e.target.classList.contains('dots__dot')) return;
  const slide = e.target.dataset.slide;
  activateDot(slide);
  goToSlide(slide);
})

document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowLeft') prevSlide();
  else nextSlide();
})

// slider();
