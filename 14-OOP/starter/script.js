'use strict';
/*
//---------------------------------------------------------------//
// CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR:
//---------------------------------------------------------------//
// Difference between normal function and constructor function: Constructor called with new.
// Arrow functions don't work because we need the this keyword.
// Constructor function names start with a capital letter.

// Steps:
// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const Person = function (firstName, birthYear) {
  //   console.log(this);
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never use methods inside constructor functions. Would create a copy of the method and attach it to every single object. Can effect performance.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas, matilda, jack);

//Test if it is an instance of:
console.log(jonas instanceof Person);

// Prototypes:

//All functions have a property called prototype, including constructor functions.
//The object we create using the constuctor function gets access to all the properties and all the methods that we define on the constructor's propotype property.
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
console.log(jonas);

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //Not the prototype of Person but of the object linked to Person. Should actualling be called .protoypeOfLinkedObject and not .prototype.

Person.prototype.species = 'Homo Sapien'; // This property is not inside the jonas object, it only has access to it because of its prototype.
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species')); //Not a property of jonas

//---------------------------------------------------------------//
// PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS:
//---------------------------------------------------------------//

console.log(jonas.__proto__);
//Object.prototype. Top of prototype chain.
console.log(jonas.__proto__.__proto__); //Moving up in the prototype chain --> prototype property of object.

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 2, 2, 4, 6, 6, 6, 6, 4, 5];
//Arrays do not have thier own methods, they inherit methods from thier prototype.
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
//Adding a new method the the protoype property of the array constructor.
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

//Going up the chain:
const h1 = document.querySelector('h1');

//Function
console.dir(x => x + 1);
*/
/*
//---------------------------------------------------------------//
// CODING CHALLENGE:
//---------------------------------------------------------------//

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Vehicle = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Vehicle('BMW', 120);
const mercedes = new Vehicle('Mercedes', 95);

Vehicle.prototype.accelerate = function () {
  this.speed += 10;
};

Vehicle.prototype.brake = function () {
  this.speed -= 5;
};

// bmw.brake();
bmw.accelerate();
console.log(bmw);

// mercedes.brake();
mercedes.accelerate();
console.log(mercedes);
*/

//---------------------------------------------------------------//
// ES6 CLASSES:
//---------------------------------------------------------------//

// Class Expression:
// const PersonCL = class{

// }

// Class Declaration:
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will added to propotype property.
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hi ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica.__proto__);
jessica.calcAge();
console.log(jessica.age); //As a property not method

console.log(jessica / __proto__ === PersonCl.prototype);

// Adding a method manually to the prototype:
// PersonCl.prototype.greet = function () {
//   console.log(`Hi ${this.firstName}`);
// };
jessica.greet();

// Classes are not hoisted.
// Classes are first class citizens.
// Classe are executed for strict mode.

const walter = new PersonCl('Walter White', 1965);

//---------------------------------------------------------------//
// SETTERS & GETTERS:
//---------------------------------------------------------------//

// Are functions that get and set the values but they look like regular properties.
//

// Object Literal
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); //Here we write it as a propoperty, we do not call the method.

account.latest = 50;
console.log(account.movements);
