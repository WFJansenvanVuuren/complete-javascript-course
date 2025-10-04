'use strict';

///////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//Select a class
const header = document.querySelector('.header');
//Select multiple classes
const allSections = document.querySelectorAll('.section');
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const message = document.createElement('div');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const imgTargets = document.querySelectorAll('img[data-src]'); //select on the elements with the attribute of data src.

///////////////////////////////////////

//Open account - modal
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Close account - modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Listens for a click and then runs openModal function
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
//Listens for a click and then runs closeModal function
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
//Implementing Page Navigation

//This is not a good way, can impact performance
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); //stops scrolling because of anchors
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Event Delegation:
//We use bubbling and but the event delegtions on a common parent of the elements.

//1. Add eventListerner to common parent element.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  //2. Determine which element originated the event.
  // console.log(e.target);
  e.preventDefault();
  //Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('link');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
//Implementing Smooth Scrolling

buttonScrollTo.addEventListener('click', function (e) {
  //Modern Way(Only works in modern browsers)
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
//Building a Tabbed Component

tabsContainer.addEventListener('click', function (e) {
  //event delegation/ using the parent
  //create a button
  const clicked = e.target.closest('.operations__tab'); //search for closest operations tab.
  console.log(clicked);
  if (!clicked) return; //Guard Clause
  tabs.forEach(tab => tab.classList.remove('operations__tab--active')); // set all tabs down
  clicked.classList.add('operations__tab--active'); // tab moves up when selected
  //Active content area
  const tabData = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  tabsContent.forEach(
    tab => tab.classList.remove('operations__content--active') //remove active class content
  );
  tabData.classList.add('operations__content--active'); // add clicked class content
});

///////////////////////////////////////
//Passing Arguments to Event Handelers

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', e => handleHover(e, 0.5));
nav.addEventListener('mouseout', e => handleHover(e, 1));
///////////////////////////////////////
//Implementing Sticky Navigation:

// The Scroll Event

//nav bar should start to stick when we get to section 2.
//Determine the position of section 2
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//A Better Way: The Intersection Observer API

//The callback funtion will get called each time that the observed element(section1) is intersecting the root element at the threshold that we defined.
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: header, //root element will be the target element we want our target element to intersect. Null lets us observe our element intersecing the entire viewport.
//   threshold: [0.01], //This is the percentage of intersection at which the callback will be called.
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect();
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootmargin: `-${navHeight}`, // has to be px
});
headerObserver.observe(header);

///////////////////////////////////////
//Revealing Elements on Scroll:

//Reveal Sections

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return; //return is a safegaurd

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden'); //adds the class from css
});

///////////////////////////////////////
//Lazy Loading Images:

// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  //Replace src attribute data src img.
  entry.target.src = entry.target.dataset.src; //Javascript loads image behins the scenes and once it is finished it will emit the load event.
  // entry.target.classList.remove('lazy-img'); //We dont remove the blur here because we want to make sure the image finishes loading first.
  //So we use the load event that will run once the img has completed loading.
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootmargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
//Building a Slider component:

//Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  //Create a new variable for the current slide.
  let curSlide = 0;
  const maxSlide = slides.length;

  //FUNCTIONS
  //Creating dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  //Event Handlers

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //Keyboard Keys
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    //Can also do it with short circuting
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // console.log('DOT');
      const { slide } = e.target.dataset;
      curSlide = Number(e.target.dataset.slide);
      goToSlide(slide);
      activateDot(curSlide);
    }
  });
  init();
};
slider();

///////////////////////////////////////
//Lifecycle DOM Event:

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.return = '';
// });

///////////////////////////////////////
//Cookie Message
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class = "btn btn--close-cookie">Got it!</button>';

header.append(message); //.append adds the the element as the last child element

//Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// message.style.backgroundColor = '#37383d';
// message.style.width = '101%';
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

///////////////////////////////////////
//Selecting, creating and deleting elements

//Selecting entire html document
// console.log(document.documentElement);
// //Select head
// console.log(document.head);
// //Select body
// console.log(document.body);

//Logs a node list
// console.log(allSections);

//Get element by id
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn')); //We don't need a selector(.)

//Creating and inserting elements

//.insertAdjacentHTML

//Create Cookie Messages

// header.prepend(message); //.prepend adds the the element as the first child element

// header.append(message.cloneNode(true))

// header.before(message);
// header.after(message);

/*
///////////////////////////////////////
//Styles, Attributes and Classes

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '107%';

console.log(message.style.height);
console.log(message.style.color);
console.log(message.style.backgroundColor); //We can only get the style of elements we manually computed.

//Get the styles
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');
document.documentElement.style.setProperty('background-color', 'lightgrey');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
console.log(logo.src); //Relative to folder
console.log(logo.getAttribute('set')); //Absolute version

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data Attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//Dont use!!!
//logo.className = 'Jonas';
*/

///////////////////////////////////////
//Implementing Smooth Scrolling

// const buttonScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// //Get the coordinates of the section we want to scroll to.
// console.log(s1coords);
// console.log(e.target.getBoundingClientRect());
// console.log('Current scroll(X/Y', window.pageXOffset, pageYOffset);

// Scrolling;
// window.scrollTo(s1coords.left + pageXOffset, s1coords.top + window.pageYOffset);

//Old school way of doing it.
// window.scrollTo({
//   left: s1coords.left + pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

//get current scroll position
// console.log('Current scroll(X/Y', window.pageXOffset, pageYOffset);
//read the height and width of the viewport
// console.log(
//   'height/width viewport',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );
/*
///////////////////////////////////////
//Types of Events and Event Handlers
//See: /webdev/documentation/javascript_event_reference.md
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventlistener: Great, you are reading the heading');
};
//The old way of doing it.
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great, you are reading the heading');
// };

h1.addEventListener('mouseenter', alertH1);

//Remove eventHandler & add timer
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
*/
/*
///////////////////////////////////////
//Event Propogation:

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);

  //Stop propogation
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  }
  //true//eventListner no longer listens for bubbling events but for capture events.
);
*/
/*
///////////////////////////////////////
//DOM Traversing:

const h1 = document.querySelector('h1');

//Going downwards: Selecting child elements.
console.log(h1.querySelectorAll('.highlight'));
//If we only want direct children nodes
console.log(h1.childNodes);
//If we only want direct children
console.log(h1.children);
//Select first element child
h1.firstElementChild.style.color = 'white';
//Select last element child
h1.lastElementChild.style.color = 'orange';

//Going upwards: Selecting parent element.

//Selecting direct parents node
console.log(h1.parentNode);
//Selecting direct parents element
console.log(h1.parentElement);
//Finding a parent element(can be used for event delegation)
h1.closest('.header').style.background = 'var(--gradient-secondary)';

//Going sideways: Selecting sibling elements
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
//For nodes
console.log(h1.previousSibling);
console.log(h1.nextSibling);
//To get all the sibling. Move to parent and then get all siblings.
console.log(h1.parentElement.children);

console.log(
  [...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) el.style.transform = 'scale(0.5)';
  })
);
*/
