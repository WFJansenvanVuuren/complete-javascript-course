/*
let  js = 'amazing';
console.log( 40+8+23-10);


// If more than one word is used in a variable the first word is lower case and all following words start with uppercase.
// Variables cant start with numbers.

let firstName = 'Jonas';
let first = 'jonas'
let firstNamePerson

console.log(firstName)
let PI = 3.1415;

let myFirstJob = "Programmer"
let myCurrentJob = "Draughtsman"




Data Types:

// The first time we declare a variable we need to use let

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'jonas');
console.log(typeof 1);

// We do not use the let value when we redefine a value
javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);
console.log(javascriptIsFun);

// Undefined:
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer'
job = 'teacher'
*/

// Arithmetic/Math Operators
const now = 2024;
const ageJonas = now - 1989;
const ageSarah = now - 2015;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = 'Joe'
const lastName = 'Doe'
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1989 > now - 2015);