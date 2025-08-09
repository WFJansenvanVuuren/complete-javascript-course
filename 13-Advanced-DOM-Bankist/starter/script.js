'use strict';

///////////////////////////////////////
// Modal window

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

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsConstent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  //create a button
  const clicked = e.target.closest('.operations__tab');
  console.log('clicked');
  clicked;
});
//Event Delegation

//Cookie Message

// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics.<button class = "btn btn--close-cookie">Got it!</button>';

// header.append(message); //.append adds the the element as the last child element

//Deleting elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

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
