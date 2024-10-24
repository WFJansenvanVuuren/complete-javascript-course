'use strict';
/*
function caclAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating new variable with same name as outer scope's variable.
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //reassigning outer scope's variable.
      output = 'NEW OUTPUT';
    }
    // console.log(str); We get an error because const an let are block scoped, meaning they are only available inside the block they are created. But will work with var inside the function.
    console.log(millenial);
    // console.log(add(2, 3));  will only work with strict mode off.
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
caclAge(1991);


//Hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


//The 'this' keyword
// The this keyword will always point to the  object calling the method.

console.log(this);

const caclAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
caclAge(1991);

const caclAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
caclAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

//Copied the method from one object to another(method borrowing)
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

//Will not work because it is a regular function call.
const f = jonas.calcAge;
f();

//This keyword with regular functions and arrow functions
//Never use an arrow function as a method

var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    //Using self keyword to preserve the this keyword
    // const self = this; //self of that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solutions 2
    //Using arrow function inside a method
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

//Never use an arrow function as a method

jonas.greet();
jonas.calcAge();

//Arguments keyword
//The arguments keyword is only available in regular functions

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

//undefined in arrow functions
const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8, 12);


//Primitives vs. Objects (Primitive vs. Reference Types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend', friend);
console.log('Me', me);
*/
//Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

//Copying Objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//Object.assign creates a shallow copy the only copies the properties in the first level.
//Did not change the family object because the array in the object is a deeply nested object.
const jessicacopy = Object.assign({}, jessica2);
jessicacopy.lastName = 'Davis';
jessicacopy.family.push('Mary');
jessicacopy.family.push('John');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicacopy);
