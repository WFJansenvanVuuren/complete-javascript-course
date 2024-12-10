'use strict';

///////////////////////////////////////////////
//Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userInput = Number(
      prompt(
        `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n(Write option number)`
      )
    );
    //   if (userInput === 0) {
    //     this.answers[0] += 1;
    //   } else if (userInput === 1) {
    //     this.answers[1] += 1;
    //   } else if (userInput === 2) {
    //     this.answers[2] += 1;
    //   } else if (userInput === 3) {
    //     this.answers[3] += 1;
    //   } else {
    //     console.log('Incorrect input');
    //   }

    // Rather use the AND operator
    typeof userInput === 'number' &&
      userInput < this.answers.length &&
      this.answers[userInput]++;

    console.log(this.answers);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//Note: Your code seems correct overall, but there’s one potential issue that could be causing your array (poll.answers) not to update: the asynchronous nature of prompt and the console.log(poll.answers) placement.
// Here's a breakdown of what's happening:

// Prompt and user input: The registerNewAnswer method prompts the user to select an option, and updates the corresponding answer count based on the user’s input.

// The issue: The line console.log(poll.answers) runs immediately after the event listener is set, before any user interaction takes place. Therefore, it logs the initial state of poll.answers, which is [0, 0, 0, 0].

/*
///////////////////////////////////////////////
//The Call and Apply Method

const lufthansa = {
  airline: 'Lusfthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    //Writing methods using enhanced object literal syntax,before this we used to do it this way:book:function(){},(Object method)
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedt');
lufthansa.book(635, 'Mike Smith');
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; //Creating a new function so that we can reuse the existing 'book' function in the lufthansa object.
// book(23, 'Sarah Williams')// Will return 'undefined' because the 'this' keyword no longer points to the object(lufthansa).

//So we can fix this by using 3 function methods:
//1. Call Method:
book.call(eurowings, 23, 'Sarah Williams'); //In the call method the first argument is what we want the 'this' keyword to point to.
//👆Here we did not call the book method, but the call function that called the book method with the this keyword set to eurowings.
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//2. Apply Method:
//The apply method does exactly the same thing but it does not receive an argument after the 'this' keyword, but instead it takes an Array of the arguments:
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
//The apply method is not used so much in modern JavaScript anymore because we have a better way of doing it now:

//3.The Bind Method:
//The bind method does not immediately call the function, instead it returns a new function where the 'this' keyword is bound.
//It is set to whatever value we pass into bind.

const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings); //This will not call the book function, instead it return a new function where the 'this' keyword wil always be set to eurowings. Instead of using the call method all the time we can now just use these functions.
bookEW(23, 'Steven Williams');

//In the call method we can pass multiple arguments except for the 'this' keyword.
//We can do the same with the bind method and then these will be defined, so the function will then always be called with these same arguments. Allows us to set in stone certain arguments so resulting arguments can become even simpler.

//Now the flight number is preset and we just need to pass in the name. If we change the number 23 to say 1234, then those flights will be booked to that flight number.Specifying parts of the argumets beforehand is called partial application.(a Part of the argument of the orginal function is already applied/set)
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedt');
bookEW23('Martha Cooper');

//We can also use this method where we use objects together with event listeners:
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
//When we click on the button we get NaN.
//The reason is because the 'this' keyword is the button element('.buy')
//This is because in an 'eventhandler' function the 'this' keyword always pionts to the elements on which that handler is attached, in this case it is attached to 'document.querySelector('.buy')/the button elemant'.

//This means we need to manually define the this keyword using the bind method:
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application(Preset parameters)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
//We use null because there is no 'this' keyword.
const addVAT = addTax.bind(null, 0.23);
//This would be the same as writing:
// addTax = value => value + value * 0.23;

console.log(addVAT(100));

//Rewrite this using the tecnique of one function returning another function:

const addTaxRate = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

addTaxRate(0.23)(100);

//Other Way:
const addTaxRate2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate2(0.23);
console.log(addVat2(100));
*/
/*
///////////////////////////////////////////////
//Functions Returning Functions
//Returning functions will become useful when using functional programming.

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); //greeterHey is now the function(name)
greeterHey('Jonas');
//This works because of Closures

greet('Hello')('Jonas');
//We can also do it like this.

//Returing functions with arrow functions
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('Hi')('Jonas');
*/
/*
///////////////////////////////////////////////
//Functions Accepting Callback Functions
//Calback functions allows us to split up our code into more reuseable and interconnected parts.
//Callback functions allow us to create abstractions: This means we hide the detail of some code implenentation because we do not care about all that detail. We hide certain details so that the code is cleaner and easier to understand.(OOP)

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

//JS uses callbacks all the time!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/
///////////////////////////////////////////////

//First Class and Higher-Order Functions
//Javascript treats functions as first-class citizens
//This means that functions are treated as values
//Funtions are just another 'type' of object

//Higher-Order Functions
//A function that receives another function as an argument, a function that returns a new function or both.
//This is only possible because of First-Class Functions.

//First-Class functions means all functions are values.
//Higher-Order functions are possible because the language supports First-Class functions

/*
///////////////////////////////////////////////
//How Passing Arguments Work: Value & Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schemdt',
  passport: 214687224,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //This is a completely different variable so it will not change the 'flight' variable. It won't change because it is a primitive.
  passenger.name = 'Mr.' + passenger.name; //When we pass a refernce type to a function, what is copied is the reference to the object in the memory heap, but they both point to the same object.

  if (passenger.passport === 214687224) {
    alert('Checked in');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//Is the same as doing this
// const flightNum = flight;
// const passenger = jonas;

//How the interaction of different functions with the same object can create issues:
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(jonas);
checkIn(flight, jonas);

//Two terms that are used all the time when dealing with functions:
//Passing by value:
//
//Passing by reference:(Javascript does not have Passing by reference)
*/
/*
///////////////////////////////////////////////
//Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5 Way
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/
